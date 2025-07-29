import {
  Copy,
  Plus,
  Paperclip,
  ImageIcon,
} from "lucide-react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BiSolidStar } from "react-icons/bi";

const DashboardHome = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col min-w-xs lg:min-w-3xl max-w-4xl text-white w-full h-screen">
        {/* Chat/Message Area - scrollable */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* Today Header */}
          <div className="text-center text-gray-400 text-sm">Today</div>

          {/* User Message */}
          <div className="flex flex-col items-end space-y-1 ">
            <div className="flex items-center space-x-2">
              <span className="text-[#178C91] font-medium">Pitch Polisher</span>
              <span className="text-[#178C91] "><FaWandMagicSparkles /></span>
            </div>
            <div className="bg-[#232323] rounded-lg px-4 py-3 min-w-max">
              "Yo we got some sick offers bruh, hit me up"
            </div>
            <span className="text-gray-400 text-xs">06:07 AM</span>
          </div>

          {/* Bot Response */}
          <div className="flex flex-col items-start space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2 border-b-1 border-[#373737] text-[#178C91] pb-2 w-full">
              <BiSolidStar className="text-lg text-[#178C91]"></BiSolidStar>
              <span className="font-medium w-full">
                Response (SIPT Model 3.0)
              </span>
            </div>
            <div className=" rounded-lg pr-4 py-4 max-w-2xl">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400">💡</span>
                <span>
                  "We're currently running limited-time deals — DM us to learn
                  more."
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-white">
                <BsArrowRepeat  className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <FiSend  className="w-4 h-4" />
              </button>
              <span className="text-gray-400 text-xs ml-2">06:08 AM</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - always at bottom */}
        <div className="sticky bottom-0 left-0 w-full bg-[#1c1c1c] z-10">
          {/* Mode Selection Buttons */}
          <div className="flex flex-wrap gap-2 p-5 md:pr-10">
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Roast Mode
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Brutal Truth
            </button>
            <button className="bg-[#3A3A3A] hover:bg-teal-700 hover:text-white text-[#04a6ac] px-1 md:px-3 py-1 md:py-2 rounded-2xl flex items-center space-x-1 transition-colors">
              <FaWandMagicSparkles className="w-4 h-4" />
              <span>Pitch Polisher</span>
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Petty Mode
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Too Real
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Drama Queen
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Nice Bot
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Gentle Feedback
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Meme Scanner
            </button>
            <button className="bg-[#232323] border-gray-700 text-white rounded-2xl px-1 md:px-3 py-1 md:py-2 hover:bg-gray-700 transition-colors">
              Viral Vibes
            </button>
          </div>

          {/* Input Area */}
          <div className="p-2 md:p-4 border-gray-700">
            <div className="bg-white rounded-lg border border-teal-500 p-4">
              <textarea
                placeholder="Paste your tweet, caption, or idea here..."
                className="w-full bg-transparent text-black placeholder-gray-400 resize-none border-none outline-none"
                rows={2}
              />
              <div className="flex items-end justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col justify-end items-end space-y-2">
                  <button className="bg-[#EFEFEF] border border-gray-600 text-gray-500 hover:bg-gray-600 px-3 py-2 rounded-lg flex items-center transition-colors">
                    <Plus className="w-4 h-4 mr-1" />
                    New
                  </button>
                  <button className="bg-radial-active hover:bg-teal-700 text-white px-3 py-2 rounded-lg flex items-center transition-colors">
                    <span>Write Now</span>
                    <FaWandMagicSparkles className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end of main flex-col container */}
    </div>
  );
};

export default DashboardHome;
