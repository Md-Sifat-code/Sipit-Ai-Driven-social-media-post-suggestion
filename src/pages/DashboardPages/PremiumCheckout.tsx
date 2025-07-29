import { useState } from "react";
import { ChevronDown, CreditCard } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function PremiumCheckout() {
  const [selectedPeriod, setSelectedPeriod] = useState("3 Months");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const periods = [
    { label: "1 Month", value: "1 Month", price: 15.0, total: 15.0 },
    { label: "3 Months", value: "3 Months", price: 15.0, total: 45.0 },
    { label: "6 Months", value: "6 Months", price: 15.0, total: 90.0 },
    { label: "12 Months", value: "12 Months", price: 15.0, total: 180.0 },
  ];

  const currentPeriod =
    periods.find((p) => p.value === selectedPeriod) || periods[1];

  return (
    <div className=" text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer "
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          <p className="text-lg font-medium">Subscription Checkout</p>
        </div>
        <h1 className="text-4xl font-bold mb-8">Go With Premium</h1>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full">
          {/* Payment Form */}
          <div className="bg-[#232323] border border-teal-500 rounded-2xl p-6 w-full md:w-2/3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Pay With Card</h2>
              <div className="flex items-center gap-2 text-sm  bg-[#323232] px-3 py-1 rounded-2xl">
                <span>Powered by</span>
                <span className="text-blue-500 font-semibold">stripe</span>
              </div>
            </div>

            {/* Card Information */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Card Information</h3>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="---- ---- ---- ----"
                    className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-lg pr-12"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="---"
                    className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                />
              </div>
            </div>

            {/* General Information */}
            <div>
              <h3 className="text-lg font-medium mb-4">General Information</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="bg-gray-200 text-gray-800 px-4 py-3 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#232323] border border-teal-500 rounded-2xl p-6 w-full md:w-1/3">
            <div className="mb-3 flex flex-col items-start justify-start gap-1">
              <div className="text-white text-sm mb-2 bg-[#323232] px-3 py-1 rounded-2xl">
                Premium
              </div>
              <div className="flex items-baseline gap-1 ">
                <span className="bg-gradient-to-r from-[#3AADB2] via-[#178C91] to-[#0D777C] bg-clip-text text-transparent text-4xl font-bold">
                  ${currentPeriod.price.toFixed(2)}
                </span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <p className="text-gray-300 text-sm">
                No limits. Unlock and enjoy all potential of AI
              </p>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="mb-2">
                <label className="block text-sm text-gray-400 mb-2">
                  Time Period
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-between"
                  >
                    <span>{selectedPeriod}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 bg-gray-700 border border-gray-600 rounded-lg mt-1 z-10">
                      {periods.map((period) => (
                        <button
                          key={period.value}
                          onClick={() => {
                            setSelectedPeriod(period.value);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {period.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-2">Cancel anytime</p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Monthly</span>
                  <span>${currentPeriod.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{selectedPeriod.toLowerCase()}</span>
                  <span>${currentPeriod.total.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-600 pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total Payable</span>
                    <span>${currentPeriod.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#3AADB2] to-[#0D777C] hover:bg-teal-600 text-white py-4 rounded-xl font-medium text-lg transition-colors">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
