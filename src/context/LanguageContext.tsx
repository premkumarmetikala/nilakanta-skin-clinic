import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Header
        home: 'Home',
        about: 'About',
        specialities: 'Specialities',
        contact: 'Contact',
        // Hero
        clinicName: 'Nilakanta skin laser & leader Hair transplant',
        tagline: 'Safe, effective, and personalized solutions for lifelong skin and hair wellness',
        bookAppointment: 'Book Appointment',
        doctorRole: 'Dermatologist & Hair transplant specialist',
        doctorSubRole: 'Cosmetologist & Laser specialist',
        experience: '17 years experience overall',
        worldClassCare: 'World-Class Dermatological Care',
        latestTech: 'Equipped with latest technology',
        // Specialities
        ourSpecialities: 'Our Specialities',
        specialitiesDesc: 'Comprehensive dermatological and hair transplant services tailored to your needs.',
        viewAll: 'View All',
        // About
        aboutTitle: 'About Nilakanta Skin & Hair Clinic',
        aboutDesc: 'Led by Dr. Neelakanta Babu, we are dedicated to providing the highest quality skin and hair care. Our clinic is equipped with the latest laser technology and hair transplant equipment to ensure the best results for our patients.',
        // Contact
        visitUs: 'Visit us on',
        openMaps: 'Open on Google Maps',
        forAppointments: 'For Appointments',
        phone: 'Phone number',
        email: 'Email address',
        // Specialties
        skinAllergy: 'Skin allergy',
        fungus: 'Fungus (ringworm chamet)',
        scabies: 'Scabies & Mites',
        vitiligoSurgery: 'Vitiligo surgery',
        skinBiopsy: 'Skin Biopsy',
        acneCare: 'Acne Care',
        chemicalPeel: 'Chemical Peel',
        co2Laser: 'Co2 laser/scars treatment',
        hydraFacial: 'Hydrafacial/Glow peel',
        prpGfc: 'PRP/GFC/QR678',
        tattooRemoval: 'Tattoo Removal',
        hairTransplant: 'Hair Transplant',
        hairLossTreatment: 'Hair Loss treatment',
        howWeCanHelp: 'How We Can Help You',
        welcomeMessage: 'Welcome to Neelakanta Skin & Laser - Leader Hair Transplant, a trusted destination for advanced skin, hair, and aesthetic solutions in Vijayawada.',
        welcomeDesc: 'With years of clinical experience and a deep commitment to patient well-being, we deliver personalized care using the latest dermatological and hair restoration technologies.',
        readMore: 'Know more',
        readLess: 'Read Less',
        // Treatment Section
        featuredTreatment: 'Featured Treatment',
        scarRevision: 'Advanced CO2 Laser Scar Treatment',
        caseStudy: 'Clinical Case Study: Forehead Scar',
        patientPresentation: 'Patient presented with an old forehead scar, with uneven skin texture and visible depression.',
        immediatelyAfter: 'Immediately After CO₂ Laser',
        immediatelyAfterDesc: 'CO₂ fractional laser was performed over the scar area. Post-laser micro-dots and mild redness are expected findings, which indicate controlled laser energy used to stimulate collagen remodeling.',
        after20Days: 'Result After 20 Days',
        after20DaysDesc: 'Within 20 days, the treated area showed significant improvement: Scar depth visibly reduced, skin texture became smoother, scar color blended better with surrounding skin, and overall appearance of the scar improved remarkably.',
        howItWorks: 'How it Works',
        howItWorksDesc: 'We deliver controlled energy to the scarred skin via CO₂ laser. This stimulates collagen regeneration in the skin, making old scars appear significantly lighter and smoother over time.',
        treatmentDisclaimer: 'Results may vary depending on scar depth, skin type, and post-procedure care. Some patients may require multiple sessions for optimal results.',
        // Tattoo Removal Section
        tattooTitle: 'Tattoo Removal – Treatment Tailored to Your Needs',
        tattooHeroTitle: 'Safe & Effective Tattoo Removal',
        tattooLaserDesc: 'When a tattoo is large and thick, laser tattoo removal is the safest and most effective option. However, it usually requires 10–12 sessions over 12 months, with an approximate cost of ₹50,000–₹60,000 to achieve complete clearance.',
        tattooUrgentQuestion: 'Facing a military or defense selection within 2 months?',
        tattooUrgentDesc: 'For those who do not have the time or budget for long-term laser treatment, we offer a medically supervised "Controlled Tattoo Destruction" procedure.',
        tattooBenefit1: 'Ideal for time-sensitive requirements',
        tattooBenefit2: 'Performed under strict medical supervision',
        tattooBenefit3: 'Healing process is carefully monitored and managed',
        tattooConsultation: 'Consult with our clinic to choose the right tattoo removal method based on your goal, timeline, and budget.',
    },
    te: {
        // Header
        home: 'హోమ్',
        about: 'గురించి',
        specialities: 'స్పెషాలిటీస్',
        contact: 'కాంటాక్ట్',
        // Hero
        clinicName: 'నీలకంఠ స్కిన్ లేజర్ & లీడర్ హెయిర్ ట్రాన్స్ప్లాంట్',
        tagline: 'జీవితకాల చర్మం మరియు జుట్టు ఆరోగ్యం కోసం సురక్షితమైన, సమర్థవంతమైన మరియు వ్యక్తిగతీకరించిన పరిష్కారాలు',
        bookAppointment: 'అపాయింట్‌మెంట్ బుక్ చేయండి',
        doctorRole: 'డెర్మటాలజిస్ట్ & హెయిర్ ట్రాన్స్‌ప్లాంట్ స్పెషలిస్ట్',
        doctorSubRole: 'కాస్మెటాలజిస్ట్ & లేజర్ స్పెషలిస్ట్',
        experience: 'మొత్తం 17 సంవత్సరాల అనుభవం',
        worldClassCare: 'ప్రపంచ స్థాయి చర్మ సంరక్షణ',
        latestTech: 'అధునాతన సాంకేతికతతో అమర్చబడింది',
        // Specialities
        ourSpecialities: 'మా ప్రత్యేకతలు',
        specialitiesDesc: 'మీ అవసరాలకు అనుగుణంగా సమగ్రమైన డెర్మటాలజికల్ మరియు హెయిర్ ట్రాన్స్‌ప్లాంట్ సేవలు.',
        viewAll: 'అన్నీ చూడండి',
        // About
        aboutTitle: 'నీలకంఠ స్కిన్ & హెయిర్ క్లినిక్ గురించి',
        aboutDesc: 'డాక్టర్ నీలకంఠ బాబు గారి నేతృత్వంలో, మేము అత్యధిక నాణ్యత గల చర్మం మరియు జుట్టు సంరక్షణను అందించడానికి కట్టుబడి ఉన్నాము. మా క్లినిక్ మా రోగులకు ఉత్తమ ఫలితాలను నిర్ధారించడానికి సరికొద్దీ లేజర్ టెక్నాలజీ మరియు హెయిర్ ట్రాన్స్‌ప్లాంట్ పరికరాలను కలిగి ఉంది.',
        // Contact
        visitUs: 'మమ్మల్ని సందర్శించండి',
        openMaps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
        forAppointments: 'అపాయింట్‌మెంట్‌ల కోసం',
        phone: 'ఫోన్ నంబర్',
        email: 'ఈమెయిల్ అడ్రస్',
        // Specialties
        skinAllergy: 'చర్మ అలెర్జీ',
        fungus: 'ఫంగస్ (తామర)',
        scabies: 'గజ్జి మరియు పురుగులు',
        vitiligoSurgery: 'బొల్లి శస్త్రచికిత్స',
        skinBiopsy: 'స్కిన్ బయాప్సీ',
        acneCare: 'మొటిమల సంరక్షణ',
        chemicalPeel: 'కెమికల్ పీల్',
        co2Laser: 'CO2 లేజర్/మచ్చల చికిత్స',
        hydraFacial: 'హైడ్రాఫేషియల్/గ్లో పీల్',
        prpGfc: 'PRP/GFC/QR678',
        tattooRemoval: 'టాటూ రిమూవల్',
        hairTransplant: 'హెయిర్ ట్రాన్స్‌ప్లాంట్',
        hairLossTreatment: 'జుట్టు రాలడం చికిత్స',
        howWeCanHelp: 'మేము మీకు ఎలా సహాయం చేస్తాము',
        welcomeMessage: 'విజయవాడలో అడ్వాన్స్‌డ్ స్కిన్, హెయిర్ మరియు ఈస్తటిక్ సొల్యూషన్స్ కోసం నీలకంఠ స్కిన్ లేజర్ - లీడర్ హెయిర్ ట్రాన్స్‌ప్లాంట్ ఒక విశ్వసనీయ గమ్యస్థానం.',
        welcomeDesc: 'అనేక సంవత్సరాల క్లినికల్ అనుభవం మరియు రోగుల సంక్షేమం పట్ల లోతైన నిబద్ధతతో, మేము సరికొద్దీ డెర్మటాలజికల్ మరియు హెయిర్ రీస్టోరేషన్ టెక్నాలజీలను ఉపయోగించి వ్యక్తిగతీకరించిన సంరక్షణను అందిస్తాము.',
        readMore: 'మరింత సమాచారం',
        readLess: 'తక్కువ చూపించు',
        // Treatment Section
        featuredTreatment: 'ప్రధాన చికిత్స',
        scarRevision: 'అడ్వాన్స్‌డ్ CO2 లేజర్ స్కార్ ట్రీట్‌మెంట్',
        caseStudy: 'క్లినికల్ కేస్ స్టడీ: నుదుటిపై మచ్చ',
        patientPresentation: 'నుదుటిపై పాత గాయం వల్ల ఏర్పడిన మచ్చ, గుంతగా మరియు గరుకుగా ఉన్న స్థితిలో పేషెంట్ వచ్చారు.',
        immediatelyAfter: 'CO₂ లేజర్ చేసిన వెంటనే',
        immediatelyAfterDesc: 'మచ్చ ఉన్న భాగంలో CO₂ ఫ్రాక్షనల్ లేజర్ చేయబడింది. లేజర్ తర్వాత చిన్న చుక్కలు మరియు స్వల్ప ఎరుపుదనం సాధారణం, ఇది కొల్లాజెన్ పునర్నిర్మాణాన్ని ప్రేరేపించడానికి నియంత్రిత లేజర్ ఎనర్జీని సూచిస్తుంది.',
        after20Days: '20 రోజుల తర్వాత ఫలితం',
        after20DaysDesc: '20 రోజులలోపు, చికిత్స చేసిన భాగంలో గణనీయమైన మార్పు కనిపించింది: మచ్చ లోతు తగ్గింది, చర్మం సున్నితంగా మారింది, మచ్చ రంగు చుట్టుపక్కల చర్మంతో బాగా కలిసింది మరియు మచ్చ మొత్తం రూపం అద్భుతంగా మెరుగుపడింది.',
        howItWorks: 'ఇది ఎలా పనిచేస్తుంది?',
        howItWorksDesc: 'CO₂ లేజర్ ద్వారా మచ్చ ఉన్న చర్మంపై కంట్రోల్డ్ ఎనర్జీ ఇస్తాం. ఇది చర్మంలో కొత్త కాలజెన్ ఏర్పడేలా (collagen regeneration) చేస్తుంది. దీంతో పాత గాయాల మచ్చలు క్రమంగా తక్కువగా కనిపిస్తాయి.',
        treatmentDisclaimer: 'మచ్చ లోతు, చర్మం రకం మరియు చికిత్స తర్వాత తీసుకునే జాగ్రత్తలపై ఆధారపడి ఫలితాలు మారవచ్చు. ఉత్తమ ఫలితాల కోసం మరిన్ని సెషన్లు అవసరం కావచ్చు.',
        // Tattoo Removal Section
        tattooTitle: 'టాటూ రిమూవల్ – మీ అవసరానికి అనుగుణంగా చికిత్స',
        tattooHeroTitle: 'సురక్షితమైన మరియు ప్రభావవంతమైన టాటూ రిమూవల్',
        tattooLaserDesc: 'టాటూ పెద్దగా మరియు మోటుగా ఉన్నప్పుడు, లేజర్ టాటూ రిమూవల్ అత్యంత సురక్షితమైన మరియు ప్రభావవంతమైన విధానం. దీనికి సాధారణంగా 12 నెలల్లో 10–12 సెషన్లు అవసరం అవుతాయి మరియు సుమారు ₹50,000–₹60,000 ఖర్చు అవుతుంది.',
        tattooUrgentQuestion: '1-2 నెలల్లో మిలిటరీ లేదా డిఫెన్స్ సెలెక్షన్ ఉందా?',
        tattooUrgentDesc: 'సమయం లేదా బడ్జెట్ తక్కువగా ఉన్నవారికి, మా క్లినిక్లో "Controlled Tattoo Destruction" అనే ప్రత్యేక చికిత్స అందుబాటులో ఉంది.',
        tattooBenefit1: 'తక్కువ సమయంలో ఫలితం కావాల్సిన వారికి అనుకూలం',
        tattooBenefit2: 'పూర్తి వైద్య పర్యవేక్షణతో చేయబడుతుంది',
        tattooBenefit3: 'హీలింగ్ను సురక్షితంగా మానిటర్ చేస్తాము',
        tattooConsultation: 'మీ సమయం, అవసరం మరియు బడ్జెట్ ఆధారంగా సరైన పద్ధతిని ఎంచుకోవడానికి మమ్మల్ని సంప్రదించండి.',
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
