import { TRUSTED_CLIENTS } from "@/lib/fallbackData";

export default function ClientsSection() {
  return (
    <section className="bg-slate-900 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Lebih dari 200+ perusahaan di seluruh Indonesia mempercayakan kebutuhan cold chain mereka kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TRUSTED_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500/40 rounded-2xl p-5 text-center opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 bg-blue-600/20 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-xs leading-tight">{client.name}</p>
              <p className="text-slate-500 text-xs mt-1">{client.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
