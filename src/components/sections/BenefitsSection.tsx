export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Unmatched Benefits for Your<br className="hidden md:block" /> Peace of Mind
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Kami tidak hanya menjual mesin — kami menghadirkan ketenangan pikiran jangka panjang untuk operasional bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white border border-slate-200 hover:border-blue-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
              <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lifetime Warranty</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Setiap unit yang kami pasang dilindungi garansi seumur hidup. Anda tidak perlu khawatir soal biaya perbaikan jangka panjang — kami tanggung.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast &amp; Reliable</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Instalasi profesional selesai dalam 7 hari kerja. Tim teknisi bersertifikat kami siap beroperasi 24/7 untuk memastikan downtime nol.
            </p>
          </div>

          <div className="group bg-white border border-slate-200 hover:border-blue-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
              <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Guaranteed</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Semua produk menggunakan komponen berstandar internasional (ISO &amp; SNI). Setiap unit melewati QC ketat sebelum dikirim ke lokasi Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
