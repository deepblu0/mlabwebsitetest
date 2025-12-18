import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-mlab-navy text-white pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded-lg p-3 inline-block">
                                <img src="/mlab-logo.png" alt="M-LAB" className="h-10 w-auto" />
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            İzmir'in sürdürülebilir geleceğini birlikte tasarlıyoruz. İklim nötr bir şehir için inovasyon, teknoloji ve toplumsal katılımı buluşturuyoruz.
                        </p>

                        <div className="flex gap-6 text-sm font-medium text-slate-400">
                            <a href="#" className="hover:text-mlab-cyan transition-colors">Gizlilik Politikası</a>
                            <a href="#" className="hover:text-mlab-cyan transition-colors">Çerez Politikası</a>
                            <a href="#" className="hover:text-mlab-cyan transition-colors">KVKK Aydınlatma</a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold mb-6">Bizimle İletişime Geçin</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-mlab-cyan transition-colors" />
                                <input type="email" placeholder="ornek@email.com" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-mlab-cyan transition-colors" />
                            </div>
                            <textarea placeholder="Mesajınızı buraya yazın..." rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-mlab-cyan transition-colors"></textarea>
                            <button type="submit" className="w-full bg-gradient-to-r from-mlab-cyan to-mlab-purple text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-mlab-cyan/20 transition-all duration-300">
                                Mesajı Gönder
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} M-LAB İzmir. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
