import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-mlab-navy text-white py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white rounded-lg p-2 inline-block">
                                <img src="/mlab-logo.png" alt="M-LAB" className="h-8 w-auto" />
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            İzmir İklim Nötr ve Akıllı Şehirler Misyonu için çalışan inovasyon ve eylem laboratuvarı.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Hızlı Erişim</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-mlab-cyan transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-mlab-cyan transition-colors">Projeler</a></li>
                            <li><a href="#" className="hover:text-mlab-cyan transition-colors">Haberler</a></li>
                            <li><a href="#" className="hover:text-mlab-cyan transition-colors">İletişim</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">İletişim</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>info@m-lab.izmir.bel.tr</li>
                            <li>Alsancak, İzmir</li>
                        </ul>
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
