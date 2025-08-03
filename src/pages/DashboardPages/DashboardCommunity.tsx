import { useState } from "react";
import { Camera } from "lucide-react";
import userImg from "../../assets/profile.png";
import feedImg from "../../assets/feeduser.png";
import officeImg from "../../assets/office.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import ProfileCard from "../../components/dashboard-components/ProfileCard";
import FeedPost from "../../components/dashboard-components/FeedPost";

// Type definitions
export interface Author {
  name: string;
  avatar: string;
  timeAgo: string;
}

export interface Content {
  text: string;
  description: string;
  hashtags: string[];
  image: string;
  imageAlt: string;
}

export interface Engagement {
  likes: number;
  comments: number;
  shares: number;
}

export interface Post {
  id: number;
  author: Author;
  content: Content;
  engagement: Engagement;
}

export interface FeedPostProps {
  post: Post;
  commentText: string;
  setCommentText: (value: string) => void;
}

const DashboardCommunity = () => {
  const [postText, setPostText] = useState("");
  const [commentText, setCommentText] = useState("");
  const navigate = useNavigate();

  // Dynamic feed data
  const feedPosts: Post[] = [
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
    <div className="text-white min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
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
                <FeedPost
                  key={post.id}
                  post={post}
                  commentText={commentText}
                  setCommentText={setCommentText}
                />
              ))}
            </div>
          </div>

          {/* Profile Sidebar - Hidden on small devices, visible only on XL and above */}
          <div className="hidden xl:block w-80 flex-shrink-0 z-10">
            <div className="sticky top-4 space-y-4 sm:space-y-6">
              {/* Profile Card */}
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCommunity;
