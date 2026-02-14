import { Shield, Zap, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TattooSection = () => {
    const { t } = useLanguage();

    return (
        <section id="tattoo-removal" className="w-full bg-[#EBF5FF] py-14 font-manrope">
            <div className="max-w-[68rem] mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[3rem] md:rounded-[4rem] px-6 md:px-12 lg:px-16 py-16 shadow-2xl shadow-indigo-900/5">
                    <div className="max-w-5xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center mb-14">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                                {t('tattooRemoval')}
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A1560] tracking-tight leading-tight">
                                {t('tattooTitle')}
                            </h2>
                        </div>

                        {/* Split Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

                            {/* Standard Laser Removal (Safe & Steady) */}
                            <div className="lg:col-span-6 flex flex-col h-full bg-[#FAFBFF] rounded-[2.5rem] p-8 md:p-10 border border-indigo-50 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-indigo-50 flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-[#1A1560]">Laser Tattoo Removal</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-[#1A1560]/40 font-black">Standard Protocol</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
                                        {t('tattooLaserDesc')}
                                    </p>

                                    <div className="mt-auto space-y-3">
                                        <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white border border-indigo-50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                            <span className="text-[12px] font-bold text-[#1A1560]">Safest long-term option</span>
                                        </div>
                                        <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white border border-indigo-50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                            <span className="text-[12px] font-bold text-[#1A1560]">Ideal for thick & dark tattoos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Urgent Removal (Military/Defense) */}
                            <div className="lg:col-span-6 flex flex-col h-full bg-[#1A1560] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/10 group">
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -mb-20 -mr-20"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-indigo-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white">{t('tattooUrgentQuestion')}</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">Urgent Solutions</p>
                                        </div>
                                    </div>

                                    <p className="text-indigo-100/90 text-sm md:text-base leading-relaxed mb-8 font-medium italic border-l-2 border-indigo-400/30 pl-4">
                                        {t('tattooUrgentDesc')}
                                    </p>

                                    <div className="mt-auto space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle className="w-3.5 h-3.5 text-indigo-300" />
                                            </div>
                                            <span className="text-[13px] font-semibold text-indigo-50 leading-tight">
                                                {t('tattooBenefit1')}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle className="w-3.5 h-3.5 text-indigo-300" />
                                            </div>
                                            <span className="text-[13px] font-semibold text-indigo-50 leading-tight">
                                                {t('tattooBenefit2')}
                                            </span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle className="w-3.5 h-3.5 text-indigo-300" />
                                            </div>
                                            <span className="text-[13px] font-semibold text-indigo-50 leading-tight">
                                                {t('tattooBenefit3')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-[11px] font-bold text-indigo-300/80 mb-6 bg-white/5 p-3 rounded-xl border border-white/5">
                                        <Info className="w-4 h-4 shrink-0" />
                                        {t('tattooConsultation')}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Action */}
                        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20know%20more%20about%20Tattoo%20Removal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#1A1560] hover:bg-[#251D80] text-white px-10 py-4 rounded-xl font-black text-sm transition-all flex items-center gap-2 shadow-xl shadow-indigo-900/10"
                            >
                                Book Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TattooSection;
