import { CiCamera } from "react-icons/ci";
import { MdLiveTv } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  Edit,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import neuralImg from "../../assets/neural_human.png";
import userImg from "../../assets/profile.png";

const ProfileCard = () => {
    return (
       <div className="bg-[#2A2A2A] border border-[#414141] rounded-2xl relative mx-auto max-w-sm xl:max-w-none">
                {/* Futuristic wireframe background */}
                <div className="h-32 sm:h-36 xl:h-40 bg-gradient-to-br from-[#0D4D4F] via-[#1A5F5F] to-[#0F3A3C] relative overflow-hidden rounded-t-2xl">
                  {/* 3D wireframe face pattern */}
                  <img
                    src={neuralImg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Profile image positioned absolute - outside overflow container */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-15"
                  style={{ top: "80px" }}
                >
                  <div className="relative">
                    <img
                      src={userImg}
                      alt="Cody Fisher"
                      className="w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 rounded-full border-4 border-[#2A2A2A] object-cover"
                    />
                    {/* Green online dot with teal color */}
                    <button className="absolute cursor-pointer bottom-1 right-1 w-6 h-6 sm:w-7 sm:h-7 text-white bg-[#00C2C7] rounded-full border-2 border-[#2A2A2A] flex items-center justify-center">
                      <CiCamera className="text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>

                {/* Profile content */}
                <div className="pt-12 sm:pt-14 xl:pt-16 px-4 sm:px-6 pb-4 sm:pb-6 relative z-10">
                  {/* Name and edit icon */}
                  <div className="text-center mb-1">
                    <div className="flex items-center justify-center gap-2">
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        Cody Fisher
                      </h2>
                      <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-[#00C2C7]" />
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      @codyfisher (Free)
                    </p>
                  </div>

                  {/* Credits section */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-white text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                      You have daily 30 credits limit
                    </p>
                    <div className="flex justify-between text-xs sm:text-sm mb-3 sm:mb-4">
                      <span className="text-gray-400">
                        Credit used:{" "}
                        <span className="text-white font-medium">1250</span>
                      </span>
                      <span className="text-gray-400">
                        Credit Remain:{" "}
                        <span className="text-white font-medium">245</span>
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <button className="cursor-pointer flex-1 bg-[#3A3A3A] hover:bg-[#4A4A4A] py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2">
                        <span>Watch Ads</span>
                        <span className="text-sm sm:text-lg">
                          <MdLiveTv />
                        </span>
                      </button>
                      <button className="cursor-pointer flex-1 bg-gradient-to-r from-[#3AADB2] to-[#0D777C] hover:bg-[#00A8AD] py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors">
                        Go Premium
                      </button>
                    </div>
                  </div>

                  {/* About section */}
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className="font-semibold text-white text-sm sm:text-base">
                        About
                      </h3>
                      <Edit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-[#00C2C7]" />
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interd
                    </p>

                    {/* Info items */}
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-300">24 July, 2025</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">
                          6391 Elgin St. Celina, Delaware 10299
                        </span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">
                          Social Media Manager at SiPT
                        </span>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 border-gray-600">
                      <p className="text-xs sm:text-sm text-gray-400">
                        Follow us:
                      </p>
                      <div className="flex gap-2 sm:gap-3">
                        <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
                        <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
                        <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
                        <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default ProfileCard;