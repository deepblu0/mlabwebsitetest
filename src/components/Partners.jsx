import React from 'react';

const Partners = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-mlab-navy">Paydaşlarımız</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/tr/8/83/Izmir_Ticaret_Odasi_logo.png" alt="İzmir Ticaret Odası" className="h-16 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://izka.org.tr/wp-content/uploads/2020/09/izka-logo.png" alt="İzmir Kalkınma Ajansı" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://ebso.org.tr/assets/images/logo.png" alt="Ege Bölgesi Sanayi Odası" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://itb.org.tr/assets/img/logo.png" alt="İzmir Ticaret Borsası" className="h-16 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://eib.org.tr/assets/images/logo.png" alt="Ege İhracatçı Birlikleri" className="h-14 w-auto object-contain hover:scale-110 transition-transform" />
                </div>
            </div>
        </section>
    );
};

export default Partners;
