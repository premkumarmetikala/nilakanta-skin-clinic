import { Zap, Clock, Info, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TreatmentSection = () => {
    const { t } = useLanguage();

    return (
        <section id="treatment" className="w-full bg-[#EBF5FF] py-14 font-manrope">
            <div className="max-w-[68rem] mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[3rem] md:rounded-[4rem] px-6 md:px-12 lg:px-16 py-16 shadow-2xl shadow-indigo-900/5">
                    <div className="max-w-5xl mx-auto">

                        {/* Section Title */}
                        <div className="text-center mb-14">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                                {t('featuredTreatment')}
                            </div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A1560] tracking-tight leading-tight">
                                {t('scarRevision')}
                            </h2>
                        </div>

                        {/* Main Grid Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                            {/* Left Side: Case Image & Context */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-black text-[#1A1560]">
                                            {t('caseStudy')}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium italic">
                                        "{t('patientPresentation')}"
                                    </p>
                                </div>

                                {/* Clinical Evidence Image */}
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-indigo-500/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                                        <img
                                            src="/co2scars.jpeg"
                                            alt="Clinical Evidence for CO2 Laser Treatment"
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1560]/50 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                            <span className="bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-white">
                                                Clinical Proof
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-[#FAFBFF] rounded-2xl border border-indigo-50 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                        <span className="text-xs font-bold text-[#1A1560]">100% Medical Precision</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-bold text-[#1A1560]">Advanced Collagen Regeneration</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Timeline & Methodology */}
                            <div className="lg:col-span-7 space-y-12">

                                {/* Timeline Wrapper */}
                                <div className="space-y-10 relative">
                                    <div className="absolute left-[19px] top-6 bottom-6 w-px bg-indigo-50"></div>

                                    {/* Phase 1 */}
                                    <div className="relative pl-12 flex gap-4 md:gap-6 group">
                                        <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-extrabold text-[#1A1560] mb-2 flex items-center gap-3">
                                                {t('immediatelyAfter')}
                                                <span className="text-[9px] font-black bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full uppercase">Day 0</span>
                                            </h4>
                                            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
                                                {t('immediatelyAfterDesc')}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phase 2 */}
                                    <div className="relative pl-12 flex gap-4 md:gap-6 group">
                                        <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-extrabold text-[#1A1560] mb-2 flex items-center gap-3">
                                                {t('after20Days')}
                                                <span className="text-[9px] font-black bg-green-50 text-green-600 px-2 py-0.5 rounded-full uppercase">Day 20</span>
                                            </h4>
                                            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-semibold text-indigo-900/80">
                                                {t('after20DaysDesc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Methodology & Disclaimer */}
                                <div className="pt-10 border-t border-indigo-50 space-y-8">
                                    <div className="flex gap-4 p-5 bg-indigo-50/30 rounded-2xl border border-indigo-50/50">
                                        <div className="bg-indigo-600 p-2 rounded-lg shrink-0 h-fit">
                                            <Zap className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="text-sm font-black text-[#1A1560] uppercase tracking-wide">{t('howItWorks')}</h5>
                                            <p className="text-gray-500 text-sm italic leading-relaxed">
                                                {t('howItWorksDesc')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-3">
                                            <Info className="w-4 h-4 text-amber-500 shrink-0" />
                                            <p className="text-[11px] font-bold text-gray-400 italic leading-snug max-w-[280px]">
                                                {t('treatmentDisclaimer')}
                                            </p>
                                        </div>
                                        <a
                                            href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20know%20more%20about%20CO2%20Laser%20Treatment"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-[#1A1560] hover:bg-[#251D80] text-white px-8 py-4 rounded-xl font-black text-sm transition-all flex items-center gap-2 shadow-xl shadow-indigo-900/10 whitespace-nowrap"
                                        >
                                            Consult Now
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TreatmentSection;
