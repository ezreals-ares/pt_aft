export default function HeroSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Trusted Industrial Cooling Partner Since 2010
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Superior <span className="text-blue-600">Industrial</span> Cooling Solutions
            </h1>

            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Solusi cold storage &amp; mesin pendingin industri terpercaya untuk penyimpanan daging, sayuran, dan logistik berskala besar — dengan teknologi terkini dan garansi seumur hidup.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#contact"
                id="cta-hero-estimate"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-200"
              >
                Get a Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#produk"
                id="cta-hero-catalog"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-200"
              >
                Lihat Katalog
              </a>
            </div>

            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-slate-100">
              <div>
                <p className="text-2xl font-extrabold text-slate-900">200+</p>
                <p className="text-xs text-slate-500 font-medium">Proyek Selesai</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">4.9★</p>
                <p className="text-xs text-slate-500 font-medium">Rating Klien</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-medium">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Bento Box */}
          <div className="relative h-[480px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 rounded-3xl"></div>
            <div className="absolute top-8 right-8 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-8 left-8 w-36 h-36 bg-indigo-200/40 rounded-full blur-3xl"></div>

            <div className="relative z-10 bg-slate-900 rounded-3xl p-8 w-64 shadow-2xl flex flex-col gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-2">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg leading-snug">Industrial Cold Room</p>
              <p className="text-slate-400 text-sm">Kapasitas 5 – 500 Ton</p>
              <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-slate-500 text-xs">Efisiensi Energi: 80%</p>
            </div>

            <div className="absolute top-8 left-4 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 w-52 border border-slate-100">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Protection</p>
                <p className="text-slate-900 font-bold text-sm leading-tight">Lifetime Warranty</p>
              </div>
            </div>

            <div className="absolute bottom-16 right-2 z-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 w-44 border border-slate-100">
              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Happy Clients</p>
                <p className="text-slate-900 font-bold text-sm">4.9★ Rating</p>
              </div>
            </div>

            <div className="absolute top-28 right-0 z-20 bg-blue-600 rounded-2xl shadow-xl p-4 flex items-center gap-3 w-44 border border-blue-500">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">Installation</p>
                <p className="text-white font-bold text-sm">7-Day Setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
