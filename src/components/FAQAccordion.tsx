"use client";

import type React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How do I use SiPT?",
    answer:
      "It's super simple. Paste your social media post (or draft caption), choose the tone you want—like Professional, Savage, or Friendly—and hit generate. SiPT rewrites your post instantly to match that vibe. You can keep editing until it feels just right.",
  },
  {
    id: "2",
    question: "Is my data safe? Do you save what I write?",
    answer:
      "Your privacy is our top priority. We use industry-standard encryption to protect your data, and we never store your personal content permanently. All posts are processed securely and deleted after processing.",
  },
  {
    id: "3",
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 10 post rewrites per month, access to 3 basic tones (Professional, Casual, Friendly), and standard processing speed. Perfect for trying out SiPT and light usage.",
  },
  {
    id: "4",
    question: "How does the ad-based plan work?",
    answer:
      "Our ad-supported plan gives you unlimited rewrites in exchange for viewing occasional ads between generations. No subscription required - just watch a short ad and continue creating amazing content.",
  },
  {
    id: "5",
    question: "What do I get with Premium?",
    answer:
      "Premium unlocks unlimited rewrites, access to all 12+ tone options (including Savage, Witty, Corporate, and more), priority processing, batch processing for multiple posts, and an ad-free experience.",
  },
  {
    id: "6",
    question: "What kind of posts is SiPT made for?",
    answer:
      "SiPT works great for all social media platforms - Twitter, LinkedIn, Instagram, Facebook, and more. Whether you're writing professional updates, casual posts, marketing copy, or personal content, SiPT adapts to your needs.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"]));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isOpen = (id: string) => openItems.has(id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden transition-all duration-200 hover:shadow-md ${
                isOpen(item.id)
                  ? "rounded-xl border border-[#EBEEF2] shadow-sm"
                  : "bg-white rounded-lg shadow-sm border border-gray-200"
              }`}
              style={
                isOpen(item.id)
                  ? {
                      background:
                        "radial-gradient(140.68% 91% at 100% 100%, rgba(23, 140, 145, 0.64) 0%, rgba(252, 253, 253, 0.00) 100%), #FCFDFD",
                    }
                  : {}
              }
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between  transition-colors duration-200 hover:bg-gray-50"
                aria-expanded={isOpen(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isOpen(item.id) ? (
                    <Minus className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-[rgba(96,199,204,0.2)] via-[rgba(96,199,204,0.4)] to-[rgba(96,199,204,0.2)]  border border-[#EBEEF2] rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Ready to Sound Smarter, Funnier, or
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Just Less Cringe?
              </h2>
            </div>
            <div className="flex-shrink-0">
              <button className=" [background:linear-gradient(270deg,#0D777C_0.23%,#3AADB2_99.77%)] text-white hover:[background:linear-gradient(270deg,#0C6C70_0.23%,#349CA1_99.77%)] focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Try it now - it's free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <FAQAccordion />;
}
