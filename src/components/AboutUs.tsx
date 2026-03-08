import { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useLanguage();

    return (
        <section className="w-full bg-[#EBF5FF] py-12 font-manrope">
            <div className="max-w-[68rem] mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[3rem] md:rounded-[4rem] px-6 md:px-12 lg:px-16 py-16 shadow-2xl shadow-indigo-900/5">
                    <div className="max-w-5xl mx-auto">
                        {/* Section Title */}
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1560] tracking-tight">
                                {t('about')}
                            </h2>
                        </div>

                        {/* Content Section - Now directly on the white card */}
                        <div className={`
              flex flex-col lg:flex-row gap-10 lg:gap-16 
              transition-all duration-700 ease-in-out
              ${isExpanded ? 'items-start' : 'lg:items-stretch lg:max-h-[600px] overflow-hidden'}
            `}>

                            {/* Text Content */}
                            <div className="flex-1 flex flex-col justify-between text-left">
                                <div className={`space-y-6 text-gray-500 text-sm md:text-base leading-relaxed transition-all duration-700`}>
                                    <p className="font-semibold text-[#1A1560]/80">
                                        {t('welcomeMessage')}
                                    </p>

                                    <p>
                                        {t('welcomeDesc')}
                                    </p>

                                    <div className={`space-y-6 transition-all duration-700 origin-top ${isExpanded ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0 lg:h-auto lg:opacity-100 lg:scale-y-100 overflow-hidden'}`}>
                                        <p>
                                            Meet Dr. Neelakanta Rasineni MBBS MD DVL he completed his MBBS and MD from whole India reputed
                                            Government medical college, SRI VENKATESWARA MEDICAL COLLEGE IN TIRUPATHI. with 3000 bedded
                                            government hospital the biggest in Rayalaseema zone of Andhrapradesh
                                        </p>

                                        {isExpanded && (
                                            <>
                                                <p>
                                                    He got trained at University of Louisville, USA and also at JIPMER ..He has been exposed to various
                                                    diseases in skin and hair during his entire studies and also got aesthetic surgery training at various
                                                    institutes in India
                                                </p>

                                                <p>
                                                    He developed the hospital as the Best skin and hair care centre in Vijayawada with world class facilities to
                                                    give treatment for SKIN ALLERGIES; HAIR LOSS TREATMENT; scar reduction Hair Transplantation
                                                    Psoriasis care; vitiligo surgery; CHEMICAL PEELS microdermabrasion for YOUNG GLOWING SKIN;; CO2
                                                    LASER for scar reduction LASER HAIR REMOVAL and reduction with world class Lumines diode laser.
                                                    BOTOX for wrinkle reduction and young Early detection of HIV and other sexually transmitted diseases.
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="inline-flex items-center gap-2 text-[#291593] font-black text-base pt-8 group mt-auto self-start"
                                >
                                    {isExpanded ? (
                                        <>{t('readLess')} <ChevronUp className="w-4 h-4" /></>
                                    ) : (
                                        <>{t('readMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </div>

                            {/* Right Content - Doctor Image */}
                            <div className="w-full lg:w-[40%] flex-shrink-0">
                                <div className="relative">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src="/doctor.png"
                                            alt="Dr. Neelakanta Babu"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1560]/80 via-transparent to-transparent"></div>
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

export default AboutUs;
