import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ImageComparisonSlider } from '../components/ui/image-comparison-slider';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Specialty data
const specialtyData: Record<string, {
    titleKey: string;
    heroTitle: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    image?: string;
    features?: string[];
    options?: { title: string; subtitle: string; description: string; highlights: string[]; dark?: boolean }[];
    phases?: { title: string; day: string; description: string; color: string }[];
}> = {
    'skin-allergy': {
        titleKey: 'skinAllergy',
        heroTitle: 'Expert Skin Allergy Treatment',
        description: 'From skin allergies to complete relief, experience the mastery of Dr. Neelakanta\'s expertise. This transformative journey provides comprehensive allergy testing and personalized treatment plans. We provide complete skin coverage designed for a seamless, healthy look. Join thousands who have regained their confidence with us. Your skin, our passion.',
        beforeImage: '/skin_allergy.png',
        afterImage: '/skinallergy.png',
        image: '/skinallergy.png'
    },
    'fungus': {
        titleKey: 'fungus',
        heroTitle: 'Effective Fungal Infection Treatment',
        description: 'From fungal infections to clear healthy skin, experience the mastery of Dr. Neelakanta\'s expertise. This transformative journey utilizes advanced antifungal treatments and personalized care. We provide complete treatment designed for lasting results. Join thousands who have regained their skin health with us. Your skin, our passion.',
        beforeImage: '/fungus.jpg',
        afterImage: '/skinbiopsy.png',
        image: '/fungus.jpg'
    },
    'scabies-mites': {
        titleKey: 'scabies',
        heroTitle: 'Complete Scabies & Mites Treatment',
        description: 'From scabies and mite infestations to complete relief, experience the mastery of Dr. Neelakanta\'s expertise. This transformative journey provides thorough treatment and prevention strategies. We provide complete care designed for rapid recovery. Join thousands who have regained their comfort with us. Your health, our passion.',
        beforeImage: '/scabies.png',
        afterImage: '/skinallergy.png',
        image: '/scabies.png'
    },
    'vitiligo-surgery': {
        titleKey: 'vitiligoSurgery',
        heroTitle: 'Advanced Vitiligo Surgery',
        description: 'From vitiligo patches to even skin tone, experience the mastery of Dr. Neelakanta\'s expertise. This transformative journey utilizes advanced surgical techniques and melanocyte transplantation. We provide complete coverage designed for natural-looking results. Join thousands who have regained their confidence with us. Your skin, our passion.',
        beforeImage: '/vitiligo.jpg',
        afterImage: '/skinbiopsy.png',
        image: '/vitiligo.jpg'
    },
    'skin-biopsy': {
        titleKey: 'skinBiopsy',
        heroTitle: 'Professional Skin Biopsy Services',
        description: 'From diagnostic uncertainty to clear answers, experience the mastery of Dr. Neelakanta\'s expertise. This precise procedure utilizes advanced techniques for accurate diagnosis. We provide complete analysis designed for optimal treatment planning. Join thousands trust us for their diagnostic needs. Your health, our passion.',
        beforeImage: '/skinbiopsy.png',
        afterImage: '/skinallergy.png',
        image: '/skinbiopsy.png'
    },
    'acne-care': {
        titleKey: 'acneCare',
        heroTitle: 'Comprehensive Acne Treatment',
        description: 'From persistent acne to clear, glowing skin, experience the mastery of Dr. Neelakanta\'s expertise. This transformative journey utilizes advanced treatments and personalized skincare routines. We provide complete care designed for long-lasting results. Join thousands who have regained their confidence with us. Your skin, our passion.',
        beforeImage: '/acne.png',
        afterImage: '/hydrafacial.png',
        image: '/acne.png'
    },
    'chemical-peel': {
        titleKey: 'chemicalPeel',
        heroTitle: 'Rejuvenating Chemical Peel Treatment',
        description: 'From dull, aging skin to radiant, youthful complexion, experience the mastery of Dr. Neelakanta\'s expertise. This transformative treatment utilizes medical-grade peels for optimal results. We provide complete skin rejuvenation designed for a fresh, glowing look. Join thousands who have transformed their skin with us. Your beauty, our passion.',
        beforeImage: '/chemicalpeel.png',
        afterImage: '/hydrafacial.png',
        image: '/chemicalpeel.png'
    },
    'co2-laser': {
        titleKey: 'co2Laser',
        heroTitle: 'Advanced CO2 Laser Scar Treatment',
        description: 'We deliver controlled energy to the scarred skin via CO₂ laser. This stimulates collagen regeneration in the skin, making old scars appear significantly lighter and smoother over time.',
        beforeImage: '/co2scars.jpeg',
        afterImage: '/co2scars.jpeg',
        image: '/co2scars.jpeg',
        features: ['100% Medical Precision', 'Advanced Collagen Regeneration'],
        phases: [
            { title: 'immediatelyAfter', day: 'Day 0', description: 'immediatelyAfterDesc', color: 'bg-amber-400' },
            { title: 'after20Days', day: 'Day 20', description: 'after20DaysDesc', color: 'bg-green-500' }
        ]
    },
    'hydrafacial': {
        titleKey: 'hydraFacial',
        heroTitle: 'Luxurious Hydrafacial Treatment',
        description: 'From tired, dull skin to radiant, hydrated glow, experience the mastery of Dr. Neelakanta\'s expertise. This transformative treatment combines cleansing, exfoliation, and hydration. We provide complete facial rejuvenation designed for instant results. Join thousands who have discovered their natural glow with us. Your radiance, our passion.',
        beforeImage: '/hydrafacial.png',
        afterImage: '/chemicalpeel.png',
        image: '/hydrafacial.png'
    },
    'prp-gfc': {
        titleKey: 'prpGfc',
        heroTitle: 'Advanced PRP Hair Restoration',
        description: 'From thinning hair to fuller, healthier growth, experience the mastery of Dr. Neelakanta\'s expertise. This transformative treatment utilizes your body\'s own growth factors. We provide complete hair restoration designed for natural results. Join thousands who have regained their hair confidence with us. Your hair, our passion.',
        beforeImage: '/prp.png',
        afterImage: '/hairloss.png',
        image: '/prp.png'
    },
    'hair-transplant': {
        titleKey: 'hairTransplant',
        heroTitle: 'Expert Hair Transplant Surgery',
        description: 'From hair loss to natural, permanent restoration, experience the mastery of Dr. Neelakanta\'s expertise. This transformative surgery utilizes advanced FUE techniques. We provide complete coverage designed for undetectable results. Join thousands who have regained their confidence with us. Your hair, our passion.',
        beforeImage: '/hair_transplant.png',
        afterImage: '/hairtransplant.png',
        image: '/hairtransplant.png'
    },
    'hair-loss-treatment': {
        titleKey: 'hairLossTreatment',
        heroTitle: 'From Grade VII Baldness to Confidence',
        description: 'From Grade VII baldness to a full head of natural hair, experience the mastery of Dr. Neelakanta\'s 10-year expertise. This transformative journey utilized 4,230 precision grafts, expertly executed over a dedicated two-day surgical procedure. We provide complete scalp coverage designed for a seamless, youthful look.',
        beforeImage: '/hairloss_treatement.jpeg',
        afterImage: '/hairloss_treatement.jpeg',
        image: '/hairloss_treatement.jpeg'
    },
    'tattoo-removal': {
        titleKey: 'tattooRemoval',
        heroTitle: 'Tattoo Removal – Treatment Tailored to Your Needs',
        description: 'Safe, effective, and professionally monitored tattoo removal solutions tailored to your timeline and budget.',
        beforeImage: '/co2 laser.png',
        afterImage: '/co2 laser.png',
        image: '/co2 laser.png',
        options: [
            {
                title: 'Laser Tattoo Removal',
                subtitle: 'Standard Protocol',
                description: 'tattooLaserDesc',
                highlights: ['Safest long-term option', 'Ideal for thick & dark tattoos'],
                dark: false
            },
            {
                title: 'tattooUrgentQuestion',
                subtitle: 'Urgent Solutions',
                description: 'tattooUrgentDesc',
                highlights: ['tattooBenefit1', 'tattooBenefit2', 'tattooBenefit3'],
                dark: true
            }
        ]
    },
};

const SpecialtyDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { t, language } = useLanguage();

    const specialty = slug ? specialtyData[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!specialty) {
        return (
            <div className="min-h-screen bg-white font-manrope flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#1A1560] mb-4">
                        {language === 'en' ? 'Specialty Not Found' : 'ప్రత్యేకత కనుగొనబడలేదు'}
                    </h1>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#1A1560] text-white px-6 py-3 rounded-lg hover:bg-[#251D80] transition-colors"
                    >
                        {t('home')}
                    </button>
                </div>
            </div>
        );
    }

    const title = t(specialty.titleKey);

    // Get 4 random related specialties, excluding current one
    const relatedSpecialties = Object.entries(specialtyData)
        .filter(([key]) => key !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .map(([key, data]) => ({
            ...data,
            slug: key,
            // Fallback image if not in main data, though we added it above
            image: data.image || data.beforeImage
        }));

    return (
        <div className="min-h-screen bg-white font-manrope">
            <Helmet>
                <title>{`${title} | Neelakanta Skin Laser - Leader Hair-transplant Clinic`}</title>
                <meta name="description" content={specialty.description} />
                <meta property="og:title" content={`${title} | Neelakanta Skin Laser - Leader Hair-transplant Clinic`} />
                <meta property="og:description" content={specialty.description} />
                <meta property="og:image" content={specialty.beforeImage} />
                <meta property="twitter:title" content={`${title} | Neelakanta Skin Laser - Leader Hair-transplant Clinic`} />
                <meta property="twitter:description" content={specialty.description} />
                <meta property="twitter:image" content={specialty.beforeImage} />
            </Helmet>
            <Header />

            {/* Hero Section */}
            <section className="bg-[#EBF5FF] py-12 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb - Above the card */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">
                            <button onClick={() => navigate('/')} className="hover:text-[#1A1560] transition-colors">
                                {t('specialities')}
                            </button>
                            <span className="mx-2">/</span>
                            <span className="text-[#1A1560] font-semibold">{title}</span>
                        </p>
                    </div>

                    <div className="bg-white rounded-[3rem] md:rounded-[4rem] px-6 md:px-12 lg:px-16 py-16 shadow-2xl shadow-indigo-900/5 transition-all">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            {/* Left: Text Content */}
                            <div className="space-y-5">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1560] leading-tight">
                                    {language === 'en' ? specialty.heroTitle : title}
                                </h1>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {specialty.description}
                                </p>

                                {/* Additional Content Blocks */}
                                {specialty.features && (
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {specialty.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                                <span className="text-[11px] font-bold text-[#1A1560] uppercase tracking-wide">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {specialty.phases && (
                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        {specialty.phases.map((phase, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className={`w-3 h-3 rounded-full ${phase.color} mt-1.5`}></div>
                                                    {idx !== specialty.phases!.length - 1 && <div className="w-px h-full bg-gray-100 my-1"></div>}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-[#1A1560] flex items-center gap-2">
                                                        {t(phase.title)}
                                                        <span className="text-[9px] font-bold bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded uppercase">{phase.day}</span>
                                                    </h4>
                                                    <p className="text-xs text-gray-500 leading-tight mt-0.5">{t(phase.description)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {specialty.options && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        {specialty.options.map((opt, idx) => (
                                            <div key={idx} className={`p-4 rounded-2xl border ${opt.dark ? 'bg-[#1A1560] text-white border-transparent' : 'bg-gray-50 border-gray-100'}`}>
                                                <h4 className={`text-sm font-black mb-0.5 ${opt.dark ? 'text-white' : 'text-[#1A1560]'}`}>{t(opt.title)}</h4>
                                                <p className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${opt.dark ? 'text-indigo-300' : 'text-indigo-400'}`}>{opt.subtitle}</p>
                                                <p className={`text-[11px] leading-relaxed mb-3 ${opt.dark ? 'text-indigo-50/80' : 'text-gray-500'}`}>{t(opt.description)}</p>
                                                <div className="space-y-1">
                                                    {opt.highlights.map((h, i) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <div className={`w-1 h-1 rounded-full ${opt.dark ? 'bg-indigo-400' : 'bg-indigo-600'}`}></div>
                                                            <span className={`text-[10px] font-bold ${opt.dark ? 'text-indigo-100' : 'text-[#1A1560]'}`}>{t(h)}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="pt-4">
                                    <a
                                        href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border-2 border-[#1A1560] text-[#1A1560] hover:bg-[#1A1560] hover:text-white px-7 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        {t('bookAppointment')}
                                    </a>
                                </div>
                            </div>

                            {/* Right: Image Section */}
                            <div className="relative">
                                <div className={`rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-50 ${specialty.beforeImage === specialty.afterImage ? '' : 'aspect-[4/3]'}`}>
                                    {specialty.beforeImage === specialty.afterImage ? (
                                        <img
                                            src={specialty.beforeImage}
                                            alt={title}
                                            className="w-full h-auto object-contain max-h-[500px] mx-auto"
                                        />
                                    ) : (
                                        <ImageComparisonSlider
                                            leftImage={specialty.beforeImage}
                                            rightImage={specialty.afterImage}
                                            altLeft={`${title} - Before treatment`}
                                            altRight={`${title} - After treatment`}
                                            initialPosition={50}
                                        />
                                    )}
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-40 -z-10"></div>
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-40 -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Specialties Logic */}
            <section className="py-16 px-6 lg:px-8 bg-[#EBF5FF]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[#1A1560]">
                            {language === 'en' ? 'Explore Other Specialties' : 'ఇతర ప్రత్యేకతలను అన్వేషించండి'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedSpecialties.map((spec, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/specialty/${spec.slug}`)}
                                className="group bg-white rounded-2xl p-4 md:p-5 flex items-center gap-6 border border-transparent hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/10 transition-all cursor-pointer relative shadow-sm"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-indigo-50 flex-shrink-0 relative shadow-inner">
                                    <img
                                        src={spec.image}
                                        alt={t(spec.titleKey)}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 pr-8 text-left">
                                    <h3 className="text-[#1A1560] font-bold text-lg leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {t(spec.titleKey)}
                                    </h3>
                                </div>

                                <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-[#1A1560] flex items-center justify-center text-white flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-900/20 translate-x-2 group-hover:translate-x-0">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
};

export default SpecialtyDetail;
