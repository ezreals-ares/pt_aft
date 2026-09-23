import { MessageCircle, ShieldCheck, Zap, Headphones } from "lucide-react";

const TRUST_BADGES = [
  { label: "Konsultasi Gratis", Icon: MessageCircle },
  { label: "Lifetime Warranty", Icon: ShieldCheck },
  { label: "Instalasi 7 Hari", Icon: Zap },
  { label: "Support 24/7", Icon: Headphones },
];

export default function FinalCTASection() {
  return (
    <section className="bg-blue-600 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
          Mulai Sekarang
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Siap Upgrade Cold Storage Anda?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Hubungi kami hari ini dan dapatkan konsultasi gratis bersama tim engineer berpengalaman kami. Tanpa komitmen, tanpa biaya tersembunyi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            id="cta-final-estimate"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:scale-[0.98] text-blue-600 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
          >
            Get Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            id="cta-final-katalog"
            className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white hover:bg-blue-700 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Download Katalog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 pt-10 border-t border-blue-500">
          {TRUST_BADGES.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-sm md:text-base font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
