
console.log("--- CHECKS START ---");

if (typeof mlabData === 'undefined') {
    console.error("CRITICAL: mlabData is undefined!");
} else {
    console.log(`mlabData loaded. Projects: ${mlabData.projects ? mlabData.projects.length : 'N/A'}`);
}

if (typeof t === 'undefined') {
    console.error("CRITICAL: t() function is undefined!");
} else {
    console.log("t() function is defined.");
}

// Test key resolution
const keys = [
    'projects.card.duration',
    'projects.card.startDate',
    'projects.card.partners'
];

keys.forEach(key => {
    try {
        const val = t(key);
        console.log(`Key '${key}' -> '${val}'`);
        if (val === key) console.warn("WARNING: Key returned itself (missing translation?)");
    } catch (e) {
        console.error(`Error checking key '${key}':`, e);
    }
});

// Simulate Render Logic
try {
    const projects = mlabData.projects;
    const bigChallenges = mlabData.challenges;
    const currentLang = 'tr';

    projects.forEach(p => {
        // Logic from projeler.html
        const challenge = bigChallenges.find(c => c.id == p.bigChallengeId);
        if (!challenge) console.warn(`Challenge missing for project ${p.id}`);

        const title = p.title[currentLang];

        const duration = p.duration ? p.duration[currentLang] : null;
        const startDate = p.startDate ? (typeof p.startDate === 'object' ? p.startDate[currentLang] : p.startDate) : null;

        // This is the line that replaced content in projeler.html
        const timeLabel = duration ? `${t('projects.card.duration')}: ${duration}` : (startDate ? `${t('projects.card.startDate')}: ${startDate}` : 'Belirtilmemiş');

        if (!title) console.error(`Project ${p.id} has no title`);
    });
    console.log("Render simulation completed without throw.");
} catch (e) {
    console.error("Render simulation CRASHED:", e);
}
console.log("--- CHECKS END ---");
