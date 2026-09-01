import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div className="group bg-slate-800 border border-slate-700 hover:border-blue-500/50 rounded-3xl p-7 shadow-lg hover:-translate-y-1.5 hover:shadow-blue-900/30 hover:shadow-2xl transition-all duration-300 flex flex-col gap-4">
      {product.imageUrl ? (
        <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.title}
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
        {product.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">{product.description}</p>

      <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-700">
        <a
          href="#contact"
          id={`cta-product-${product.id}`}
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
  );
}
