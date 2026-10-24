#!/usr/bin/env python3
"""Créer les modèles instrumentaux locaux, sans dépendance ni source réseau.

Les dix créations pédagogiques sont originales (2026). Le onzième fichier est un
arrangement synthétique du thème de l'Ode à la joie de Beethoven (1824), transposé
en do majeur. Aucun fichier n'est présenté comme une archive ni l'œuvre intégrale.
Une voix de synthèse ne chante pas les paroles : le modèle joue la mélodie.
"""
from pathlib import Path
import math
import struct
import wave

FOLDER = Path(__file__).resolve().parent
RATE = 16000
TAU = 2 * math.pi
SEMITONES = {'C':0,'C#':1,'D':2,'D#':3,'E':4,'F':5,'F#':6,'G':7,'G#':8,'A':9,'A#':10,'B':11}

def hz(name):
    if name == '-':
        return 0
    midi = (int(name[-1]) + 1) * 12 + SEMITONES[name[:-1]]
    return 440 * 2 ** ((midi - 69) / 12)

def tone(note, duration, volume=.28, timbre='round'):
    f = hz(note)
    samples = []
    count = round(duration * RATE)
    for i in range(count):
        t = i / RATE
        # Attaque et relâchement progressifs ; aucun clic à la jonction.
        env = min(1, t / .018, (duration - t) / .07)
        v = math.sin(TAU * f * t) if f else 0
        if timbre == 'bright':
            v = (v + .35 * math.sin(TAU * 2 * f * t) + .12 * math.sin(TAU * 3 * f * t)) / 1.47
        elif timbre == 'bell':
            v = (v + .22 * math.sin(TAU * 3 * f * t)) / 1.22
            env *= math.exp(-2.2 * t / max(duration,.01))
        samples.append(volume * max(0,env) * v)
    return samples

def melody(notes, beat=.43, volume=.28, timbre='round'):
    out=[]
    for item in notes.split():
        if ':' in item:
            note,multiple=item.split(':');duration=beat*float(multiple)
        else:
            note,duration=item,beat
        out.extend(tone(note,duration,volume,timbre))
    return out

def pause(seconds=.3):
    return [0.] * round(seconds*RATE)

def write(name,samples):
    # Pas de normalisation automatique : les contrastes dynamiques sont conservés.
    assert samples and max(map(abs,samples)) < .98, name
    pcm=b''.join(struct.pack('<h',round(max(-.98,min(.98,s))*32767)) for s in samples)
    with wave.open(str(FOLDER/name),'wb') as out:
        out.setnchannels(1);out.setsampwidth(2);out.setframerate(RATE);out.writeframes(pcm)
    print(f'{name}: {len(samples)/RATE:.2f}s, {len(pcm)+44} octets')

# Phrases A puis B, reprises pour les quatre vers. Les paroles sont affichées
# séparément ; le phrasé syllabique est accompagné par l'adulte.
SONGS={
 'bonjour.wav':('C4 D4 E4 G4 G4 E4 D4 C4','E4 F4 G4 A4 G4 E4 D4 C4'),
 'pluie.wav':('E4 E4 G4 E4 D4 D4 C4 C4','G4 A4 G4 E4 D4 E4 C4 C4'),
 'canon.wav':('C4 E4 G4 C5 B4 G4 E4 C4','D4 F4 A4 D5 C5 A4 F4 D4'),
 'voyage.wav':('G4 G4 E4 C4 D4 E4 G4 G4','A4 A4 G4 E4 D4 E4 C4 C4')
}
for name,(a,b) in SONGS.items():
    a=melody(a,beat=.48);b=melody(b,beat=.48)
    write(name,pause()+a+pause()+a+pause()+b+pause()+b+pause(.6))

# Une pulsation audible régulièrement, avec changement du motif de notes.
a=melody('C4 E4 G4 E4 C4 E4 G4 E4',.42,timbre='bright')
b=melody('F4 A4 C5 A4 G4 E4 D4 C4',.42,timbre='bright')
write('roues.wav',pause()+a+a+b+b+pause(.5))
# Crescendo : même motif et même tempo, intensité réellement croissante.
base='C4 D4 E4 G4 E4 D4 C4:2'
write('nuage.wav',pause()+sum((melody(base,.34,volume=v) for v in [.08,.14,.22,.34]),[])+pause(.6))
# Même phrase, deux timbres alternés : l'écoute n'a pas besoin d'une voix.
base='C4 E4 G4 C5 G4 E4 D4 C4'
write('matieres.wav',pause()+melody(base,.36,timbre='round')+pause()+melody(base,.36,timbre='bright')+pause()+melody(base,.36,timbre='round')+pause()+melody(base,.36,timbre='bright')+pause(.6))
a=melody('C4 D4 E4 G4 E4 D4 C4:2',.36,volume=.22)
b=melody('A4 A4 F4 F4 D4 D4 B3:2',.36,volume=.3,timbre='bright')
write('aba.wav',pause()+a+pause()+b+pause()+a+pause(.7))
# Deux voix indépendantes et simultanées ; pas seulement une octave doublée.
upper=melody('E4 F4 G4 E4 D4 E4 F4 D4 C4 D4 E4 G4 F4 E4 D4 C4',.48,volume=.23)
lower=melody('C3:2 G3:2 F3:2 G3:2 C3:2 E3:2 F3:2 C3:2',.48,volume=.19,timbre='bright')
mixed=[(upper[i] if i<len(upper) else 0)+(lower[i] if i<len(lower) else 0) for i in range(max(len(upper),len(lower)))]
write('chemins.wav',pause()+mixed+pause(.7))
# Évocations de gouttes, vent et silence : aucun faux enregistrement naturel.
garden=pause()+melody('C5 E5 G5',.18,volume=.2,timbre='bell')+pause(.7)
garden+=melody('G3:5',.36,volume=.14,timbre='round')+pause(.65)
garden+=melody('D5 A5 E5 G5',.2,volume=.18,timbre='bell')+pause(.45)
garden+=melody('C4:4',.4,volume=.12)+pause(.8)+melody('E5 G5 C5:2',.23,volume=.14,timbre='bell')+pause(.8)
write('jardin.wav',garden)
# Thème public, arrangement original : quatre phrases de la mélodie usuelle,
# transposées en do majeur ; la fin de phrase emploie des durées adaptées.
ode='E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4:1.5 D4:.5 D4:2 E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 D4:1.5 C4:.5 C4:2'
write('ode-joie-arrangement.wav',pause()+melody(ode,.43,volume=.25)+pause(.8))
