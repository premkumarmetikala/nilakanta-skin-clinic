import { Instagram, Facebook, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    const scrollToSection = (sectionId: string) => {
        if (!isHome) {
            navigate(`/#${sectionId}`);
            // The Header's useEffect will handle the scrolling after navigation
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
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
    };

    return (
        <footer className="w-full bg-[#EBF5FF] pt-8 md:pt-12 font-manrope">
            {/* Full-width white card with rounded top corners */}
            <div className="bg-white rounded-t-[2rem] md:rounded-t-[5rem] px-6 md:px-12 lg:px-16 pt-10 md:pt-12 pb-8 shadow-2xl shadow-indigo-900/5 w-full">
                <div className="max-w-6xl mx-auto">
                    {/* Top Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-gray-100">
                        <div className="max-w-md text-left">
                            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#1A1560] leading-[1.2] mb-6">
                                Caring for your skin. Restoring your confidence.
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#1A1560] hover:bg-[#251D80] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-xl shadow-indigo-900/10 transition-all flex items-center justify-center flex-1 sm:flex-none whitespace-nowrap"
                                >
                                    Book Appointment
                                </a>
                                <a
                                    href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#1A1560] hover:bg-[#251D80] text-white w-12 h-12 rounded-xl transition-all shadow-xl shadow-indigo-900/10 flex items-center justify-center flex-shrink-0"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-start lg:items-end text-left lg:text-right w-full lg:w-auto transition-all">
                            <h3 className="text-[#1A1560] font-extrabold text-xl lg:text-2xl leading-tight mb-2">
                                Nilakanta skin & Hair Clininc
                            </h3>
                            <p className="text-[#1A1560] text-base lg:text-lg font-bold mb-5 opacity-90">
                                నీలకంఠ చర్మ వ్యాధుల క్లినిక్
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/drneelakantadermatologist?igsh=MTFsaXgzdWM4M3czbA%3D%3D&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-[#1A1560]/30 flex items-center justify-center text-[#1A1560] hover:bg-[#1A1560] hover:text-white transition-all shadow-sm"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/919963234094"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-[#1A1560]/30 flex items-center justify-center text-[#1A1560] hover:bg-[#1A1560] hover:text-white transition-all shadow-sm"
                                >
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/1A52D75whg/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-[#1A1560]/30 flex items-center justify-center text-[#1A1560] hover:bg-[#1A1560] hover:text-white transition-all shadow-sm"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://youtube.com/shorts/kCjpceTVVGY?si=sh-hmqIlogs3Px5V"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-[#1A1560]/30 flex items-center justify-center text-[#1A1560] hover:bg-[#1A1560] hover:text-white transition-all shadow-sm"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links and Map Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">

                        {/* Company Column */}
                        <div className="flex flex-col text-left">
                            <h4 className="text-[#1A1560] font-black text-lg mb-5 border-b border-dashed border-gray-200 pb-2 md:border-none md:pb-0 inline-block w-full md:w-auto">Company</h4>
                            <div className="flex flex-col gap-4 md:gap-5">
                                <button onClick={() => scrollToSection('home')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Home</button>
                                <button onClick={() => scrollToSection('about')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">About Us</button>
                                <button onClick={() => scrollToSection('contact')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Contact Us</button>
                            </div>
                        </div>

                        {/* Services Main Container */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 text-left">
                            <div className="flex flex-col">
                                <h4 className="text-[#1A1560] font-black text-lg mb-5 border-b border-dashed border-gray-200 pb-2 md:border-none md:pb-0 inline-block w-full md:w-auto">Services</h4>
                                <div className="flex flex-col gap-4 md:gap-5">
                                    <button onClick={() => navigate('/specialty/vitiligo-surgery')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Vitiligo surgery</button>
                                    <button onClick={() => navigate('/specialty/skin-allergy')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Skin allergy</button>
                                    <button onClick={() => navigate('/specialty/fungus')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Fungus (ringworm chamet)</button>
                                    <button onClick={() => navigate('/specialty/chemical-peel')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Chemical Peel</button>
                                    <button onClick={() => navigate('/specialty/prp-gfc')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">PRP/GFC/QR678</button>
                                    <button onClick={() => navigate('/specialty/hydrafacial')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Hydrafacial/Glow peel</button>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-4 md:gap-5 md:mt-12">
                                    <button onClick={() => navigate('/specialty/acne-care')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Acne Care</button>
                                    <button onClick={() => navigate('/specialty/hair-loss-treatment')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Hair Loss treatment</button>
                                    <button onClick={() => navigate('/specialty/scabies-mites')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Scabies & Mites</button>
                                    <button onClick={() => navigate('/specialty/co2-laser')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Co2 laser/scars treatment</button>
                                    <button onClick={() => navigate('/specialty/hair-transplant')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Hair Transplant</button>
                                    <button onClick={() => navigate('/specialty/skin-biopsy')} className="text-gray-500 hover:text-[#1A1560] font-medium text-[15px] transition-colors text-left hover:translate-x-1 duration-200">Skin Biopsy</button>
                                </div>
                            </div>
                        </div>

                        {/* Map Image Section */}
                        <div className="w-full h-full">
                            <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-2xl shadow-indigo-900/5 h-[280px] lg:h-full w-full relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3982847291847!2d80.63691357516486!3d16.510550284040684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e555381a5161%3A0x3fee29460c493cd6!2sNeelakanta%20skin%20Laser%20-%20Leader%20Hairtransplant%20Clinic!5e0!3m2!1sen!2sin!4v1738411046000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Neelakanta Skin Laser Clinic Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar Bar */}
                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
                            ©Copyright 2026 Nilakanta skin & Hair Clininc. All Rights Reserved.
                        </p>
                        <a
                            href="https://lumnori.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                        >
                            <span className="text-gray-400 text-xs md:text-sm font-medium">Built by</span>
                            <img src="/Lumnori.svg" alt="Lumnori" className="h-2 md:h-3 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
