import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920"
                    alt="Izmir Cityscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-mlab-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-mlab-navy via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 animate-fade-in-up">
                        <img src="/mlab-logo-white.png" alt="M-LAB Logo" className="h-24 mx-auto mb-8 opacity-90" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
                        İKLİM NÖTR BİR İZMİR İÇİN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-mlab-cyan to-mlab-purple">HAREKETE GEÇ</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                        M-LAB, kentin tüm paydaşlarını bir araya getiren bir inovasyon ve eylem laboratuvarıdır.
                        Sürdürülebilir bir gelecek için birlikte çalışıyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-200">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-white text-mlab-navy font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center">
                                PROJELERİ İNCELE
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
