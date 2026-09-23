export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-extrabold text-white tracking-tight text-lg">
                PT <span className="text-blue-500">AFT</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Spesialis cold storage &amp; mesin pendingin industri. Melayani seluruh Indonesia sejak 2010 dengan standar kualitas internasional.
            </p>
            <div className="flex gap-3 mt-2">
              {["#produk", "#benefits", "#how-it-works", "#faq"].map((href, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-bold text-sm mb-1">Navigasi</p>
            <a href="#produk" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Katalog Produk</a>
            <a href="#benefits" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Keunggulan</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Cara Kerja</a>
            <a href="#testimonials" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Testimoni</a>
            <a href="#faq" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">FAQ</a>
          </div>

          {/* Contact Info */}
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
  );
}
