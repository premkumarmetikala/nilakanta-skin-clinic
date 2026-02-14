import { MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BookingContact = () => {
    const { t, language } = useLanguage();

    return (
        <section className="w-full bg-[#EBF5FF] py-14 px-6 lg:px-8 font-manrope">
            <div className="max-w-5xl mx-auto">
                <div className="bg-[#EDEFF8] rounded-[3rem] p-10 md:p-14 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* Column 1: Booking CTA */}
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[#291593] font-bold text-xs uppercase tracking-[0.2em] mb-4">
                            {t('contact')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1560] leading-tight mb-4 max-w-xs">
                            {language === 'en' ? 'We Take Care of Your Skin and Hair Health' : 'మేము మీ చర్మం మరియు జుట్టు ఆరోగ్యం పట్ల శ్రద్ధ తీసుకుంటాము'}
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-[280px] leading-relaxed">
                            {t('tagline')}
                        </p>
                        <a
                            href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#1A1560] px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-900/5 hover:scale-[1.02] transition-all active:scale-95 inline-block text-center"
                        >
                            {t('bookAppointment')}
                        </a>

                    </div>

                    {/* Column 2: Location and Timings */}
                    <div className="flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <MapPin className="w-5 h-5 text-[#1A1560]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1560] mb-6">{t('visitUs')}</h3>
                        <div className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6">
                            Pushpa Hotel, 33-26-11A, chalamala vari street,<br />
                            {language === 'en' ? 'Near Mutyalamma Temple, Right side, Road,' : 'ముత్యాలమ్మ గుడి దగ్గర కుడి వైపు, రోడ్డు,'}<br />
                            kasthuribaipeta, Vijayawada, Andhra Pradesh 520002
                        </div>
                        <a
                            href="https://www.google.com/maps/place/Neelakanta+skin+Laser+-+Leader+Hairtransplant+Clinic+%7C%7C+%E0%B0%A8%E0%B1%80%E0%B0%B2%E0%B0%95%E0%B0%82%E0%B0%A0+%E0%B0%9A%E0%B0%B0%E0%B1%8D%E0%B0%AE+%E0%B0%B5%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A7%E0%B1%81%E0%B0%B2+%E0%B0%95%E0%B1%8D%E0%B0%B2%E0%B0%BF%E0%B0%A8%E0%B0%BF%E0%B0%95%E0%B1%8D/@16.5107609,80.6387283,17z/data=!4m6!3m5!1s0x3a35e555381a5161:0x3fee29460c493cd6!8m2!3d16.5105502!4d80.6391364!16s%2Fg%2F11b7xp0gh2?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#1A1560] font-bold text-base mb-8 group"
                        >
                            {t('openMaps')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="space-y-1 pt-6 border-t border-gray-200">
                            <p className="text-gray-400 text-xs font-medium">{language === 'en' ? 'Mon - Sat: 10:30am to 8:30pm' : 'సోమ - శని: ఉదయం 10:30 నుండి రాత్రి 8:30 వరకు'}</p>
                            <p className="text-gray-400 text-xs font-medium">{language === 'en' ? 'Sunday: 10:30am to 2:30pm' : 'ఆదివారం: ఉదయం 10:30 నుండి మధ్యాహ్నం 2:30 వరకు'}</p>
                        </div>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <Phone className="w-5 h-5 text-[#1A1560]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1560] mb-6">{t('forAppointments')}</h3>

                        <div className="mb-8">
                            <p className="text-gray-400 text-sm font-medium mb-2">{t('phone')}</p>
                            <p className="text-[#1A1560] font-bold text-lg leading-tight">
                                +91-9963234094, +91-8686225085
                            </p>
                        </div>

                        <div className="flex items-center gap-2 mb-10 pt-4">
                            <div className="bg-[#25D366] p-1.5 rounded-lg">
                                <MessageCircle className="w-4 h-4 text-white fill-white" />
                            </div>
                            <a
                                href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1A1560] font-bold text-lg hover:underline"
                            >
                                +91-9963234094
                            </a>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                            <p className="text-gray-400 text-sm font-medium mb-1">{t('email')}</p>
                            <p className="text-[#1A1560] font-bold text-base">nkbabunaidu@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingContact;
