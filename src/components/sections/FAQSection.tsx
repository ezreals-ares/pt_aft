import { FAQ } from "@prisma/client";
import { fallbackFAQs } from "@/lib/fallbackData";
import FAQAccordion from "@/components/ui/FAQAccordion";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const data = faqs.length > 0 ? faqs : fallbackFAQs;

  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Pertanyaan Umum
              </h2>
              <p className="text-slate-500 mt-4 text-base leading-relaxed">
                Kami jawab semua pertanyaan yang sering muncul sebelum Anda memutuskan bekerja sama dengan kami.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col gap-3">
              <p className="font-semibold text-slate-900 text-sm">Tidak menemukan jawaban?</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Hubungi tim kami langsung — kami siap menjawab pertanyaan spesifik Anda dalam 1 jam.
              </p>
              <a
                href="#contact"
                id="cta-faq-contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors mt-1 w-fit"
              >
                Tanya Langsung
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2">
            <FAQAccordion faqs={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
