"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-blue-200 bg-blue-50/50" : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              id={`faq-toggle-${index}`}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                {faq.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-600 rotate-45" : "bg-slate-100"}`}>
                <svg className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-white" : "text-slate-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-6 pb-6">
                <div className="h-px bg-blue-100 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
