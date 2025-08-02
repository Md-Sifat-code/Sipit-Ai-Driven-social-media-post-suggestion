import type React from "react";
import Star1 from '../assets/Star1.svg';
import WhySipt from '../assets/WhySipt.svg';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="flex items-start gap-3 mb-6">
    <img src={Star1} alt="" />
    <div>
      <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SiPTLanding: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Tone-smart AI with a human touch",
      description:
        "We shape your message, not erase your voice. Think of it as personality polish.",
    },
    {
      title: "You're in charge of your data",
      description:
        "Nothing gets stored. Nothing leaves with us. We process and forget-like a loyal therapist.",
    },
    {
      title: "Fun meets functional for creators and lurkers alike",
      description:
        "SiPT is made for everyone trying to post better—whether you're out to impress, confess, or just express.",
    },
  ];

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why SiPT? Who We Are?
          </h1>
          <p
            style={{
              backgroundImage:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-xl sm:text-2xl lg:text-2xl text-teal-600 font-medium max-w-4xl mx-auto leading-relaxed"
          >
            A brutally honest AI with a heart-built by humans
            <br className="hidden sm:block" />
            who know words can hit harder than actions.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                SiPT isn't just another AI-it's your behind-the-scenes tone
                coach, built with humor, empathy, and privacy at its core. We
                don't store your drafts or judge your vibes. Whether you're
                firing off a spicy take, cleaning up your business pitch, or
                crafting a sadbot caption, SiPT helps you sound exactly how you
                mean-without leaks or cringe.
              </p>

              {/* Features List */}
              <div className="mb-8">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <button
                style={{
                  background:
                    "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Try For Free
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img src={WhySipt} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiPTLanding;
