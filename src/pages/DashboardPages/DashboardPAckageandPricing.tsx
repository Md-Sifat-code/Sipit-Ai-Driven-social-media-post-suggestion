
import { HiBadgeCheck } from "react-icons/hi";
import { BiBadgeCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const DashboardPAckageandPricing = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 cursor-pointer" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <p className="text-lg font-medium">Package & Pricing</p>
        </div>
        {/* Header */}
        <div className="text-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pick Your Path to Perfect Posts
          </h1>
          <p className=" text-xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#3AADB2] via-[#178C91] to-[#0D777C] bg-clip-text text-transparent">
            From Free to Fierce - Choose How Honest You Want Your AI to Be.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-[#232323] border border-gray-700 rounded-2xl p-6 relative">
            <div className="mb-6 flex flex-col items-start justify-start gap-2">
              <div className="text-white text-sm mb-2 bg-[#323232] px-3 py-1 rounded-2xl">Free</div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#3AADB2] via-[#178C91] to-[#0D777C] bg-clip-text text-transparent">
                Just Vibe It
              </h2>
              <p className="text-white text-sm">
                Test the tone waters with daily limits
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Up to 10 generations/day</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Limited tone styles choices</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Access to public feed</span>
              </div>
              <div className="flex items-center gap-3">
                <BiBadgeCheck className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  Share post in community feed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BiBadgeCheck className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  React and reply public posts
                </span>
              </div>
            </div>

            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-medium">
              Currently Using
            </button>
          </div>

          {/* Boosted Plan */}
          <div className="bg-[#232323] border border-gray-700 rounded-2xl p-6 relative">
            <div className="mb-6 flex flex-col items-start justify-start gap-2">
              <div className="text-white text-sm mb-2 bg-[#323232] px-3 py-1 rounded-2xl">Boosted</div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#3AADB2] via-[#178C91] to-[#0D777C] bg-clip-text text-transparent">
                Fee With Ads
              </h2>
              <p className="text-white text-sm">
                Out of credits? Watch ads & unlock credits
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  Watch video ad & unlock 1 credit
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">
                  All features included from free plan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">All Basic features included</span>
              </div>
              <div className="flex items-center gap-3">
                <BiBadgeCheck className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  Share post in community feed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BiBadgeCheck className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  React and reply public posts
                </span>
              </div>
            </div>

            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-medium">
              Watch Ads
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#232323] border border-gray-700 rounded-2xl p-6 relative overflow-hidden">
            {/* Full Potential Banner */}
            <div className="absolute top-1 -right-3 text-center bg-teal-500 text-white px-8 py-2 text-sm font-medium transform rotate-45 translate-x-6 translate-y-4">
              Full Potential
            </div>

            <div className="mb-6 flex flex-col items-start justify-start gap-2">
              <div className="text-white text-sm mb-2 bg-[#323232] px-3 py-1 rounded-2xl">Premium</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#3AADB2] via-[#178C91] to-[#0D777C] bg-clip-text text-transparent">$15.00</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-white text-sm">
                No limits. Unlock and enjoy all potential of AI
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Up to 10 generations/day</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Limited tone styles choices</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Access to public feed</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">Share post in community feed</span>
              </div>
              <div className="flex items-center gap-3">
                <HiBadgeCheck className="w-5 h-5 text-teal-400" />
                <span className="text-sm">React and reply public posts</span>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-[#3AADB2] to-[#0D777C] hover:bg-teal-600 text-white py-3 rounded-xl font-medium transition-colors"
              onClick={() => navigate('/dashboard/package/premium-checkout')}
            >
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPAckageandPricing;
