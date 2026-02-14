import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Specialities from '../components/Specialities'
import TreatmentSection from '../components/TreatmentSection'
import TattooSection from '../components/TattooSection'
import AboutUs from '../components/AboutUs'
import SocialFollow from '../components/SocialFollow'
import BookingContact from '../components/BookingContact'
import Footer from '../components/Footer'
import '../App.css'

import { useLanguage } from '../context/LanguageContext'
import '../App.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Helmet>
        <title>{t('clinicName')} | Best Dermatologist in Vijayawada</title>
        <meta name="description" content="Nilakanta Skin & Hair Clinic by Dr. Neelakanta Babu. Expert treatment for skin allergies, hair transplant, vitiligo surgery, and more in Vijayawada." />
        <meta property="og:title" content="Nilakanta Skin & Hair Clinic | Best Dermatologist in Vijayawada" />
        <meta property="og:description" content="Expert dermatological and hair transplant services by Dr. Neelakanta Babu in Vijayawada." />
        <meta property="og:image" content="/doctor.jpeg" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-[#291593] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[450px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center h-full text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                  {t('clinicName')}
                </h1>

                {/* Tagline */}
                <p className="text-indigo-100/80 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                  {t('tagline')}
                </p>

                {/* Doctor Details Section */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden flex-shrink-0">
                    <img
                      src="/doctor.jpeg"
                      alt="Dr. Neelakanta Babu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-black text-white mb-0.5">Dr. Neelakanta Babu</h3>
                    <div className="space-y-0.5">
                      <p className="text-indigo-200 font-bold text-[10px] uppercase tracking-wide">M.B.B.S. M.D(D.V.L)</p>
                      <p className="text-white/80 text-xs font-medium leading-tight whitespace-nowrap">{t('doctorRole')}</p>
                      <p className="text-white/80 text-xs font-medium leading-tight whitespace-nowrap">{t('doctorSubRole')}</p>
                      <p className="text-indigo-300 font-bold text-[9px] uppercase tracking-widest mt-1">{t('experience')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#291593] px-8 py-4 rounded-xl font-black text-sm shadow-xl shadow-black/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t('bookAppointment')}
                  </a>
                </div>
              </div>

              {/* Right Section: Doctor/Clinic Image */}
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/15 blur-[80px] rounded-full"></div>

                <div className="relative z-10 w-full max-w-[400px] aspect-square bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
                  <img
                    src="/a8d146ca8b4b1d737c95825397bad650a4acad3b.jpg"
                    alt="Nilakanta Skin Clinic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#291593]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl">
                      <p className="text-white text-xs font-bold">{t('worldClassCare')}</p>
                      <p className="text-indigo-200 text-[8px] uppercase font-bold tracking-widest">{t('latestTech')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialities Section */}
        <div id="specialities">
          <Specialities />
        </div>

        {/* Featured Treatment Section */}
        <TreatmentSection />

        {/* Tattoo Removal Section */}
        <TattooSection />

        {/* About Us Section */}
        <div id="about">
          <AboutUs />
        </div>

        {/* Social Follow Section */}
        <SocialFollow />

        {/* Booking & Contact Section */}
        <BookingContact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
