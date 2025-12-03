import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'İEKKK', role: 'Yönetim' },
        { name: 'İZPA', role: 'Kurucu Ortak' },
        { name: 'İZQ', role: 'Kurucu Ortak' },
    ];

    return (
        <section className="bg-slate-100 py-12 border-y border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-mlab-navy">Güçlü İşbirliği Modeli</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                                <span className="text-xl font-bold text-slate-400 group-hover:text-mlab-purple transition-colors">
                                    {partner.name}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-slate-500">{partner.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
