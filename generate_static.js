
// Generate Static Content Script
const fs = require('fs');

// Mock window and document to load mlab-data.js
global.window = {};
global.document = {};

// Load data
// We need to read the file and eval it because it's not a module
const mlabDataContent = fs.readFileSync('mlab-data.js', 'utf8');
eval(mlabDataContent);

const data = global.mlabData;

function renderProjects(projects, challenges) {
    return projects.map(p => {
        const challenge = challenges.find(c => c.id == p.bigChallengeId);
        const currentLang = 'tr';

        const challengeName = challenge ? (challenge.title[currentLang] || '') : '';
        const challengeColor = challenge ? challenge.color : 'bg-gray-500';
        const title = p.title ? p.title[currentLang] : 'Untitled';
        const descObj = p.description || p.desc;
        let rawDesc = descObj ? descObj[currentLang] : '';
        const description = rawDesc.replace(/<[^>]*>/g, '').substring(0, 120) + '...';
        const image = p.image || 'images/placeholder-project.jpg';
        const status = p.status ? (p.status[currentLang] || p.status['tr']) : 'Bilinmiyor';
        const statusClass = 'bg-blue-100 text-blue-700'; // Simplified

        return `
            <div class="group bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden flex flex-col h-full" data-challenge="${p.bigChallengeId}">
                <div class="relative h-48 overflow-hidden">
                    <img src="${image}" alt="${title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                        <div class="flex items-center gap-1.5">
                            <div class="w-2 h-2 rounded-full ${challengeColor}"></div>
                            <span class="text-xs font-bold text-slate-700 tracking-wide">${challengeName}</span>
                        </div>
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusClass}">
                            ${status}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-mlab-navy transition-colors line-clamp-2">
                        ${title}
                    </h3>
                    <p class="text-slate-500 text-sm mb-6 line-clamp-3">
                        ${description}
                    </p>
                    <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-xs font-semibold text-slate-400 group-hover:text-mlab-blue transition-colors">
                            Detayları İncele
                        </span>
                        <div class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-mlab-navy group-hover:text-white transition-all duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-4 h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                </div>
                <a href="proje-detay.html?id=${p.id}" class="absolute inset-0 z-10" aria-label="${title}"></a>
            </div>
        `;
    }).join('\n');
}

function renderDocuments(documents) {
    return documents.map(doc => {
        const lang = 'tr';
        const title = doc.title[lang] || doc.title['tr'];
        const description = doc.description[lang] || doc.description['tr'];

        return `
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 overflow-hidden group flex">
                <div class="w-32 sm:w-40 flex-shrink-0 bg-slate-100 relative overflow-hidden">
                    <img src="${doc.thumbnail}" alt="${title}" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                         onerror="this.src='https://placehold.co/200x280/e2e8f0/64748b?text=PDF'">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div class="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-slate-600">
                        PDF
                    </div>
                </div>
                <div class="flex-1 p-5 sm:p-6 flex flex-col">
                    <div class="flex items-start justify-between gap-4 mb-2">
                        <h3 class="text-lg font-bold text-slate-800 leading-tight group-hover:text-mlab-navy transition-colors">
                            ${title}
                        </h3>
                        <span class="flex-shrink-0 text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                            ${doc.size}
                        </span>
                    </div>
                    <p class="text-slate-500 text-sm mb-4 line-clamp-2">
                        ${description}
                    </p>
                    <div class="mt-auto flex items-center gap-3">
                        <a href="${doc.url}" target="_blank" 
                           class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-mlab-navy text-white text-sm font-semibold rounded-xl hover:bg-mlab-blue hover:shadow-md hover:shadow-mlab-blue/20 transition-all group/btn">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            İndir
                        </a>
                        <a href="${doc.url}" target="_blank"
                           class="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-500 hover:text-mlab-navy hover:bg-slate-50 transition-all"
                           title="Aç">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('\n');
}

console.log('---PROJECTS---');
console.log(renderProjects(data.projects, data.challenges));
console.log('---DOCUMENTS---');
console.log(renderDocuments(data.documents));
