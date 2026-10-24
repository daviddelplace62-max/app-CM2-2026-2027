'use strict';
(() => {
  const KEY = 'atelier-cm2-v1';
  const content = window.CM2_CONTENT || [];
  const $ = selector => document.querySelector(selector);
  const main = $('#main');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const allSteps = () => content.flatMap(subject => (subject.chapters || []).flatMap(chapter => (chapter.steps || []).map(step => ({ ...step, subjectId: subject.id, chapterId: chapter.id, chapterTitle: chapter.title }))));
  let state = { version: 1, profiles: [], active: null };
  let view = { page: 'dashboard' };
  let returnFocus = null;
  let voiceListeners = [];

  function valid(data) {
    const plain = value => !!value && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
    const safe = key => typeof key === 'string' && key.length > 0 && key.length <= 200 && !['__proto__', 'constructor', 'prototype'].includes(key);
    const keys = (object, allowed) => plain(object) && Object.keys(object).every(key => safe(key) && allowed.includes(key));
    const dict = (object, check) => plain(object) && Object.keys(object).length <= 20000 && Object.entries(object).every(([key, value]) => safe(key) && check(value));
    const iso = value => typeof value === 'string' && value.length <= 40 && /^\d{4}-\d\d-\d\dT/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString() === value;
    const activity = value => keys(value, ['realized', 'observed', 'criteria', 'text', 'observedAt']) && typeof value.realized === 'boolean' && typeof value.observed === 'boolean' && Array.isArray(value.criteria) && value.criteria.length <= 100 && value.criteria.every(c => typeof c === 'boolean') && (value.text === undefined || typeof value.text === 'string' && value.text.length <= 20000) && (value.observedAt === undefined || value.observedAt === null || iso(value.observedAt));
    if (!keys(data, ['version', 'profiles', 'active']) || data.version !== 1 || !Array.isArray(data.profiles) || data.profiles.length > 100) return false;
    const ids = new Set();
    const okay = data.profiles.every(profile => {
      if (!keys(profile, ['id', 'nickname', 'theme', 'completed', 'positions', 'history', 'errors', 'reduceMotion', 'awards']) || !safe(profile.id) || ids.has(profile.id) || typeof profile.nickname !== 'string' || !profile.nickname.trim() || profile.nickname !== profile.nickname.trim() || profile.nickname.length > 40 || !['squishy', 'workshop'].includes(profile.theme) || typeof profile.reduceMotion !== 'boolean') return false;
      ids.add(profile.id);
      if (!dict(profile.completed, value => keys(value, ['exercises', 'validated', 'observed', 'realized', 'activities']) && Array.isArray(value.exercises) && value.exercises.length <= 2000 && value.exercises.every(safe) && new Set(value.exercises).size === value.exercises.length && typeof value.validated === 'boolean' && typeof value.observed === 'boolean' && (value.realized === undefined || typeof value.realized === 'boolean') && (value.activities === undefined || dict(value.activities, activity)))) return false;
      if (!dict(profile.positions, safe) || !dict(profile.errors, value => typeof value === 'boolean') || !Array.isArray(profile.history) || profile.history.length > 200000 || profile.awards !== undefined && !dict(profile.awards, value => value === true)) return false;
      return profile.history.every(item => keys(item, ['exercise', 'correct', 'time']) && safe(item.exercise) && typeof item.correct === 'boolean' && iso(item.time));
    });
    return okay && (data.active === null || typeof data.active === 'string' && ids.has(data.active));
  }

  function storageWarning(message) {
    const banner = $('#storage-warning');
    if (message) banner.textContent = message;
    banner.hidden = false;
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (!valid(parsed)) throw Error('invalid-storage');
      state = parsed;
    }
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (error) {
    storageWarning(error.message === 'invalid-storage' ? 'La sauvegarde locale est illisible. Elle n’a pas été effacée. Exportez vos données si possible et restaurez une sauvegarde JSON valide.' : undefined);
  }
  const profile = () => state.profiles.find(item => item.id === state.active);
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch { storageWarning(); }
  }
  function migrate(profile) {
    if (!profile.awards) {
      profile.awards = {};
      Object.entries(profile.completed).forEach(([id, record]) => { if (record.validated) profile.awards[id] = true; });
    }
  }
  state.profiles.forEach(migrate);
  function complete(profile, id) { return !!profile.completed[id]?.validated; }
  function stats(profile, subjectId) {
    const steps = allSteps().filter(step => step.required !== false && (!subjectId || step.subjectId === subjectId));
    const done = steps.filter(step => complete(profile, step.id)).length;
    return { total: steps.length, done, percent: steps.length ? Math.round(100 * done / steps.length) : 0, points: Object.keys(profile.awards || {}).filter(id => allSteps().some(step => step.id === id)).length * 10 };
  }
  function record(profile, id) {
    const result = profile.completed[id] || (profile.completed[id] = { exercises: [], validated: false, observed: false, realized: false, activities: {} });
    if (!result.activities) result.activities = {};
    return result;
  }
  function activityRecord(record, exercise) {
    if (!record.activities[exercise.id]) {
      const legacyObserved = record.observed && record.exercises.includes(exercise.id);
      record.activities[exercise.id] = { realized: !!legacyObserved, observed: !!legacyObserved, criteria: (exercise.criteria || []).map(() => !!legacyObserved), text: '', observedAt: null };
    }
    return record.activities[exercise.id];
  }

  function num(value) {
    const str = String(value).trim().replace(/[\u00a0\u202f]/g, ' ').replace(/^([+-]?\d{1,3}(?: \d{3})+)(?=[,. \/a-zA-Z²³%€°]|$)/, group => group.replace(/ /g, '')).replace(',', '.');
    if (!str) return null;
    const match = str.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(?:\s*\/\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+)))?\s*([a-zA-Zéè²³%€°]*)$/);
    if (!match) return null;
    const number = Number(match[1]) / (match[2] === undefined ? 1 : Number(match[2]));
    return Number.isFinite(number) ? { n: number, unit: match[3] } : null;
  }
  function sameText(left, right, exercise) {
    let a = String(left).trim().normalize('NFC'), b = String(right).trim().normalize('NFC');
    if (exercise.caseSensitive === false) { a = a.toLocaleLowerCase('fr'); b = b.toLocaleLowerCase('fr'); }
    if (exercise.ignoreExtraSpaces === true) { a = a.replace(/\s+/g, ' '); b = b.replace(/\s+/g, ' '); }
    return a === b;
  }
  function checkAnswer(exercise, value) {
    if (exercise.type === 'order' || exercise.type === 'match') {
      if (!Array.isArray(value) || !value.length || value.some(item => typeof item !== 'string' || !item.trim())) return { valid: false, correct: false };
      const expected = Array.isArray(exercise.answer) ? exercise.answer : [];
      return { valid: true, correct: expected.length === value.length && expected.every((item, i) => sameText(value[i], item, exercise)) };
    }
    if (!String(value ?? '').trim()) return { valid: false, correct: false };
    if (exercise.type === 'number') {
      const response = num(value), expected = num(exercise.answer);
      if (!response || !expected) return { valid: false, correct: false };
      const allowedUnit = exercise.unit || expected.unit;
      if (response.unit && response.unit !== allowedUnit || allowedUnit && !response.unit && (exercise.unitRequired === true || exercise.requireUnit === true)) return { valid: false, correct: false };
      return { valid: true, correct: Math.abs(response.n - expected.n) <= (exercise.tolerance ?? 1e-9) };
    }
    const expected = Array.isArray(exercise.answer) ? exercise.answer : [exercise.answer];
    return { valid: true, correct: expected.some(item => sameText(value, item, exercise)) };
  }

  function notice() {
    if (window.CM2_META?.verified) return `<p class="program-note">📚 Année ${esc(window.CM2_META.year || '2026-2027')} · <a href="SOURCES.md" target="_blank" rel="noopener">Textes de référence</a> · <a href="COUVERTURE_PROGRAMME.md" target="_blank" rel="noopener">Couverture et choix pédagogiques</a></p>`;
    return '<div class="notice" role="status"><strong>Vérification pédagogique en cours.</strong> Les sources et contenus sont en cours de contrôle. Cette version de travail n’est pas encore annoncée comme le programme complet.</div>';
  }
  function nav() {
    const child = profile();
    $('#nav').innerHTML = `<button data-page="dashboard" ${view.page === 'dashboard' ? 'aria-current="page"' : ''}>⌂ Tableau de bord</button><button data-page="review" ${view.page === 'review' ? 'aria-current="page"' : ''}>↻ Mes révisions</button>` + content.map(subject => {
      const progress = child ? stats(child, subject.id) : { done: 0, total: allSteps().filter(step => step.subjectId === subject.id && step.required !== false).length };
      return `<button data-testid="subject-${esc(subject.id)}" data-subject="${esc(subject.id)}" ${view.subject === subject.id ? 'aria-current="page"' : ''} class="${view.subject === subject.id ? 'active' : ''}"><span aria-hidden="true">${esc(subject.icon || '◆')}</span><span class="nav-title">${esc(subject.title)}</span><small aria-label="${progress.done} étapes sur ${progress.total}">${progress.done}/${progress.total}</small></button>`;
    }).join('');
    $('#nav').querySelectorAll('[data-page]').forEach(button => button.onclick = () => go({ page: button.dataset.page }));
    $('#nav').querySelectorAll('[data-subject]').forEach(button => button.onclick = () => go({ page: 'subject', subject: button.dataset.subject }));
  }
  function go(nextView) {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    view = nextView;
    closeMenu();
    render();
    main.focus();
    window.scrollTo(0, 0);
  }
  function render() {
    if ('speechSynthesis' in window) voiceListeners.forEach(listener => speechSynthesis.removeEventListener('voiceschanged', listener));
    voiceListeners = [];
    const child = profile();
    document.body.dataset.theme = child?.theme || 'squishy';
    document.body.classList.toggle('reduce-motion', !!child?.reduceMotion);
    nav();
    if (!child || view.page === 'profiles') return profiles();
    if (view.page === 'settings') return settings();
    if (view.page === 'subject') return subject();
    if (view.page === 'step') return step();
    if (view.page === 'review') return review();
    dashboard();
  }
  function mascot() {
    return `<div class="mascot" aria-hidden="true"><svg class="cloud-mascot" viewBox="0 0 230 150"><path d="M30 78 C30 49 61 43 77 56 C84 16 144 17 156 54 C189 42 215 67 204 94 C227 120 192 136 165 125 H66 C31 139 8 110 30 78Z" fill="#fff" stroke="#c7addf" stroke-width="4"/><path d="M37 54 Q110 -12 184 52" fill="none" stroke="#efa3c6" stroke-width="10"/><path d="M48 48 Q111 0 173 47" fill="none" stroke="#eecb7b" stroke-width="7"/><circle cx="91" cy="87" r="5" fill="#7542a4"/><circle cx="145" cy="87" r="5" fill="#7542a4"/><path d="M106 101 Q118 113 130 101" fill="none" stroke="#7542a4" stroke-width="4" stroke-linecap="round"/><path d="M16 24 l4 10 11 1 -9 7 3 11 -9 -6 -9 6 3 -11 -9 -7 11 -1Z" fill="#e8bf58"/></svg><svg class="robot-mascot" viewBox="0 0 230 150"><rect x="55" y="34" width="127" height="90" rx="16" fill="#e2f4f6" stroke="#16718a" stroke-width="5"/><path d="M118 32 V17" stroke="#16718a" stroke-width="5"/><circle cx="118" cy="13" r="8" fill="#ed9a32"/><rect x="70" y="49" width="96" height="45" rx="10" fill="#16718a"/><circle cx="93" cy="71" r="10" fill="#fcda71"/><circle cx="143" cy="71" r="10" fill="#fcda71"/><path d="M96 106 H140" stroke="#16718a" stroke-width="5" stroke-linecap="round"/><path d="M53 71 H37 V103 M184 71 H199 V103" stroke="#16718a" stroke-width="8" fill="none"/><rect x="55" y="128" width="45" height="14" rx="4" fill="#ed9a32"/><rect x="137" y="128" width="45" height="14" rx="4" fill="#ed9a32"/><circle cx="210" cy="29" r="12" fill="#fcda71" stroke="#16718a" stroke-width="4"/></svg></div>`;
  }
  function profiles() {
    main.innerHTML = notice() + `<section class="welcome"><div><p class="eyebrow">BIENVENUE DANS TON ATELIER</p><h1>À chacun son aventure.</h1><p>Un petit pas chaque jour pour comprendre, essayer et progresser.</p></div>${mascot()}</section><div class="grid">${state.profiles.map(child => `<article class="card"><div class="icon" aria-hidden="true">${child.theme === 'squishy' ? '☁' : '⚙'}</div><h2>${esc(child.nickname)}</h2><p>${stats(child).done} étapes validées</p><button data-testid="profile-choice" data-profile="${esc(child.id)}" class="primary">Choisir ${esc(child.nickname)}</button></article>`).join('')}</div><section class="card"><h2>Créer un profil</h2><form id="create" class="profile-form"><label>Prénom ou surnom<input data-testid="nickname" name="nickname" type="text" maxlength="40" required autocomplete="off"></label><label>Univers de départ<select name="gender" data-testid="gender"><option value="Fille">Fille · nuages et arc-en-ciel</option><option value="Garçon">Garçon · atelier d’invention</option></select></label><p class="muted">Tu pourras choisir l’autre univers à tout moment. Aucun e-mail ni date de naissance nécessaire.</p><button data-testid="create-profile" class="primary">Créer mon profil</button></form><button data-testid="import" id="import">Importer une sauvegarde JSON</button><p id="import-result" role="status"></p></section>`;
    main.querySelectorAll('[data-profile]').forEach(button => button.onclick = () => { state.active = button.dataset.profile; save(); go({ page: 'dashboard' }); });
    $('#create').onsubmit = event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget), nickname = String(form.get('nickname')).trim();
      if (!nickname || nickname.length > 40) return;
      const child = { id: 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8), nickname, theme: form.get('gender') === 'Fille' ? 'squishy' : 'workshop', completed: {}, positions: {}, history: [], errors: {}, reduceMotion: false, awards: {} };
      state.profiles.push(child); state.active = child.id; save(); go({ page: 'dashboard' });
    };
    $('#import').onclick = () => $('#import-file').click();
  }
  function badgeHTML(done) {
    return [{ at: 1, label: 'Premier pas' }, { at: 10, label: 'Explorateur' }, { at: 50, label: 'Chercheur persévérant' }, { at: 100, label: 'Grand voyageur' }].map(badge => `<span class="pill ${done >= badge.at ? 'earned' : ''}">${done >= badge.at ? '★' : '☆'} ${esc(badge.label)} · ${badge.at} étape${badge.at > 1 ? 's' : ''}</span>`).join(' ');
  }
  function dashboard() {
    const child = profile(), progress = stats(child);
    const steps = allSteps(), currentExercises = new Set(steps.flatMap(item => item.exercises.map(exercise => exercise.id)));
    const currentHistory = child.history.filter(item => currentExercises.has(item.exercise));
    const attempts = currentHistory.length, correct = currentHistory.filter(item => item.correct).length;
    const archivedAttempts = child.history.length - currentHistory.length;
    const auto = steps.reduce((sum, item) => sum + item.exercises.filter(exercise => exercise.type !== 'guided' && child.completed[item.id]?.exercises.includes(exercise.id)).length, 0);
    let realized = 0, observed = 0;
    steps.forEach(item => { const rec = child.completed[item.id]; if (!rec) return; item.exercises.filter(exercise => exercise.type === 'guided').forEach(exercise => { const activity = activityRecord(record(child, item.id), exercise); if (activity.realized) realized++; if (activity.observed) observed++; }); });
    const errors = steps.filter(item => item.exercises.some(exercise => child.errors[exercise.id]));
    main.innerHTML = notice() + `<section class="hero"><div><p class="eyebrow">COMPRENDRE · S’ENTRAÎNER · GRANDIR</p><h1>Bonjour ${esc(child.nickname)} !</h1><p>Quel sera ton prochain petit pas ? Toutes les matières te sont ouvertes.</p><button id="settings">Mon profil et mon univers</button></div>${mascot()}</section><div class="stats"><div class="stat"><strong>${progress.percent} %</strong>${progress.done} / ${progress.total} étapes obligatoires</div><div class="stat"><strong>${progress.points}</strong>points · attribués une seule fois</div><div class="stat"><strong>${attempts ? Math.round(correct * 100 / attempts) : 0} %</strong>réussite · ${correct}/${attempts} réponses</div></div><details class="calculation"><summary>Comment sont calculés mes résultats ?</summary><p>Avancement = nombre d’étapes obligatoires validées / toutes les étapes obligatoires du programme, même verrouillées. Chaque étape vaut 10 points, une seule fois. Le taux de réussite compte toutes les réponses automatiques interprétables soumises, y compris en révision. Les saisies vides ou illisibles ne comptent pas. Les activités pratiques sont suivies séparément et ne faussent pas ce taux. Les réponses d’une ancienne version sans activité correspondante sont conservées dans la sauvegarde mais exclues de ces statistiques.</p></details><div class="summary-pills"><span class="pill">✓ ${auto} exercices auto-corrigés réussis</span><span class="pill">✎ ${realized} activités déclarées réalisées</span><span class="pill">♧ ${observed} activités observées par un adulte</span></div><div class="badges">${badgeHTML(progress.done)}</div>${errors.length ? `<section class="review-callout"><strong>↻ ${errors.length} notion${errors.length > 1 ? 's' : ''} à retravailler</strong><p>Un indice et un nouvel essai t’attendent. Tu peux y revenir sans perdre de points.</p><button id="review-errors">Reprendre mes erreurs</button></section>` : ''}<div class="grid">${content.map(subject => {
      const item = stats(child, subject.id), current = steps.find(step => step.id === child.positions[subject.id]);
      return `<article class="card subject-card"><span class="icon" aria-hidden="true">${esc(subject.icon || '◆')}</span><h2>${esc(subject.title)}</h2><progress value="${item.done}" max="${item.total || 1}" aria-label="Progression en ${esc(subject.title)}"></progress><p>${item.done} / ${item.total} étapes validées</p><p class="muted">${current ? esc(current.chapterTitle) + '<br>' + esc(current.title) : 'Prêt à explorer'}</p><button data-resume="${esc(subject.id)}" class="primary">${current ? 'Reprendre' : 'Explorer'}</button></article>`;
    }).join('')}</div><h2>Dernières réponses</h2><ul class="activity-log">${currentHistory.slice(-6).reverse().map(item => `<li>${esc(steps.find(step => step.exercises.some(exercise => exercise.id === item.exercise))?.title || item.exercise)} · ${item.correct ? '✓ réponse réussie' : '↻ à reprendre'}</li>`).join('') || '<li>Ton aventure commence ici.</li>'}</ul>${archivedAttempts ? `<p class="muted">${archivedAttempts} ancienne${archivedAttempts > 1 ? 's' : ''} réponse${archivedAttempts > 1 ? 's' : ''} conservée${archivedAttempts > 1 ? 's' : ''} dans la sauvegarde, hors des statistiques de ce programme.</p>` : ''}`;
    $('#settings').onclick = () => go({ page: 'settings' });
    if ($('#review-errors')) $('#review-errors').onclick = () => go({ page: 'review' });
    main.querySelectorAll('[data-resume]').forEach(button => button.onclick = () => {
      const subjectId = button.dataset.resume, current = allSteps().find(item => item.id === child.positions[subjectId]);
      go(current && unlocked(current) ? { page: 'step', subject: subjectId, step: current.id } : { page: 'subject', subject: subjectId });
    });
  }
  function unlocked(item) {
    const child = profile();
    if (!child) return false;
    if (Array.isArray(item.requires)) return item.requires.every(id => complete(child, id));
    const subject = content.find(subject => subject.id === item.subjectId), chapter = subject?.chapters.find(chapter => chapter.id === item.chapterId);
    const index = chapter?.steps.findIndex(step => step.id === item.id) ?? -1;
    return index === 0 || index > 0 && complete(child, chapter.steps[index - 1].id);
  }
  function subject() {
    const child = profile(), subject = content.find(item => item.id === view.subject);
    if (!subject) return go({ page: 'dashboard' });
    const stepButton = (raw, chapter) => {
      const item = { ...raw, subjectId: subject.id, chapterId: chapter.id }, available = unlocked(item), done = complete(child, item.id), started = !!child.completed[item.id];
      return `<li><button data-step="${esc(item.id)}" ${available ? '' : 'disabled'}><span>${esc(item.title)}</span><span class="pill">${done ? '✓ Terminée' : !available ? '🔒 Verrouillée' : started ? 'En cours' : 'Disponible'}</span></button></li>`;
    };
    main.innerHTML = notice() + `<button data-testid="back" id="back">← Tableau de bord</button><p class="eyebrow">MON PARCOURS · ${stats(child, subject.id).done}/${stats(child, subject.id).total} ÉTAPES</p><h1>${esc(subject.icon || '')} ${esc(subject.title)}</h1><p>Choisis un chapitre et une notion. À l’intérieur, les étapes avancent dans l’ordre pour t’aider à construire tes savoirs.</p>${subject.intro ? `<p class="muted">${esc(subject.intro)}</p>` : ''}` + subject.chapters.map(chapter => {
      const mandatory = chapter.steps.filter(item => item.required !== false), count = mandatory.filter(item => complete(child, item.id)).length;
      const available = chapter.steps.some(item => unlocked({ ...item, subjectId: subject.id, chapterId: chapter.id }));
      const started = chapter.steps.some(item => !!child.completed[item.id]);
      const status = count === mandatory.length ? '✓ Terminé' : !available ? '🔒 Verrouillé' : started ? 'En cours' : 'Disponible';
      const groups = [];
      chapter.steps.forEach(item => { const notion = item.notion || 'Les étapes du chapitre'; let group = groups.at(-1); if (!group || group.name !== notion) { group = { name: notion, steps: [] }; groups.push(group); } group.steps.push(item); });
      return `<section class="card chapter-card"><div class="row between"><h2>${esc(chapter.title)}</h2><span class="pill">${status} · ${count}/${mandatory.length}</span></div>${chapter.description ? `<p>${esc(chapter.description)}</p>` : ''}${groups.map(group => `<section class="notion-group"><h3>${esc(group.name)}</h3><ol class="step-list">${group.steps.map(item => stepButton(item, chapter)).join('')}</ol></section>`).join('')}</section>`;
    }).join('');
    $('#back').onclick = () => go({ page: 'dashboard' });
    main.querySelectorAll('[data-step]').forEach(button => button.onclick = () => go({ page: 'step', subject: subject.id, step: button.dataset.step }));
  }

  let chartSequence = 0;
  function chartHTML(visual) {
    const labels = visual.labels || [], values = visual.values || [];
    if (!['line', 'pie', 'bar'].includes(visual.kind) || !labels.length || labels.length !== values.length || !labels.every(label => typeof label === 'string') || !values.every(value => typeof value === 'number' && Number.isFinite(value) && value >= 0)) return '<p class="notice">Les données de ce graphique ne permettent pas de le dessiner.</p>';
    const colors = ['#62469a', '#147a82', '#b85d18', '#b03867', '#477330', '#315eae'];
    const sum = values.reduce((total, value) => total + value, 0), unit = visual.unit || '';
    const format = value => Number(value.toFixed(8)).toLocaleString('fr-FR', { maximumFractionDigits: 8 });
    const id = 'learning-chart-' + chartSequence++;
    const description = labels.map((label, index) => label + ' : ' + format(values[index]) + (unit ? ' ' + unit : '')).join(' ; ');
    let drawing = '', legend = '', height = 290;
    if (visual.kind === 'pie') {
      if (sum <= 0 || visual.total !== undefined && Math.abs(visual.total - sum) > 1e-8) return '<p class="notice">Le total des catégories doit correspondre au total du diagramme.</p>';
      height = 260;
      let angle = -Math.PI / 2;
      const centerX = 210, centerY = 130, radius = 100;
      values.forEach((value, index) => {
        const arc = value / sum * Math.PI * 2, end = angle + arc;
        const point = a => [centerX + radius * Math.cos(a), centerY + radius * Math.sin(a)];
        if (value === sum) drawing += `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${colors[index % colors.length]}" stroke="#fff" stroke-width="3"/>`;
        else if (value > 0) {
          const startPoint = point(angle), endPoint = point(end);
          drawing += `<path d="M ${centerX} ${centerY} L ${startPoint[0]} ${startPoint[1]} A ${radius} ${radius} 0 ${arc > Math.PI ? 1 : 0} 1 ${endPoint[0]} ${endPoint[1]} Z" fill="${colors[index % colors.length]}" stroke="#fff" stroke-width="3"/>`;
        }
        if (value / sum >= .05) {
          const middle = angle + arc / 2, x = centerX + radius * .64 * Math.cos(middle), y = centerY + radius * .64 * Math.sin(middle);
          drawing += `<text x="${x}" y="${y - 2}" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">${index + 1}<tspan x="${x}" dy="20">${format(value / sum * 100)} %</tspan></text>`;
        }
        angle = end;
      });
      legend = `<ol class="chart-legend">${labels.map((label, index) => `<li><span class="chart-swatch" style="background:${colors[index % colors.length]}" aria-hidden="true"></span><strong>${index + 1}. ${esc(label)}</strong> — ${format(values[index])} sur ${format(sum)} (${format(values[index] / sum * 100)} %)</li>`).join('')}</ol><p class="muted">Le disque entier représente ${format(sum)}${unit ? ' ' + esc(unit) : ''}. Les nombres sur les secteurs correspondent à ceux de la légende.</p>`;
    } else {
      const max = Math.max(...values, 1), rawStep = max / 5, magnitude = Math.pow(10, Math.floor(Math.log10(rawStep))), ratio = rawStep / magnitude;
      const tickStep = (ratio <= 1 ? 1 : ratio <= 2 ? 2 : ratio <= 5 ? 5 : 10) * magnitude;
      const topValue = Math.ceil(max / tickStep) * tickStep;
      const ticks = Array.from({ length: Math.round(topValue / tickStep) + 1 }, (_, index) => Number((index * tickStep).toFixed(10)));
      if (visual.kind === 'line') {
        const left = 54, right = 381, top = 28, bottom = 219;
        const x = index => labels.length === 1 ? (left + right) / 2 : left + index * (right - left) / (labels.length - 1);
        const y = value => bottom - value / topValue * (bottom - top);
        drawing = ticks.map(tick => `<line x1="${left}" y1="${y(tick)}" x2="${right}" y2="${y(tick)}" stroke="#c9ced5" stroke-dasharray="3 4"/><text x="${left - 9}" y="${y(tick) + 5}" text-anchor="end" fill="#263747" font-size="14">${format(tick)}</text>`).join('');
        drawing += `<path d="M ${left} ${top} V ${bottom} H ${right}" fill="none" stroke="#263747" stroke-width="2"/><polyline points="${values.map((value, index) => x(index) + ',' + y(value)).join(' ')}" fill="none" stroke="#62469a" stroke-width="3"/>`;
        drawing += values.map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="5" fill="#62469a"/><text x="${x(index)}" y="${y(value) - 11}" text-anchor="middle" fill="#29233f" font-size="14" font-weight="700">${format(value)}</text><text x="${x(index)}" y="${bottom + 25}" text-anchor="middle" fill="#263747" font-size="14">${esc(labels[index].length > 16 ? labels[index].slice(0, 15) + '…' : labels[index])}</text>`).join('');
        drawing += `<text x="${(left + right) / 2}" y="278" text-anchor="middle" fill="#263747" font-size="14">${esc(visual.xLabel || '')}</text><text x="${left}" y="17" fill="#263747" font-size="13">${esc(visual.yLabel || unit)}</text>`;
      } else {
        height = Math.max(240, labels.length * 46 + 85);
        const left = 128, right = 380, top = 30, bottom = 30 + labels.length * 46;
        const x = value => left + value / topValue * (right - left);
        drawing = ticks.map(tick => `<line x1="${x(tick)}" y1="${top}" x2="${x(tick)}" y2="${bottom}" stroke="#c9ced5" stroke-dasharray="3 4"/><text x="${x(tick)}" y="${bottom + 24}" text-anchor="middle" fill="#263747" font-size="14">${format(tick)}</text>`).join('');
        drawing += `<path d="M ${left} ${top} V ${bottom} H ${right}" fill="none" stroke="#263747" stroke-width="2"/>`;
        drawing += values.map((value, index) => { const y = top + index * 46 + 8; return `<text x="${left - 10}" y="${y + 19}" text-anchor="end" fill="#263747" font-size="13">${esc(labels[index].length > 17 ? labels[index].slice(0, 16) + '…' : labels[index])}</text><rect x="${left}" y="${y}" width="${x(value) - left}" height="27" fill="${colors[index % colors.length]}" stroke="#fff"/><text x="${x(value) - left >= 58 ? x(value) - 7 : x(value) + 6}" y="${y + 19}" text-anchor="${x(value) - left >= 58 ? 'end' : 'start'}" fill="${x(value) - left >= 58 ? '#fff' : '#263747'}" font-size="13" font-weight="700">${format(value)}</text>`; }).join('');
        drawing += `<text x="${(left + right) / 2}" y="${bottom + 51}" text-anchor="middle" fill="#263747" font-size="14">${esc(visual.xLabel || visual.yLabel || unit)}</text>`;
      }
    }
    return `<figure class="learning-visual chart-figure"><figcaption>${esc(visual.caption || 'Observe le graphique.')}</figcaption><svg class="learning-chart" viewBox="0 0 420 ${height}" role="img" aria-labelledby="${id}-title ${id}-description"><title id="${id}-title">${esc(visual.caption || (visual.kind === 'pie' ? 'Diagramme circulaire' : visual.kind === 'line' ? 'Courbe' : 'Diagramme en barres'))}</title><desc id="${id}-description">${esc(description)}</desc>${drawing}</svg>${legend}<details class="chart-data"><summary>Lire les mêmes données dans un tableau</summary><div class="table-wrap" tabindex="0"><table><thead><tr><th scope="col">${esc(visual.kind === 'pie' ? 'Catégorie' : visual.xLabel || 'Repère')}</th><th scope="col">${esc(visual.yLabel || 'Valeur')}${unit ? ' (' + esc(unit) + ')' : ''}</th></tr></thead><tbody>${labels.map((label, index) => `<tr><th scope="row">${esc(label)}</th><td>${format(values[index])}</td></tr>`).join('')}</tbody></table></div></details></figure>`;
  }
  function visualHTML(visual) {
    if (!visual || typeof visual !== 'object') return '';
    if (visual.type === 'chart') return chartHTML(visual);
    if (visual.type === 'table') return `<figure class="learning-visual"><figcaption>${esc(visual.caption || 'Observe le tableau.')}</figcaption><div class="table-wrap" tabindex="0"><table>${visual.headers ? `<thead><tr>${visual.headers.map(header => `<th scope="col">${esc(header)}</th>`).join('')}</tr></thead>` : ''}<tbody>${(visual.rows || []).map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></figure>`;
    if (visual.type === 'timeline') return `<figure class="learning-visual"><figcaption>${esc(visual.caption || 'Repères dans le temps')}</figcaption><ol class="timeline">${(visual.events || []).map(event => `<li><strong>${esc(event.date)}</strong><span>${esc(event.label)}</span></li>`).join('')}</ol><p class="muted">Les repères sont ordonnés ; les distances dessinées ne représentent pas les durées.</p></figure>`;
    if (visual.type === 'map') {
      const points = (visual.points || []).filter(point => Number.isFinite(point.x) && Number.isFinite(point.y) && point.x >= 0 && point.x <= 100 && point.y >= 0 && point.y <= 100);
      return `<figure class="learning-visual"><figcaption>${esc(visual.caption || 'Plan schématique')}</figcaption><div class="map-frame"><svg viewBox="0 0 400 260" role="img" aria-label="${esc(visual.description || visual.caption || 'Plan schématique dont les repères sont décrits ci-dessous.')}" class="learning-map"><rect x="1" y="1" width="398" height="258" rx="12" fill="#eaf5f4" stroke="#5e888b"/>${visual.region === 'france' ? '<path d="M148 42 L221 34 L280 88 L268 164 L213 222 L143 192 L101 117 Z" fill="#f6e6b0" stroke="#7b734b" stroke-width="2"/>' : '<path d="M0 65 H400 M0 130 H400 M0 195 H400 M100 0 V260 M200 0 V260 M300 0 V260" stroke="#bed6d4" stroke-width="1"/>'}<text x="365" y="24" font-size="14" fill="#253f44">N ↑</text>${points.map((point, index) => `<circle cx="${20 + point.x * 3.6}" cy="${20 + point.y * 2.2}" r="11" fill="#634799"/><text x="${20 + point.x * 3.6}" y="${25 + point.y * 2.2}" text-anchor="middle" font-size="13" fill="#fff">${index + 1}</text>`).join('')}</svg></div><p class="muted">Schéma de repérage, sans échelle. ${esc(visual.description || '')}</p><ol>${points.map(point => `<li>${esc(point.label)}</li>`).join('')}</ol></figure>`;
    }
    return '';
  }
  function readingHTML(item) {
    if (!item.reading) return '';
    const glossary = typeof item.glossary === 'string' ? `<p>${esc(item.glossary)}</p>` : item.glossary && typeof item.glossary === 'object' ? `<dl class="glossary">${Object.entries(item.glossary).map(([word, definition]) => `<dt>${esc(word)}</dt><dd>${esc(definition)}</dd>`).join('')}</dl>` : '';
    return `<section class="reading" aria-label="Texte de lecture"><h2>${esc(item.readingTitle || 'Je lis le texte')}</h2><div class="reading-copy">${esc(item.reading)}</div>${item.readingSource ? `<p class="reading-source">${esc(item.readingSource)}</p>` : ''}${glossary ? `<details><summary>Les mots qui peuvent m’aider</summary>${glossary}</details>` : ''}</section>`;
  }
  function soundHTML(item) {
    let html = '';
    if (item.speak) html += `<div class="speech"><button type="button" data-speak="${esc(item.speak)}">🔊 Écouter en anglais</button><p class="speech-status muted" role="status">La voix anglaise dépend de ce navigateur. Aucune prononciation n’est évaluée automatiquement.</p></div>`;
    if (item.audio) html += `<figure class="local-audio"><figcaption>${esc(item.audioCaption || 'Écoute musicale')}</figcaption><audio controls preload="auto" src="${esc(window.CM2_AUDIO?.[item.audio] || item.audio)}">Ton navigateur ne permet pas la lecture audio.</audio></figure>`;
    if (Array.isArray(item.lyrics)) html += `<div class="lyrics">${item.lyrics.map(line => `<p>${esc(line)}</p>`).join('')}</div>`;
    return html;
  }
  function bindSounds() {
    main.querySelectorAll('[data-speak]').forEach(button => {
      const status = button.parentElement.querySelector('.speech-status');
      const update = () => {
        if (!('speechSynthesis' in window) || typeof window.SpeechSynthesisUtterance !== 'function') { button.disabled = true; status.textContent = 'La synthèse vocale est indisponible. Lis le texte avec un adulte ; cette activité reste accessible. La prononciation n’est pas évaluée automatiquement.'; return; }
        const voices = speechSynthesis.getVoices().filter(voice => voice.localService === true && /^en(?:-|_|$)/i.test(voice.lang));
        button.disabled = !voices.length;
        status.textContent = voices.length ? 'Voix anglaise locale disponible, sans service distant. Tu peux écouter et répéter avec un adulte ; la prononciation n’est pas notée automatiquement.' : 'Aucune voix anglaise locale disponible pour le moment. Le texte reste lisible ; tu peux le travailler avec un adulte. La prononciation n’est pas évaluée automatiquement.';
      };
      update();
      button.onclick = () => {
        const voices = speechSynthesis.getVoices().filter(voice => voice.localService === true && /^en(?:-|_|$)/i.test(voice.lang));
        if (!voices.length) return update();
        speechSynthesis.cancel();
        const phrase = new SpeechSynthesisUtterance(button.dataset.speak);
        phrase.voice = voices.find(voice => voice.localService) || voices[0]; phrase.lang = phrase.voice.lang; phrase.rate = 0.85;
        phrase.onerror = () => { status.textContent = 'La lecture audio a échoué. Le texte reste disponible. La prononciation n’est pas évaluée automatiquement.'; };
        speechSynthesis.speak(phrase);
      };
      if ('speechSynthesis' in window) { speechSynthesis.addEventListener('voiceschanged', update); voiceListeners.push(update); }
    });
    main.querySelectorAll('audio').forEach(audio => audio.onerror = () => { const message = document.createElement('p'); message.className = 'notice'; message.textContent = 'Cet audio ne peut pas être lu. Les consignes et la grille restent disponibles ; demande une autre écoute à un adulte.'; audio.after(message); });
  }
  function step() {
    const child = profile(), item = allSteps().find(item => item.id === view.step);
    if (!item || !unlocked(item)) return go({ page: 'subject', subject: view.subject });
    child.positions[item.subjectId] = item.id;
    const rec = record(child, item.id);
    item.exercises.filter(exercise => exercise.type === 'guided').forEach(exercise => activityRecord(rec, exercise));
    save();
    main.innerHTML = notice() + `<button id="back" data-testid="back">← Retour au chapitre</button><p class="eyebrow">${esc(content.find(subject => subject.id === item.subjectId).title)} · ${esc(item.chapterTitle)}</p>${item.notion ? `<p class="notion-label">Notion : ${esc(item.notion)}</p>` : ''}<h1>${esc(item.title)}</h1><section class="lesson"><h2>🎯 Mon objectif</h2><p>${esc(item.objective)}</p>${item.prerequisite ? `<details><summary>Un petit rappel pour commencer</summary><p>${esc(item.prerequisite)}</p></details>` : ''}<h2>Je découvre</h2><p class="lesson-copy">${esc(item.lesson)}</p><h3>Un exemple expliqué</h3><p class="lesson-copy">${esc(item.example)}</p>${visualHTML(item.visual)}${soundHTML(item)}${readingHTML(item)}</section>` + item.exercises.map(exercise => exerciseHTML(exercise, rec)).join('') + `<div id="step-status" class="feedback" aria-live="polite">${rec.validated ? '✓ Étape validée. Tu peux la réviser sans gagner de points supplémentaires.' : 'Réussis les exercices et fais observer les activités accompagnées pour avancer.'}</div><div class="row"><button id="next" data-testid="next-step" class="primary" ${rec.validated ? '' : 'disabled'}>Étape suivante →</button><button id="subject-back">Voir le chapitre</button></div>`;
    $('#back').onclick = $('#subject-back').onclick = () => go({ page: 'subject', subject: item.subjectId });
    $('#next').onclick = () => {
      const subject = content.find(subject => subject.id === item.subjectId), chapter = subject.chapters.find(chapter => chapter.id === item.chapterId), index = chapter.steps.findIndex(step => step.id === item.id), next = chapter.steps[index + 1];
      go(next ? { page: 'step', subject: item.subjectId, step: next.id } : { page: 'subject', subject: item.subjectId });
    };
    item.exercises.forEach(exercise => bindExercise(exercise, rec, item));
    bindSounds();
  }
  function shuffled(options, id) {
    const result = [...(options || [])];
    let seed = 2166136261;
    for (const char of String(id)) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619) >>> 0;
    if (!seed) seed = 123456789;
    for (let i = result.length - 1; i > 0; i--) {
      seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
      const index = (seed >>> 0) % (i + 1);
      [result[i], result[index]] = [result[index], result[i]];
    }
    return result;
  }
  function matchOptions(exercise) {
    if (Array.isArray(exercise.pairs)) return { left: exercise.pairs.map(pair => Array.isArray(pair) ? pair[0] : pair.left), right: exercise.pairs.map(pair => Array.isArray(pair) ? pair[1] : pair.right) };
    return { left: exercise.options || [], right: exercise.choices || [...new Set(exercise.answer || [])] };
  }
  function orderInitial(exercise) {
    const options = [...(exercise.options || exercise.answer || [])];
    if (options.length > 1 && Array.isArray(exercise.answer) && options.every((option, index) => option === exercise.answer[index])) [options[0], options[1]] = [options[1], options[0]];
    return options;
  }
  function exerciseHTML(exercise, rec) {
    const done = rec.exercises.includes(exercise.id);
    let body;
    if (exercise.type === 'guided') {
      const activity = activityRecord(rec, exercise);
      body = `<p>À réaliser avec un adulte. Cocher « réalisée » garde une trace de ton travail ; seule l’observation accompagnée permet de valider cette activité.</p>${exercise.materials ? `<p><strong>Matériel :</strong> ${esc(exercise.materials)}</p>` : ''}<label>Mes notes ou ma production (facultatif)<textarea data-production maxlength="20000" rows="4" placeholder="Tu peux aussi utiliser ton cahier.">${esc(activity.text || '')}</textarea></label><fieldset><legend>Grille à regarder avec l’adulte</legend>${(exercise.criteria || []).map((criterion, index) => `<label class="criterion"><input type="checkbox" data-criterion="${index}" ${activity.criteria[index] ? 'checked' : ''}> ${esc(criterion)}</label>`).join('')}</fieldset><div class="row"><button type="button" data-realized>J’ai réalisé l’activité</button><button type="button" data-observe>Adulte : confirmer l’observation</button></div><p class="feedback" data-testid="feedback" aria-live="polite">${activity.observed ? '♧ Compétence observée par un adulte (déclaration accompagnée).' : activity.realized ? '✎ Activité réalisée · observation attendue.' : 'Observation accompagnée attendue.'}</p><p class="muted">Le navigateur n’authentifie pas l’adulte et ne mesure pas automatiquement une compétence pratique.</p>`;
    } else {
      let fields;
      if (exercise.type === 'choice') fields = `<fieldset><legend class="sr-only">Choisis une réponse</legend>${shuffled(exercise.options, exercise.id).map(option => `<label class="option"><input data-testid="answer" type="radio" name="answer" value="${esc(option)}">${esc(option)}</label>`).join('')}</fieldset>`;
      else if (exercise.type === 'order') fields = `<p class="muted">Utilise ↑ et ↓ pour déplacer les éléments. Ces boutons fonctionnent au toucher et au clavier.</p><ol class="order-list">${orderInitial(exercise).map(option => `<li data-order-value="${esc(option)}"><span>${esc(option)}</span><span class="order-controls"><button type="button" data-order-up aria-label="Monter : ${esc(option)}">↑</button><button type="button" data-order-down aria-label="Descendre : ${esc(option)}">↓</button></span></li>`).join('')}</ol><p class="order-status sr-only" aria-live="polite"></p>`;
      else if (exercise.type === 'match') {
        const options = matchOptions(exercise);
        fields = `<div class="match-list">${options.left.map((left, index) => `<label>${esc(left)}<select data-testid="answer" name="match-${index}"><option value="">Choisir une association</option>${options.right.map(right => `<option value="${esc(right)}">${esc(right)}</option>`).join('')}</select></label>`).join('')}</div>`;
      } else fields = `<label>Ta réponse<input data-testid="answer" type="text" name="answer" autocomplete="off" ${exercise.type === 'number' ? 'inputmode="decimal"' : ''}></label>`;
      body = `<form novalidate>${fields}<button data-testid="submit-answer" class="primary">Vérifier ma réponse</button></form><p class="feedback" data-testid="feedback" aria-live="polite">${done ? '✓ Exercice déjà réussi. Tu peux le réviser.' : 'Prends ton temps. Tu peux réessayer autant que tu veux.'}</p>`;
    }
    return `<section class="exercise" id="ex-${esc(exercise.id)}" data-exercise="${esc(exercise.id)}" data-type="${esc(exercise.type)}"><h2>${esc(exercise.prompt)}</h2>${visualHTML(exercise.visual)}${soundHTML(exercise)}${body}<details class="hint"><summary>💡 Besoin d’un indice ?</summary><p>${esc(exercise.hint)}</p></details></section>`;
  }
  function refreshStepStatus(rec) {
    $('#next').disabled = !rec.validated;
    $('#step-status').textContent = rec.validated ? '✓ Étape validée. Tu peux avancer ou continuer à réviser.' : 'Continue les exercices et les activités accompagnées pour valider cette étape.';
  }
  function finish(item, rec) {
    if (item.exercises.every(exercise => rec.exercises.includes(exercise.id) && (exercise.type !== 'guided' || rec.activities[exercise.id]?.observed))) {
      rec.validated = true;
      const child = profile();
      if (!child.awards) child.awards = {};
      child.awards[item.id] = true;
    }
  }
  function bindExercise(exercise, rec, item) {
    const child = profile(), node = document.getElementById('ex-' + exercise.id), feedback = node.querySelector('.feedback');
    if (exercise.type === 'guided') {
      const activity = activityRecord(rec, exercise);
      node.querySelector('[data-production]').oninput = event => { activity.text = event.target.value; save(); };
      node.querySelectorAll('[data-criterion]').forEach(checkbox => checkbox.onchange = () => { activity.criteria[Number(checkbox.dataset.criterion)] = checkbox.checked; save(); });
      node.querySelector('[data-realized]').onclick = () => {
        activity.realized = true; rec.realized = true; save();
        feedback.textContent = activity.observed ? '♧ Activité déjà observée par un adulte.' : '✎ Activité déclarée réalisée. L’observation par un adulte reste nécessaire.';
      };
      node.querySelector('[data-observe]').onclick = () => {
        const checks = [...node.querySelectorAll('[data-criterion]')];
        if (!checks.length || !checks.every(checkbox => checkbox.checked)) { feedback.textContent = 'L’adulte vérifie tous les critères avant de confirmer son observation. Tu peux reprendre l’activité.'; return; }
        if (!confirm('Réservé à l’adulte accompagnateur : avez-vous observé les critères de cette activité ? Cette déclaration n’est pas une évaluation automatique.')) return;
        activity.realized = true; activity.observed = true; activity.observedAt = new Date().toISOString();
        rec.realized = true; rec.observed = true;
        if (!rec.exercises.includes(exercise.id)) rec.exercises.push(exercise.id);
        finish(item, rec); save();
        feedback.className = 'feedback success'; feedback.textContent = '♧ Observation accompagnée enregistrée. ' + exercise.explanation;
        refreshStepStatus(rec); nav();
      };
      return;
    }
    if (exercise.type === 'order') {
      node.querySelectorAll('[data-order-up], [data-order-down]').forEach(button => button.onclick = () => {
        const row = button.closest('[data-order-value]'), neighbor = button.hasAttribute('data-order-up') ? row.previousElementSibling : row.nextElementSibling;
        if (!neighbor) { node.querySelector('.order-status').textContent = 'Cet élément est déjà à cette extrémité.'; return; }
        if (button.hasAttribute('data-order-up')) neighbor.before(row); else neighbor.after(row);
        button.focus();
        const index = [...row.parentElement.children].indexOf(row) + 1;
        node.querySelector('.order-status').textContent = row.dataset.orderValue + ', position ' + index + '.';
      });
    }
    node.querySelector('form').onsubmit = event => {
      event.preventDefault();
      let value;
      if (exercise.type === 'order') value = [...node.querySelectorAll('[data-order-value]')].map(row => row.dataset.orderValue);
      else if (exercise.type === 'match') value = [...node.querySelectorAll('select')].map(select => select.value);
      else value = new FormData(event.currentTarget).get('answer');
      const result = checkAnswer(exercise, value);
      if (!result.valid) { feedback.className = 'feedback'; feedback.textContent = 'Complète ta réponse avec une saisie lisible et les unités demandées. Aucun essai compté.'; return; }
      child.history.push({ exercise: exercise.id, correct: result.correct, time: new Date().toISOString() });
      if (result.correct) {
        if (!rec.exercises.includes(exercise.id)) rec.exercises.push(exercise.id);
        delete child.errors[exercise.id];
        feedback.className = 'feedback success'; feedback.textContent = '✓ Bravo ! ' + exercise.explanation;
        finish(item, rec);
      } else {
        child.errors[exercise.id] = true;
        feedback.className = 'feedback error'; feedback.textContent = '↻ Réessaie. Indice : ' + exercise.hint;
      }
      save(); refreshStepStatus(rec); nav();
    };
  }
  function settings() {
    const child = profile();
    main.innerHTML = notice() + `<button id="back" data-testid="back">← Tableau de bord</button><h1>Mon profil</h1><form id="settings-form" class="profile-form card"><label>Mon surnom<input name="nickname" data-testid="nickname" type="text" maxlength="40" value="${esc(child.nickname)}" required></label><label>Mon univers<select name="theme" data-testid="theme"><option value="squishy" ${child.theme === 'squishy' ? 'selected' : ''}>☁ Nuages, rose et arc-en-ciel</option><option value="workshop" ${child.theme === 'workshop' ? 'selected' : ''}>⚙ Briques et atelier mécanique</option></select></label><label><span><input name="reduceMotion" type="checkbox" ${child.reduceMotion ? 'checked' : ''}> Désactiver les animations</span></label><button class="primary">Enregistrer</button></form><h2>Ma sauvegarde</h2><p>Les données restent dans ce navigateur et ne sont pas synchronisées entre appareils. Exporte régulièrement tous les profils et garde le fichier sur ton appareil. Les identifiants des activités permettent de retrouver la progression après les mises à jour.</p><p>L’import remplace tous les profils présents après confirmation. Pense à les exporter d’abord.</p><div class="row"><button id="export" data-testid="export">Exporter les profils JSON</button><button id="import" data-testid="import">Importer une sauvegarde JSON</button><button id="switch">Changer de profil</button><button id="delete" class="danger">Supprimer ce profil</button></div><p id="import-result" role="status"></p>`;
    $('#back').onclick = () => go({ page: 'dashboard' });
    $('#settings-form').onsubmit = event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget), name = String(form.get('nickname')).trim();
      if (!name || name.length > 40) return;
      child.nickname = name; child.theme = form.get('theme'); child.reduceMotion = form.has('reduceMotion'); save(); go({ page: 'dashboard' });
    };
    $('#switch').onclick = () => go({ page: 'profiles' });
    $('#delete').onclick = () => {
      if (confirm('Supprimer définitivement le profil « ' + child.nickname + ' » et sa progression ?')) {
        state.profiles = state.profiles.filter(item => item.id !== child.id); state.active = null; save(); go({ page: 'profiles' });
      }
    };
    $('#export').onclick = () => {
      const anchor = document.createElement('a'), url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }));
      anchor.href = url; anchor.download = 'atelier-cm2-sauvegarde.json'; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
    $('#import').onclick = () => $('#import-file').click();
  }
  function review() {
    const child = profile(), steps = allSteps(), errors = steps.filter(item => item.exercises.some(exercise => child.errors[exercise.id])), done = steps.filter(item => complete(child, item.id));
    const cards = list => list.map(item => `<article class="card"><p class="eyebrow">${esc(content.find(subject => subject.id === item.subjectId)?.title)}</p><h3>${esc(item.title)}</h3><button data-review="${esc(item.id)}">${complete(child, item.id) ? 'Réviser' : 'Retravailler'}</button></article>`).join('');
    main.innerHTML = notice() + `<h1>Mes révisions</h1><p>Revenir sur une notion aide à la garder en mémoire. Les points ne sont pas ajoutés une seconde fois ; tu peux réessayer sans limite.</p><h2>↻ Mes erreurs à retravailler</h2><div class="grid">${cards(errors) || '<p>Aucune erreur à reprendre pour le moment.</p>'}</div><h2>✓ Mes notions déjà validées</h2><div class="grid">${cards(done) || '<p>Les notions réussies apparaîtront ici.</p>'}</div>`;
    main.querySelectorAll('[data-review]').forEach(button => button.onclick = () => { const item = steps.find(item => item.id === button.dataset.review); go({ page: 'step', subject: item.subjectId, step: item.id }); });
  }
  $('#import-file').onchange = async event => {
    const file = event.target.files[0];
    if (!file) return;
    let message;
    try {
      if (file.size > 10e6) throw Error('size');
      const data = JSON.parse(await file.text());
      if (!valid(data)) throw Error('format');
      if (!confirm('Importer cette sauvegarde remplacera tous les profils de ce navigateur. Continuer ?')) { event.target.value = ''; return; }
      state = data; state.profiles.forEach(migrate); save(); go({ page: profile() ? 'dashboard' : 'profiles' });
      message = 'Sauvegarde importée.';
    } catch { message = 'Fichier invalide : les profils existants sont conservés.'; }
    const output = $('#import-result'); if (output) output.textContent = message;
    $('#live').textContent = message; event.target.value = '';
  };
  function openMenu() {
    returnFocus = document.activeElement;
    document.body.classList.add('menu-open'); $('#sidebar').inert = false; $('#backdrop').hidden = false; $('#menu-toggle').setAttribute('aria-expanded', 'true');
    main.inert = true; document.querySelector('header').inert = true;
    $('#menu-close').focus();
  }
  function closeMenu() {
    const opened = document.body.classList.contains('menu-open');
    document.body.classList.remove('menu-open'); $('#backdrop').hidden = true; $('#menu-toggle').setAttribute('aria-expanded', 'false');
    main.inert = false; document.querySelector('header').inert = false;
    $('#sidebar').inert = innerWidth <= 800;
    if (opened && returnFocus?.isConnected) returnFocus.focus();
  }
  $('#menu-toggle').dataset.testid = 'mobile-menu-open'; $('#menu-close').dataset.testid = 'mobile-menu-close';
  $('#menu-toggle').onclick = openMenu; $('#menu-close').onclick = $('#backdrop').onclick = closeMenu;
  document.addEventListener('keydown', event => {
    if (!document.body.classList.contains('menu-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(); }
    if (event.key === 'Tab') {
      const items = [...$('#sidebar').querySelectorAll('button:not([disabled]),a')], first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('resize', () => { if (innerWidth > 800 && document.body.classList.contains('menu-open')) closeMenu(); $('#sidebar').inert = innerWidth <= 800 && !document.body.classList.contains('menu-open'); });
  $('#profile-button').onclick = () => go({ page: 'profiles' });
  $('.brand').onclick = event => { event.preventDefault(); go({ page: 'dashboard' }); };
  window.CM2 = { getState: () => JSON.parse(JSON.stringify(state)), checkAnswer, allSteps, validateImport: valid, stats: subjectId => profile() ? stats(profile(), subjectId) : null, go, isUnlocked: id => { const item = allSteps().find(item => item.id === id); return !!item && unlocked(item); } };
  $('#sidebar').inert = innerWidth <= 800;
  render();
})();
