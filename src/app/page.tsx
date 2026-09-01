import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-white font-sans antialiased">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-lg">PT <span className="text-blue-600">AFT</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-blue-600 transition-colors">Produk</a>
            <a href="#benefits" className="hover:text-blue-600 transition-colors">Keunggulan</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm shadow-blue-200"
          >
            Get a Free Estimate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* SECTION 1 — HERO (BACKGROUND TERANG) */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Teks Hero */}
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
                  href="#products"
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

            {/* RIGHT: Bento Box UI */}
            <div className="relative h-[480px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 rounded-3xl"></div>
              <div className="absolute top-8 right-8 w-48 h-48 bg-blue-200/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-36 h-36 bg-indigo-200/40 rounded-full blur-3xl"></div>

              {/* Main Card */}
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

              {/* Bento Card 1 — Warranty */}
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

              {/* Bento Card 2 — Rating */}
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

              {/* Bento Card 3 — Fast Setup */}
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

      {/* SECTION 2 — PRODUCTS (BACKGROUND DARK NAVY) */}
      <section id="products" className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">Our Product Line</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Katalog Mesin Pendingin
              </h2>
              <p className="text-slate-400 mt-4 max-w-xl text-base leading-relaxed">
                Kami menyediakan berbagai solusi pendingin industri kelas satu — dari cold room skala kecil hingga refrigerasi logistik berskala besar.
              </p>
            </div>
            <a
              href="#contact"
              id="cta-catalog-inquiry"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Request Custom Order
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {products.length === 0 ? (
            <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl text-center">
              <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium">Belum ada produk. Tambahkan data lewat Prisma Studio.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-slate-800 border border-slate-700 hover:border-blue-500/50 rounded-3xl p-7 shadow-lg hover:-translate-y-1.5 hover:shadow-blue-900/30 hover:shadow-2xl transition-all duration-300 flex flex-col gap-4"
                >
                  {item.imageUrl ? (
                    <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-700">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-44 rounded-2xl bg-slate-700/60 flex items-center justify-center border border-slate-600">
                      <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                      </svg>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400 font-bold tracking-widest uppercase">
                      Unit #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-semibold">
                      Tersedia
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-700">
                    <a
                      href="#contact"
                      id={`cta-product-${item.id}`}
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                    >
                      Minta Penawaran
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <div className="w-8 h-8 rounded-full bg-slate-700 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 — BENEFITS (BACKGROUND TERANG) */}
      <section id="benefits" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Unmatched Benefits for Your<br className="hidden md:block" /> Peace of Mind
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Kami tidak hanya menjual mesin — kami menghadirkan ketenangan pikiran jangka panjang untuk operasional bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Lifetime Warranty */}
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

            {/* Card 2 — Fast & Reliable (Dark) */}
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

            {/* Card 3 — Quality Guaranteed */}
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

          {/* Bottom CTA Banner */}
          <div className="mt-12 bg-blue-600 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
            <div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">Siap Memulai?</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Dapatkan Konsultasi Gratis Hari Ini
              </h3>
            </div>
            <a
              href="#contact"
              id="cta-benefits-consult"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-600 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg"
            >
              Hubungi Kami Sekarang
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-extrabold text-white tracking-tight text-lg">PT <span className="text-blue-500">AFT</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Spesialis cold storage &amp; mesin pendingin industri. Melayani seluruh Indonesia sejak 2010.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm mb-1">Navigasi</p>
              <a href="#products" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Katalog Produk</a>
              <a href="#benefits" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Keunggulan</a>
              <a href="#contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Kontak</a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm mb-1">Hubungi Kami</p>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +62 812-3456-7890
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ptaft.co.id
              </div>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jakarta, Indonesia
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} PT AFT. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Built with Next.js &amp; Prisma
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}