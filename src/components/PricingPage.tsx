import type React from "react";
import verify from '../assets/Verify.svg';
import verify2 from '../assets/verify2.svg';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  title: string;
  description: string;
  price?: string;
  period?: string;
  features: Feature[];
  buttonText: string;
  buttonStyle: "secondary" | "primary";
  popular?: boolean;
}

const PricingPage: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      title: "Just Vibe It",
      description: "Test the tone waters with daily limits",
      features: [
        { text: "Up to 10 generations/day", included: true },
        { text: "Limited tone styles choices", included: true },
        { text: "Access to public feed", included: true },
        { text: "Share post in community feed", included: false },
        { text: "React and reply public posts", included: false },
      ],
      buttonText: "Try For Free",
      buttonStyle: "secondary",
    },
    {
      name: "Boosted",
      title: "Fee With Ads",
      description: "Out of credits? Watch ads & unlock credits",
      features: [
        { text: "Watch video ad & unlock 1 credit", included: true },
        { text: "All features included from free plan", included: true },
        { text: "All Basic features included", included: true },
        { text: "Share post in community feed", included: false },
        { text: "React and reply public posts", included: false },
      ],
      buttonText: "Watch Ads",
      buttonStyle: "secondary",
    },
    {
      name: "Premium",
      title: "$15.00",
      description: "No limits. Unlock and enjoy all potential of AI",
      price: "$15.00",
      period: "/month",
      features: [
        { text: "Up to 10 generations/day", included: true },
        { text: "Limited tone styles choices", included: true },
        { text: "Access to public feed", included: true },
        { text: "Share post in community feed", included: true },
        { text: "React and reply public posts", included: true },
      ],
      buttonText: "Go Premium",
      buttonStyle: "primary",
      popular: true,
    },
  ];

  const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="flex items-center gap-3 py-1">
      <div className="flex-shrink-0">
    {feature.included ? (
      <img src={verify} alt="" />
    ) : (
      <img src={verify2} alt="" />
    )}
      </div>
      <span
        className={`text-sm ${
          feature.included ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {feature.text}
      </span>
    </div>
  );

  const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
    <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      {tier.popular && (
        <div
          style={{
            background:
              "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
          }}
          className="absolute -top-0 -right-0 bg-teal-600 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-medium"
        >
          Full Potential
        </div>
      )}

      <div className="mb-6">
        <div className="text-sm text-black  font-medium mb-1 bg-[#E6F0F3] px-3 py-1 rounded-2xl max-w-max">{tier.name}</div>
        <div className="flex items-baseline gap-1 mb-2">
          {tier.name === "Premium" ? (
            <>
              <span className="text-3xl font-bold text-gray-900">
                {tier.price}
              </span>
              <span className="text-gray-500">{tier.period}</span>
            </>
          ) : (
            <h3
              style={{
                backgroundImage:
                  "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl font-bold "
            >
              {tier.title}
            </h3>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {tier.description}
        </p>
      </div>

      <div className="flex-1 space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>

      <button
        className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-colors duration-200 ${
          tier.buttonStyle === "primary"
            ? "[background:linear-gradient(270deg,#0D777C_0.23%,#3AADB2_99.77%)] text-white hover:[background:linear-gradient(270deg,#0C6C70_0.23%,#349CA1_99.77%)] focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            : "rounded-[12px] bg-gradient-to-r from-[#DADADA] to-[#FFFFFF] text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        }`}
      >
        {tier.buttonText}
      </button>
    </div>
  );

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pick Your Path to Perfect Posts
          </h1>
          <p
            style={{
              backgroundImage:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-lg sm:text-xl font-bold max-w-5xl mx-auto"
          >
            From Free to Fierce - Choose How Honest You Want Your AI to Be.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
