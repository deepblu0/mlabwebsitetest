import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Users, Tag, BarChart } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    const categoryConfig = {
        ENERGY: { label: 'ENERJİ', color: 'bg-mlab-energy' },
        TRANSPORT: { label: 'ULAŞIM', color: 'bg-mlab-transport' },
        MOBILITY: { label: 'ULAŞIM', color: 'bg-mlab-transport' },
        INFRASTRUCTURE: { label: 'KENTSEL ALTYAPI', color: 'bg-mlab-infrastructure' },
        BUILDINGS: { label: 'KENTSEL ALTYAPI', color: 'bg-mlab-infrastructure' },
        FINANCING: { label: 'KENTSEL ALTYAPI', color: 'bg-mlab-infrastructure' },
        WASTE: { label: 'ATIK', color: 'bg-mlab-waste' },
        CONSUMPTION: { label: 'ATIK', color: 'bg-mlab-waste' },
        CIRCULAR: { label: 'ATIK', color: 'bg-mlab-waste' },
        NATURE: { label: 'DOĞA', color: 'bg-mlab-nature' },
        ADAPTATION: { label: 'DOĞA', color: 'bg-mlab-nature' }
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-mlab-navy mb-4">Proje Bulunamadı</h2>
                    <Link to="/" className="text-mlab-purple hover:underline">Ana Sayfaya Dön</Link>
                </div>
            </div>
        );
    }

    const config = categoryConfig[project.category] || { label: project.category, color: 'bg-mlab-cyan' };

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-mlab-navy/30 z-10"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-mlab-navy/90 to-transparent">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <span className={`inline-block px-3 py-1 ${config.color} text-white text-xs font-bold rounded-full mb-4`}>
                            {config.label}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 max-w-4xl">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/" className="inline-flex items-center text-slate-500 hover:text-mlab-purple mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Projelere Dön
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-mlab-navy mb-4">Proje Hakkında</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {project.stats && project.stats.map((stat, index) => (
                                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                    <div className="text-3xl font-extrabold text-mlab-cyan mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold text-mlab-navy uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-mlab-navy mb-6 text-lg border-b border-slate-200 pb-2">Proje Detayları</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                        <Clock className="w-4 h-4 mr-2 text-mlab-purple" /> BAŞLANGIÇ TARİHİ
                                    </div>
                                    <div className="text-slate-600 pl-6">{project.startDate}</div>
                                </div>

                                <div>
                                    <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                        <CheckCircle className="w-4 h-4 mr-2 text-mlab-cyan" /> DURUM
                                    </div>
                                    <div className="text-slate-600 pl-6">{project.status}</div>
                                </div>

                                <div>
                                    <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                        <BarChart className="w-4 h-4 mr-2 text-blue-500" /> İLERLEME
                                    </div>
                                    <div className="pl-6 pt-1">
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-mlab-cyan h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1 text-right">%{project.progress} Tamamlandı</div>
                                    </div>
                                </div>

                                <hr className="border-slate-200 my-4" />

                                <div>
                                    <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                        <Users className="w-4 h-4 mr-2 text-indigo-500" /> PAYDAŞLAR
                                    </div>
                                    <div className="text-slate-600 pl-6 text-sm">{project.partners}</div>
                                </div>

                                <div>
                                    <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                        <Tag className="w-4 h-4 mr-2 text-pink-500" /> TEMALAR
                                    </div>
                                    <div className="text-slate-600 pl-6 text-sm">{project.themes}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
