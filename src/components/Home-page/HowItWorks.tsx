import React from "react";


const HowItWorks: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="../src/assets/how-1.svg" alt="" />
            <div className="flex items-center gap-3 pt-2 mb-4">
              <img src="../src/assets/Star1.svg" alt="" />

              <h3 className="text-xl min-w-max font-semibold text-gray-900">
                Paste your draft or write a quick thought
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Got a messy, cringey, or just plain boring idea? Drop it into SIPT
              and pick the tone you wish you could naturally write in - Savage,
              Professional, Sad, Flirty, and more.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            {/* Processing Mockup */}
            <img src="../src/assets/howit-2.svg" alt="" />
            <div className="flex items-center gap-3 pt-2 mb-4">
              <img src="../src/assets/Star1.svg" alt="" />

              <h3 className="text-xl font-semibold text-gray-900">
                Let SIPT handle the hard part
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our brutally honest (but helpful) AI rewrites your post to match
              the tone you picked - so you don't accidentally sound like a
              try-hard, a jerk, or a confused philosopher.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            {/* Output Mockup */}
            <img src="../src/assets/how-3.svg" alt="" />
            <div className="flex items-center gap-3 pt-2 mb-4">
              <img src="../src/assets/Star1.svg" alt="" />

              <h3 className="text-xl font-semibold text-gray-900">
                Get ready to share output in seconds
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Copy it. Post it on your socials. Or share it with the SIPT
              community feed for some upvotes, laughs, or savage roasts. Your
              voice, only better.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            style={{
              background:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
            }}
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Start For Free
          </button>
          <button
            style={{
              background:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
            }}
            className="text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-200 transition-colors flex items-center gap-2 border border-teal-200"
          >
            <img src="../src/assets/howicon.svg" alt="" />
            See Examples
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
