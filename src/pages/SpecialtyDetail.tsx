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
    // Adding optional property to link back to list or for related items if needed
    image?: string;
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
        description: 'From visible scars to smooth, even skin, experience the mastery of Dr. Neelakanta\'s expertise. This transformative treatment utilizes state-of-the-art CO2 laser technology. We provide complete scar reduction designed for remarkable results. Join thousands who have regained their confidence with us. Your skin, our passion.',
        beforeImage: '/co2 laser.png',
        afterImage: '/skinallergy.png',
        image: '/co2 laser.png'
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
        heroTitle: 'From Grade VII Baldness to Confidence hair',
        description: 'From Grade VII baldness to a full head of natural hair, experience the mastery of Dr. Neelakanta\'s 10-year expertise. This transformative journey utilized 4,230 precision grafts, expertly executed over a dedicated two-day surgical procedure. We provide complete scalp coverage designed for a seamless, youthful look. Join thousands who have regained their self-esteem with us. Your hair, our passion.',
        beforeImage: '/a8d146ca8b4b1d737c95825397bad650a4acad3b.jpg',
        afterImage: '/hairloss.png',
        image: '/hairloss.png'
    },
    'tattoo-removal': {
        titleKey: 'tattooRemoval',
        heroTitle: 'Safe & Effective Tattoo Removal',
        description: 'Whether it\'s standard laser removal (10-12 sessions) or our specialized "Controlled Tattoo Destruction" for urgent defense selection requirements, we offer precise medical solutions tailored to your timeline and budget. Safe, effective, and professionally monitored.',
        beforeImage: '/co2 laser.png',
        afterImage: '/hydrafacial.png',
        image: '/co2 laser.png'
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
                <title>{`${title} | Nilakanta Skin & Hair Clinic`}</title>
                <meta name="description" content={specialty.description} />
                <meta property="og:title" content={`${title} | Nilakanta Skin & Hair Clinic`} />
                <meta property="og:description" content={specialty.description} />
                <meta property="og:image" content={specialty.beforeImage} />
                <meta property="twitter:title" content={`${title} | Nilakanta Skin & Hair Clinic`} />
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
                                <a
                                    href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border-2 border-[#1A1560] text-[#1A1560] hover:bg-[#1A1560] hover:text-white px-7 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
                                >
                                    {t('bookAppointment')}
                                </a>
                            </div>

                            {/* Right: Before/After Image Comparison Slider */}
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-50 aspect-[4/3]">
                                    <ImageComparisonSlider
                                        leftImage={specialty.beforeImage}
                                        rightImage={specialty.afterImage}
                                        altLeft={`${title} - Before treatment`}
                                        altRight={`${title} - After treatment`}
                                        initialPosition={50}
                                    />
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
        </div>
    );
};

export default SpecialtyDetail;
