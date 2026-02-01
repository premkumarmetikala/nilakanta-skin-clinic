import Header from '../components/Header'
import Specialities from '../components/Specialities'
import AboutUs from '../components/AboutUs'
import SocialFollow from '../components/SocialFollow'
import BookingContact from '../components/BookingContact'
import Footer from '../components/Footer'
import '../App.css'

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-[#291593] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[450px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center h-full text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                  Nilakanta skin laser & leader Hair transplant
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-indigo-200 mb-6 leading-tight tracking-tight">
                  నీలకంఠ స్కిన్ లేజర్ & లీడర్ హెయిర్ ట్రాన్స్ప్లాంట్
                </h2>

                {/* Doctor Details Section */}
                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden flex-shrink-0">
                    <img
                      src="/doctor.png"
                      alt="Dr. Neelakanta Babu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-black text-white mb-0.5">Dr. Neelakanta Babu</h3>
                    <div className="space-y-0.5">
                      <p className="text-indigo-200 font-bold text-[10px] uppercase tracking-wide">M.B.B.S. M.D(D.V.L)</p>
                      <p className="text-white/80 text-xs font-medium leading-tight whitespace-nowrap">Dermatologist & Hair transplant specialist</p>
                      <p className="text-white/80 text-xs font-medium leading-tight whitespace-nowrap">Cosmetologist & Laser specialist</p>
                      <p className="text-indigo-300 font-bold text-[9px] uppercase tracking-widest mt-1">17 years experience overall</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#291593] px-6 py-3 rounded-lg font-black text-sm shadow-xl shadow-black/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book Appointment
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
                      <p className="text-white text-xs font-bold">World-Class Dermatological Care</p>
                      <p className="text-indigo-200 text-[8px] uppercase font-bold tracking-widest">Equipped with latest technology</p>
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
