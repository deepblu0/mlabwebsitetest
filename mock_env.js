
// Mock Browser Environment
global.window = {};
global.document = {
    addEventListener: (event, callback) => {
        if (event === 'DOMContentLoaded') setTimeout(callback, 10);
    },
    getElementById: (id) => ({
        textContent: '',
        innerHTML: '',
        classList: { add: () => { }, remove: () => { }, contains: () => false },
        value: '',
        addEventListener: () => { }
    }),
    querySelectorAll: () => [],
    documentElement: { lang: 'tr' },
    body: { getAttribute: () => '' }
};
global.localStorage = {
    getItem: (k) => 'tr',
    setItem: () => { }
};
try {
    global.navigator = { language: 'tr-TR' };
} catch (e) {
    console.log("Skipping navigator mock");
}
global.location = { search: '', reload: () => { } };

console.log("Mocks initialized.");
