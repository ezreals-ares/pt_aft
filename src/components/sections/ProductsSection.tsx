import { Product } from "@prisma/client";
import ProductCard from "@/components/ui/ProductCard";

interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="produk" className="bg-slate-900 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

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
            className="flex-shrink-0 inline-flex items-center gap-2 border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300"
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
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
