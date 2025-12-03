import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-mlab-cyan/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-mlab-purple/10 blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-mlab-navy tracking-tight mb-6">
                        İzmir'in 2030 <span className="gradient-text">İklim Nötr Hedefi</span> İçin Harekete Geçiyoruz.
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        M-LAB, kentin tüm paydaşlarını bir araya getiren bir inovasyon ve eylem laboratuvarıdır.
                        Sürdürülebilir bir gelecek için birlikte çalışıyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-mlab-cyan to-mlab-purple rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Projeleri İncele
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="#mission"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-mlab-navy bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
                        >
                            Daha Fazla Bilgi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
