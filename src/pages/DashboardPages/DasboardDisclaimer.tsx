import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const disclaimerItems: AccordionItem[] = [
  {
    id: "general",
    title: "General Disclaimer",
    content:
      "SiPTit.com is an AI-powered platform designed to help users rewrite content in different tones for entertainment, communication clarity, and personal expression. It is not a substitute for legal, medical, professional, or psychological advice. Use your best judgment when using rewritten content in real-life situations.",
  },
  {
    id: "tone",
    title: "Tone Generation",
    content:
      "Our AI tone generation feature uses advanced algorithms to modify the style and tone of your content. Results may vary based on input quality and complexity. We recommend reviewing all generated content before use.",
  },
  {
    id: "privacy",
    title: "Privacy & Data Use",
    content:
      "We take your privacy seriously. Your content is processed securely and we do not store personal information longer than necessary. Please review our full privacy policy for detailed information about data handling.",
  },
  {
    id: "responsibility",
    title: "Content Responsibility",
    content:
      "Users are solely responsible for the content they input and how they use the generated output. SiPTit.com does not endorse or take responsibility for user-generated content or its applications.",
  },
  {
    id: "misuse",
    title: "Content Misuse Warning",
    content:
      "This platform should not be used to create harmful, misleading, or inappropriate content. Users must comply with applicable laws and regulations when using our services.",
  },
  {
    id: "changes",
    title: "Changes to Disclaimer",
    content:
      "We reserve the right to update this disclaimer at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of updated terms.",
  },
];

const DasboardDisclaimer = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["general"])
  );
  const navigate = useNavigate();

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className=" text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          <p className="text-lg font-medium">Disclaimer</p>
        </div>
        <div className="space-y-4">
          {disclaimerItems.map((item) => {
            const isExpanded = expandedItems.has(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? "bg-radial-active border-teal-500"
                    : "bg-[#232323] border-gray-700 hover:border-gray-600"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="cursor-pointer w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {isExpanded ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white/90 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DasboardDisclaimer;
