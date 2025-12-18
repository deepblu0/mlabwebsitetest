import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, CheckCircle, Users, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const filters = [
    { id: 'ALL', label: 'TÜM PROJELER', color: 'bg-mlab-navy', hover: 'hover:bg-mlab-navy/90' },
    { id: 'ENERGY', label: 'ENERJİ', color: 'bg-mlab-energy', hover: 'hover:bg-mlab-energy/90', categories: ['ENERGY'] },
    { id: 'INFRASTRUCTURE', label: 'KENTSEL ALTYAPI', color: 'bg-mlab-infrastructure', hover: 'hover:bg-mlab-infrastructure/90', categories: ['BUILDINGS', 'INFRASTRUCTURE', 'FINANCING'] },
    { id: 'WASTE', label: 'ATIK', color: 'bg-mlab-waste', hover: 'hover:bg-mlab-waste/90', categories: ['WASTE', 'CONSUMPTION', 'CIRCULAR'] },
    { id: 'TRANSPORT', label: 'ULAŞIM', color: 'bg-mlab-transport', hover: 'hover:bg-mlab-transport/90', categories: ['MOBILITY', 'TRANSPORT'] },
    { id: 'NATURE', label: 'DOĞA', color: 'bg-mlab-nature', hover: 'hover:bg-mlab-nature/90', categories: ['NATURE', 'ADAPTATION'] }
];

const ProjectCards = () => {
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const getProjectColor = (category) => {
        const filter = filters.find(f => f.categories && f.categories.includes(category));
        return filter ? filter.color.replace('bg-', 'border-') : 'border-mlab-cyan';
    };

    const filteredProjects = activeFilter.id === 'ALL'
        ? projects
        : projects.filter(p => activeFilter.categories.includes(p.category));

    // Reset slider when filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeFilter]);

    // Auto-slide logic
    useEffect(() => {
        if (isHovered || filteredProjects.length <= 3) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % (filteredProjects.length - 2));
        }, 4000); // 4 seconds per slide

        return () => clearInterval(interval);
    }, [isHovered, filteredProjects.length, activeFilter]);

    const nextSlide = () => {
        if (filteredProjects.length > 3) {
            setCurrentIndex((prev) => (prev + 1) % (filteredProjects.length - 2));
        }
    };

    const prevSlide = () => {
        if (filteredProjects.length > 3) {
            setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 3 : prev - 1));
        }
    };

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-mlab-navy mb-6">Projeler & Çözümler</h2>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="w-full text-sm font-bold text-mlab-navy mb-2 block">Temaya göre filtrele</span>
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 ${activeFilter.id === filter.id
                                    ? `${filter.color} text-white shadow-md transform -translate-y-0.5`
                                    : `bg-slate-200 text-slate-600 ${filter.hover} hover:text-white`
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Slider Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredProjects.slice(currentIndex, currentIndex + 3).map((project) => (
                            <Link
                                to={`/project/${project.id}`}
                                key={project.id}
                                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer border border-slate-100 hover:border-mlab-cyan/30`}
                            >
                                <div className="h-48 w-full relative overflow-hidden bg-slate-200">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5"></div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-extrabold text-mlab-navy mb-6 uppercase leading-tight group-hover:text-mlab-purple transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="space-y-4 mt-auto">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                                    <Clock className="w-3 h-3 mr-1" /> START DATE
                                                </div>
                                                <div className="text-slate-500 text-sm">{project.startDate}</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                                    <CheckCircle className="w-3 h-3 mr-1" /> STATUS
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-grow bg-slate-200 rounded-full h-1.5 w-16">
                                                        <div
                                                            className="bg-mlab-cyan h-1.5 rounded-full"
                                                            style={{ width: `${project.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="border-slate-100" />

                                        <div>
                                            <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                                <Users className="w-3 h-3 mr-1" /> PARTNERS
                                            </div>
                                            <div className="text-slate-500 text-sm truncate">{project.partners}</div>
                                        </div>

                                        <div>
                                            <div className="flex items-center text-mlab-navy font-bold text-xs mb-1">
                                                <Tag className="w-3 h-3 mr-1" /> THEMES
                                            </div>
                                            <div className="text-slate-500 text-sm truncate">{project.themes}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    {filteredProjects.length > 3 && (
                        <div className="flex justify-center mt-8 gap-4">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-mlab-navy transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-mlab-navy transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>


            </div>
        </section>
    );
};

export default ProjectCards;
