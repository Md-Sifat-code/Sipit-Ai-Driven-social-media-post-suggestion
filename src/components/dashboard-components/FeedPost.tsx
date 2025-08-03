import { MessageCircle, Share } from "lucide-react";
import { BsEmojiGrinFill, BsEmojiSunglassesFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import type { FeedPostProps } from "../../pages/DashboardPages/DashboardCommunity";

const FeedPost: React.FC<FeedPostProps> = ({post, commentText, setCommentText}) => {
  return (
    <div key={post.id} className="bg-[#232323] rounded-2xl p-4 sm:p-6">
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
        <p className="mb-2 text-sm sm:text-base">{post.content.text}</p>
        <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
          {post.content.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.content.hashtags.map((hashtag, index) => (
            <span key={index} className="text-teal-400 text-xs sm:text-sm">
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
            <div className="flex items-center z-20">
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
            <span className="hidden sm:inline text-sm sm:text-base">Share</span>
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
  );
};

export default FeedPost;
