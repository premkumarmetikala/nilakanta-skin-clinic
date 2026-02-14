import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    // Handle scroll on mount if coming from another page with state or hash
    useEffect(() => {
        if (isHome && location.hash) {
            const sectionId = location.hash.replace('#', '');
            setTimeout(() => {
                scrollToSection(sectionId, false);
            }, 100);
        }
    }, [location, isHome]);

    const scrollToSection = (sectionId: string, shouldNavigate = true) => {
        if (shouldNavigate && !isHome) {
            navigate(`/#${sectionId}`);
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Height of sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full bg-[#F8F9FE] py-3 md:py-4 border-b border-gray-100 sticky top-0 z-50 font-manrope">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                {/* Left Section: Branding */}
                <div
                    className="flex flex-col z-50 cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    <h1 className="text-[#1A1560] font-extrabold text-base md:text-lg leading-tight tracking-tight">
                        {language === 'en' ? 'Nilakanta skin & Hair Clinic' : 'నీలకంఠ స్కిన్ & హెయిర్ క్లినిక్'}
                    </h1>
                    <span className="text-[#1A1560] text-[10px] md:text-xs font-semibold tracking-wide opacity-90">
                        {language === 'en' ? 'Dermacare & Hair Transplant' : 'నీలకంఠ చర్మ వ్యాధుల క్లినిక్'}
                    </span>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden lg:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('home')}
                        className={`text-sm font-bold transition-colors ${isHome
                            ? "text-[#1A1560] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#1A1560]"
                            : "text-gray-500 hover:text-[#1A1560]"
                            }`}
                    >
                        {t('home')}
                    </button>
                    <button
                        onClick={() => scrollToSection('specialities')}
                        className="text-gray-500 hover:text-[#1A1560] font-medium text-sm transition-colors"
                    >
                        {t('specialities')}
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-gray-500 hover:text-[#1A1560] font-medium text-sm transition-colors"
                    >
                        {t('about')}
                    </button>
                </nav>

                {/* Right Section: Helpline, Language and Booking Button */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Language Switcher Link */}
                    <div className="flex items-center gap-2 border-r border-gray-200 pr-4 md:pr-6 mr-2">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`text-xs font-bold transition-all ${language === 'en' ? 'text-[#1A1560] underline underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            EN
                        </button>
                        <span className="text-gray-300 text-[10px]">|</span>
                        <button
                            onClick={() => setLanguage('te')}
                            className={`text-xs font-bold transition-all ${language === 'te' ? 'text-[#291593] underline underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            తెలుగు
                        </button>
                    </div>

                    {/* Helpline - Hidden on small mobile */}
                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-gray-400 text-[8px] font-bold uppercase tracking-[.15em] mb-0.5 whitespace-nowrap">
                            24/7 Appointment Helpline
                        </span>
                        <div className="flex items-center gap-1.5 text-[#1A1560]">
                            <Phone className="w-3 h-3 fill-[#1A1560]" />
                            <span className="text-sm md:text-base font-bold tracking-tight">9963234094</span>
                        </div>
                    </div>

                    {/* Desktop Booking Button */}
                    <a
                        href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex bg-[#1A1560] hover:bg-[#251D80] text-white px-5 py-2.5 rounded-lg items-center gap-2 transition-all shadow-lg shadow-indigo-900/10 hover:scale-[1.02] active:scale-95 group"
                    >
                        <Phone className="w-3.5 h-3.5 group-hover:animate-shake" />
                        <span className="font-bold text-xs tracking-wide whitespace-nowrap">{t('bookAppointment')}</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-[#1A1560] z-50 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
        fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
                <div className="flex flex-col h-full pt-20 px-6 pb-10">
                    <nav className="flex flex-col gap-5 mb-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`text-xl font-bold border-b border-indigo-50 pb-3 text-left ${isHome ? "text-[#1A1560]" : "text-gray-500"
                                }`}
                        >
                            {t('home')}
                        </button>
                        <button
                            onClick={() => scrollToSection('specialities')}
                            className="text-gray-500 font-bold text-xl border-b border-indigo-50 pb-3 text-left"
                        >
                            {t('specialities')}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-500 font-bold text-xl border-b border-indigo-50 pb-3 text-left"
                        >
                            {t('about')}
                        </button>
                    </nav>

                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-xl">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Language:</span>
                        <div className="flex gap-4">
                            <button
                                onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}
                                className={`text-sm font-black ${language === 'en' ? 'text-[#1A1560] border-b-2 border-[#1A1560]' : 'text-gray-400'}`}
                            >
                                ENGLISH
                            </button>
                            <button
                                onClick={() => { setLanguage('te'); setIsMenuOpen(false); }}
                                className={`text-sm font-black ${language === 'te' ? 'text-[#291593] border-b-2 border-[#291593]' : 'text-gray-400'}`}
                            >
                                తెలుగు
                            </button>
                        </div>
                    </div>

                    <div className="mt-auto space-y-5">
                        <div className="bg-indigo-50 p-5 rounded-xl">
                            <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-[.2em] block mb-2">
                                24/7 Appointment Helpline
                            </span>
                            <div className="flex items-center gap-3 text-[#1A1560]">
                                <Phone className="w-4 h-4 fill-[#1A1560]" />
                                <span className="text-xl font-black">9963234094</span>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#1A1560] text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-indigo-900/20 active:scale-95 transition-transform"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="font-bold text-base">{t('bookAppointment')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
