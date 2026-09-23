import { Testimonial } from "@prisma/client";
import { fallbackTestimonials } from "@/lib/fallbackData";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const data = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Dipercaya oleh Pemimpin Industri
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Bukan sekadar kata-kata kami — inilah pengalaman nyata dari klien yang sudah mempercayai PT AFT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-slate-500 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
