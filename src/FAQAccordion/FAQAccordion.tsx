import { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQAccordionProps = {
  items?: FAQItem[];
    className?: string
};

const defaultItems: FAQItem[] = [
  { question: "Sample question one?", answer: "Sample answer one" },
  { question: "Sample question two?", answer: "Sample answer two" },
   { question: "Sample question three?", answer: "Sample answer three" },
];
export default function FAQAccordion({
  items = defaultItems,
    className = '',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className={`mx-auto max-w-2xl divide-y divide-gray-200 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={item.question}>
            <button
              onClick={() => toggle(i)}
               aria-expanded={isOpen}
               aria-controls={`faq-answer-${i}`}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="text-base font-semibold  text-gray-900">
                {item.question}
              </span>
              <span className="ml-4 text-gray-400">{isOpen ? "-" : "⌄"}</span>
            </button>

            <div
            id={`faq-answer-${i}`}
              className={`grid  transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-sm text-gray-500">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
