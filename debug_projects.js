
// Mock Browser Environment
global.window = {};
global.document = {
    addEventListener: () => { },
    getElementById: () => ({
        textContent: '',
        innerHTML: '',
        classList: { add: () => { }, remove: () => { } },
        value: ''
    }),
    querySelectorAll: () => []
};
global.localStorage = {
    getItem: (k) => 'tr',
    setItem: () => { }
};
// navigator for i18n.js
global.navigator = { language: 'tr-TR' };

// Initialize i18n keys if they weren't (depends on i18n.js execution)
// We assume i18n.js ran and defined 'translations', 'defaults', 't', 'getCurrentLang'.

console.log("--- DEBUG START ---");

if (typeof mlabData === 'undefined') {
    console.error("CRITICAL: mlabData is undefined!");
    process.exit(1);
}

if (typeof t === 'undefined') {
    console.error("CRITICAL: t() function is undefined!");
    process.exit(1);
}

console.log("Data & i18n loaded.");
console.log(`Projects count: ${mlabData.projects ? mlabData.projects.length : 'N/A'}`);

// Test critical translation keys used in projeler.html
const requiredKeys = [
    'projects.card.duration',
    'projects.card.startDate',
    'projects.card.partners',
    'projects.hero.title',
    'projects.filter.all'
];

requiredKeys.forEach(key => {
    try {
        const val = t(key);
        console.log(`Key '${key}': '${val}'`);
        if (val === key) console.warn(`WARNING: Translation missing for '${key}'`);
    } catch (e) {
        console.error(`ERROR resolving key '${key}':`, e.message);
    }
});

// Simulate Render Loop
try {
    const projects = mlabData.projects;
    const bigChallenges = mlabData.challenges;
    const currentLang = 'tr'; // Force TR

    if (!projects || projects.length === 0) {
        console.error("Simulated Render: No projects found.");
    } else {
        projects.forEach(p => {
            // Logic from projeler.html
            const challenge = bigChallenges.find(c => c.id == p.bigChallengeId);
            const title = p.title[currentLang];

            // Check dynamic properties
            if (!p.status || !p.status[currentLang]) console.error(`Project ${p.id} status issue`);

            // Mimic the lines that caused trouble
            const duration = p.duration ? p.duration[currentLang] : null;
            const startDate = p.startDate ? (typeof p.startDate === 'object' ? p.startDate[currentLang] : p.startDate) : null;

            // This line specifically:
            const timeLabel = duration ? `${t('projects.card.duration')}: ${duration}` : (startDate ? `${t('projects.card.startDate')}: ${startDate}` : 'Belirtilmemiş');

            // Partners label
            const partnerLabel = t('projects.card.partners');

            // console.log(`Project ${p.id} rendered OK.`);
        });
        console.log("Simulated Render: Loop finished successfully.");
    }

} catch (e) {
    console.error("Simulated Render CRASHED:", e);
}

console.log("--- DEBUG END ---");
