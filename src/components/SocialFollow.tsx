import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
    {
        platform: "YouTube",
        handle: "@leaderhairtransplantneelakanta",
        url: "https://youtube.com/shorts/kCjpceTVVGY?si=sh-hmqIlogs3Px5V",
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
    {
        platform: "Instagram",
        handle: "@drneelakantadermatologist",
        url: "https://www.instagram.com/drneelakantadermatologist?igsh=MTFsaXgzdWM4M3czbA%3D%3D&utm_source=qr",
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="instagrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
                        <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
                        <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path fill="url(#instagrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zM18.406 4.162a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
        )
    },
    {
        platform: "Facebook",
        handle: "@neelakanta.choudary",
        url: "https://www.facebook.com/share/1A52D75whg/?mibextid=wwXIfr",
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    }
];

const SocialFollow = () => {
    return (
        <section className="w-full bg-[#EBF5FF] py-16 px-6 lg:px-8 font-manrope">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1560] text-center mb-12">
                    Follow Us on
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {socialLinks.map((social, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-start relative overflow-hidden"
                        >
                            <div className="mb-6">
                                {social.icon}
                            </div>
                            <h3 className="text-[#1A1560] font-bold text-base md:text-lg mb-10 line-clamp-1 w-full">
                                {social.handle}
                            </h3>
                            <div className="mt-auto w-full flex justify-end">
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    px-6 py-2.5 rounded-full flex items-center gap-2.5 font-bold text-xs transition-all duration-300
                    border border-[#1A1560] text-[#1A1560]
                    group-hover:bg-[#1A1560] group-hover:text-white
                  `}
                                >
                                    View Channel
                                    <div className={`
                    rounded-full p-1.5 transition-all duration-300 ease-out
                    group-hover:rotate-45 bg-[#1A1560] text-white
                    group-hover:bg-white group-hover:text-[#1A1560]
                  `}>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFollow;
