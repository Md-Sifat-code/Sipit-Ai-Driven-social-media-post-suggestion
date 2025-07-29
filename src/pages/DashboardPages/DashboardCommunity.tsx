import { useState } from "react";
import {
  MessageCircle,
  Share,
  Camera,
  Edit,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import userImg from "../../assets/profile.png";
import feedImg from "../../assets/feeduser.png";
import officeImg from "../../assets/office.jpg";
import neuralImg from "../../assets/neural_human.png";
import { BsEmojiGrinFill, BsEmojiSunglassesFill } from "react-icons/bs";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { MdLiveTv } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const DashboardCommunity = () => {
  const [postText, setPostText] = useState("");
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();

  // Dynamic feed data
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Dianne Russell",
        avatar: feedImg,
        timeAgo: "1.5h ago",
      },
      content: {
        text: "We're proud to announce that our product is now live! 🎉",
        description:
          "It's been an exciting journey, and we couldn't have done it without the support of our amazing team and early testers. Your feedback means the world—feel free to explore and let us know your thoughts.",
        hashtags: ["#ProductLaunch", "#TechUpdate", "#Teamwork"],
        image: officeImg,
        imageAlt: "Team collaboration",
      },
      engagement: {
        likes: 50,
        comments: 210,
        shares: 15,
      },
    },
    {
      id: 2,
      author: {
        name: "Cody Fisher",
        avatar: userImg,
        timeAgo: "3h ago",
      },
      content: {
        text: "Just finished an amazing brainstorming session! 💡",
        description:
          "Our team came up with some incredible ideas for the next quarter. Innovation happens when great minds come together. Excited to see these concepts come to life!",
        hashtags: ["#Innovation", "#Teamwork", "#Ideas"],
        image: officeImg,
        imageAlt: "Brainstorming session",
      },
      engagement: {
        likes: 87,
        comments: 156,
        shares: 23,
      },
    },
    {
      id: 3,
      author: {
        name: "Sarah Wilson",
        avatar: feedImg,
        timeAgo: "5h ago",
      },
      content: {
        text: "Another successful client meeting in the books! 📈",
        description:
          "Today's presentation went exceptionally well. The client loved our new approach and we're moving forward with the project. These moments remind me why I love what I do.",
        hashtags: ["#Success", "#ClientWork", "#Growth"],
        image: officeImg,
        imageAlt: "Client meeting success",
      },
      engagement: {
        likes: 124,
        comments: 89,
        shares: 31,
      },
    },
    {
      id: 4,
      author: {
        name: "Alex Morgan",
        avatar: userImg,
        timeAgo: "8h ago",
      },
      content: {
        text: "Learning never stops in this industry! 📚",
        description:
          "Just completed an advanced course on AI and machine learning. The future is incredibly exciting, and I can't wait to apply these new skills to our upcoming projects.",
        hashtags: ["#Learning", "#AI", "#SkillDevelopment"],
        image: officeImg,
        imageAlt: "Learning and development",
      },
      engagement: {
        likes: 203,
        comments: 67,
        shares: 45,
      },
    },
  ];

  return (
    <div className="text-white min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2 mb-6 sm:mb-8 lg:mb-10 cursor-pointer pt-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-lg sm:text-base" />
          <p className="text-base sm:text-lg font-medium">Community Feed</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 h-[calc(100vh-120px)] xl:h-[calc(100vh-140px)]">
          {/* Main Feed - Full width on small devices, 2/3 width on XL */}
          <div className="flex-1 overflow-y-auto scrollbar-thin pr-2">
            <div className="space-y-4 sm:space-y-6 pb-6">
              {/* User Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <img
                  src={userImg}
                  alt="Cody Fisher"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full"
                />
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-sm sm:text-base">
                    Cody Fisher
                  </span>
                  <span className="text-teal-400 text-xs sm:text-sm sm:ml-2">
                    ( 3 credits remain )
                  </span>
                </div>
              </div>

              {/* Post Creation */}
              <div className="bg-[#232323] rounded-2xl p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <input
                    type="text"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    placeholder="What is in your mind today?"
                    className="flex-1 text-white placeholder-[#A4A4A4] p-3 rounded-xl resize-none border-none outline-none text-sm sm:text-base bg-transparent"
                  />
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="cursor-pointer flex items-center justify-center gap-2 bg-[#323232] hover:bg-gray-600 px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg transition-colors text-sm sm:text-base">
                      <span className="hidden sm:inline">Ask SiPT</span>
                      <span className="sm:hidden">SiPT</span>
                      <FaWandMagicSparkles className="w-4 h-4 text-teal-400" />
                    </button>
                    <button className="cursor-pointer bg-gradient-to-r from-[#3AADB2] to-[#0D777C] hover:bg-teal-600 px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg font-medium transition-colors text-sm sm:text-base">
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="flex items-center cursor-pointer gap-2 bg-[#323232] p-3 rounded-2xl text-gray-400 hover:text-teal-400 transition-colors text-sm sm:text-base">
                  <span>Add Photos</span>
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Posts */}
              {feedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#232323] rounded-2xl p-4 sm:p-6"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-[#373737]">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <h3 className="font-semibold text-sm sm:text-base">
                        {post.author.name}
                      </h3>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {post.author.timeAgo}
                      </span>
                    </div>
                  </div>

                  <div className="py-3 sm:py-4">
                    <p className="mb-2 text-sm sm:text-base">
                      {post.content.text}
                    </p>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                      {post.content.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.content.hashtags.map((hashtag, index) => (
                        <span
                          key={index}
                          className="text-teal-400 text-xs sm:text-sm"
                        >
                          {hashtag}
                        </span>
                      ))}
                    </div>

                    <img
                      src={post.content.image}
                      alt={post.content.imageAlt}
                      className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-3 sm:gap-6">
                      <button className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-red-400 transition-colors">
                        <div className="flex items-center z-30">
                          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                          <BsEmojiGrinFill className="w-4 h-4 sm:w-5 sm:h-5 -z-10 -ml-1 text-yellow-400" />
                          <BsEmojiSunglassesFill className="w-4 h-4 sm:w-5 sm:h-5 -z-20 -ml-1 text-yellow-400" />
                        </div>
                        <span className="text-sm sm:text-base">
                          {post.engagement.likes}
                        </span>
                      </button>
                      <button className="cursor-pointer flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">
                          {post.engagement.comments}
                        </span>
                      </button>
                      <button className="cursor-pointer flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <Share className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="hidden sm:inline text-sm sm:text-base">
                          Share
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-3 bg-[#232323] p-2 rounded-2xl border border-[#414141]">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write comment here..."
                        className="flex-1 text-white placeholder-gray-200 p-3 rounded-lg resize-none h-12 border-none outline-none text-sm sm:text-base bg-transparent"
                      />
                      <button className="cursor-pointer bg-gradient-to-r from-[#3AADB2] to-[#0D777C] hover:bg-teal-600 px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base self-end sm:self-auto">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Sidebar - Hidden on small devices, visible only on XL and above */}
          <div className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-4 space-y-4 sm:space-y-6">
              {/* Profile Card */}
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
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCommunity;
