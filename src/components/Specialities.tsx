import { Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Specialities = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const specialties = [
    { title: t('skinAllergy'), image: "/skinallergy.png", slug: "skin-allergy" },
    { title: t('fungus'), image: "/fungus.jpg", slug: "fungus" },
    { title: t('scabies'), image: "/scabies.png", slug: "scabies-mites" },
    { title: t('vitiligoSurgery'), image: "/vitiligo.jpg", slug: "vitiligo-surgery" },
    { title: t('skinBiopsy'), image: "/skinbiopsy.png", slug: "skin-biopsy" },
    { title: t('acneCare'), image: "/acne.png", slug: "acne-care" },
    { title: t('chemicalPeel'), image: "/chemicalpeel.png", slug: "chemical-peel" },
    { title: t('co2Laser'), image: "/co2 laser.png", slug: "co2-laser" },
    { title: t('hydraFacial'), image: "/hydrafacial.png", slug: "hydrafacial" },
    { title: t('prpGfc'), image: "/prp.png", slug: "prp-gfc" },
    { title: t('hairTransplant'), image: "/hairtransplant.png", slug: "hair-transplant" },
    { title: t('hairLossTreatment'), image: "/hairloss.png", slug: "hair-loss-treatment" },
    { title: t('tattooRemoval'), image: "/co2 laser.png", slug: "tattoo-removal" },
  ];

  return (
    <section className="w-full bg-[#EBF5FF] py-14 px-6 lg:px-8 font-manrope overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Badge and Horizontal Line Row */}
          <div className="relative mb-5 flex items-center justify-center">
            <div className="absolute top-1/2 left-[-100%] right-[-100%] h-[1px] bg-indigo-100/60 z-0"></div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[11px] uppercase tracking-wider relative z-10">
              {t('specialities')}
            </div>
          </div>

          {/* Title on Next Line */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1560] tracking-tight text-center">
            {t('howWeCanHelp')}
          </h2>
        </div>

        {/* Grid of Specialities - Now with white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {specialties.map((spec, index) => (
            <div
              key={index}
              onClick={() => navigate(`/specialty/${spec.slug}`)}
              className="group bg-white rounded-xl p-3 flex items-center gap-4 border border-transparent hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-900/5 transition-all cursor-pointer relative shadow-sm"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-indigo-50 flex-shrink-0 relative">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 pr-8 text-left">
                <h3 className="text-[#1A1560] font-bold text-[15px] leading-tight group-hover:text-indigo-600 transition-colors">
                  {spec.title}
                </h3>
              </div>

              {/* Arrow appears on hover for all cards */}
              <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-[#1A1560] flex items-center justify-center text-white flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-900/20">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/919963234094?text=Hey%20I%20want%20to%20Book%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1560] hover:bg-[#251D80] text-white px-8 py-3.5 rounded-xl flex items-center gap-2.5 transition-all shadow-xl shadow-indigo-900/10 hover:scale-[1.02] active:scale-95"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span className="font-bold text-base">{t('bookAppointment')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
