import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const ProjectMap = () => {
    const [activePinId, setActivePinId] = useState(null);

    const pins = [
        { id: 1, x: '45%', y: '40%', title: 'Liman Bölgesi Elektrifikasyonu', desc: 'Liman operasyonlarından kaynaklanan emisyonları azaltmak ve hava kalitesini iyileştirmek için gemi-kıyı elektrik bağlantısı (Cold Ironing) altyapısının kurulması.', category: 'ENERGY' },
        { id: 2, x: '60%', y: '55%', title: 'Alsancak Akıllı Ulaşım', desc: 'Alsancak bölgesindeki trafik yoğunluğunu azaltmak için yapay zeka destekli trafik yönetim sistemi. Akıllı sinyalizasyon ve dinamik yönlendirme.', category: 'TRANSPORT' },
        { id: 3, x: '30%', y: '65%', title: 'Karşıyaka Enerji Kooperatifi', desc: 'Vatandaş odaklı yenilenebilir enerji üretimi ve paylaşım platformu. Çatı tipi güneş enerjisi santralleri ile mahalle bazlı enerji toplulukları oluşturulmuştur.', category: 'ENERGY' },
        { id: 4, x: '75%', y: '30%', title: 'Bornova İnovasyon Kampüsü', desc: 'Üniversite binalarının sıfır karbon operasyonları için yenilenmesi ve bir inovasyon merkezi oluşturulması. Enerji verimliliği yüksek, akıllı bina teknolojileri uygulanmaktadır.', category: 'INFRASTRUCTURE' },
    ];

    const categoryColors = {
        ENERGY: { dot: 'bg-mlab-energy', pulse: 'bg-mlab-energy/30', label: 'Enerji', text: 'text-mlab-energy', bg: 'bg-mlab-energy/10' },
        TRANSPORT: { dot: 'bg-mlab-transport', pulse: 'bg-mlab-transport/30', label: 'Ulaşım', text: 'text-mlab-transport', bg: 'bg-mlab-transport/10' },
        INFRASTRUCTURE: { dot: 'bg-mlab-infrastructure', pulse: 'bg-mlab-infrastructure/30', label: 'Kentsel Altyapı', text: 'text-mlab-infrastructure', bg: 'bg-mlab-infrastructure/10' },
        WASTE: { dot: 'bg-mlab-waste', pulse: 'bg-mlab-waste/30', label: 'Atık', text: 'text-mlab-waste', bg: 'bg-mlab-waste/10' },
        NATURE: { dot: 'bg-mlab-nature', pulse: 'bg-mlab-nature/30', label: 'Doğa', text: 'text-mlab-nature', bg: 'bg-mlab-nature/10' }
    };

    const activePin = pins.find(p => p.id === activePinId);
    const activeCategoryInfo = activePin ? categoryColors[activePin.category] : null;

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-mlab-orange/10 text-mlab-orange text-xs font-bold tracking-wider uppercase mb-4">
                        ETKİLEŞİM HARİTASI
                    </span>
                    <h2 className="text-3xl font-bold text-mlab-navy">Projelerin Coğrafi Dağılımı</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch h-[600px]">
                    {/* Left Column: Map (70%) */}
                    <div className="lg:w-[70%] relative bg-slate-50 rounded-3xl border border-slate-200 shadow-lg overflow-hidden group h-full">
                        {/* Map Image */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <img src="/mapofizmir.png" alt="Izmir Map"
                                className="w-full h-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>

                        {pins.map((pin) => (
                            <div
                                key={pin.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin map-pin"
                                style={{ left: pin.x, top: pin.y }}
                                onMouseEnter={() => setActivePinId(pin.id)}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className={`w-4 h-4 ${categoryColors[pin.category].dot} rounded-full border-2 border-white shadow-md z-10 group-hover/pin:scale-125 transition-transform duration-200`}>
                                    </div>
                                    <div className={`absolute w-8 h-8 ${categoryColors[pin.category].pulse} rounded-full animate-ping`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Details (30%) */}
                    <div className="lg:w-[30%] bg-white rounded-3xl border border-slate-100 shadow-lg p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>

                        <div className="relative z-10 transition-all duration-300 h-full flex flex-col justify-center">
                            {activePin ? (
                                <div className="flex flex-col items-start text-left space-y-3 animate-fade-in">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${activeCategoryInfo.bg} ${activeCategoryInfo.text} mb-2`}>
                                        {activeCategoryInfo.label}
                                    </span>
                                    <h3 className="text-xl font-bold text-mlab-navy leading-tight">{activePin.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{activePin.desc}</p>
                                    <a href="#" className="text-mlab-cyan text-sm font-bold hover:underline mt-2 flex items-center gap-1">
                                        Detayları İncele <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center h-full justify-center space-y-4">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                                        <MapPin className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="text-slate-400 text-sm font-medium">
                                        Harita üzerindeki noktalara gelerek<br />proje detaylarını görüntüleyebilirsiniz.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectMap;
