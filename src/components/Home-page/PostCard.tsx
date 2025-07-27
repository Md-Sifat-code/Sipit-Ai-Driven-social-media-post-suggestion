import React from "react";

interface Post {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  tag: string;
  tagColor: string;
}

const SocialPostsMarquee: React.FC = () => {
  const posts: Post[] = [
    {
      id: "1",
      author: "Dianne Russell",
      avatar: "👩‍🦱",
      timeAgo: "3h ago",
      content: '"Yo we got some sick offers bruh..."',
      tag: "Professional",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      id: "2",
      author: "Dianne Russell",
      avatar: "👩‍🦱",
      timeAgo: "3h ago",
      content: '"Yo we got some sick offers bruh..."',
      tag: "Professional",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      id: "3",
      author: "Dianne Russell",
      avatar: "👩‍🦱",
      timeAgo: "3h ago",
      content: '"Yo we got some sick offers bruh..."',
      tag: "Professional",
      tagColor: "bg-green-100 text-green-600",
    },
    {
      id: "4",
      author: "Dianne Russell",
      avatar: "👩‍🦱",
      timeAgo: "3h ago",
      content: '"Yo we got some sick offers bruh..."',
      tag: "Professional",
      tagColor: "bg-green-100 text-green-600",
    },
  ];

  const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="flex-none  w-96 bg-gray-200 rounded-2xl p-5 mx-3 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex  items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
            <img
              src="../src/assets/profile.png"
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              {post.author}
            </h3>
          </div>
        </div>
        <span className="text-gray-500 text-sm">{post.timeAgo}</span>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          {post.content}
        </p>
      </div>

      {/* Tags */}
      <div className="flex items-center space-x-3 mb-6">
         <img className="h-8 sm:8 md:h-10 lg:h-10" src="../src/assets/logo.svg" alt="" />
        <div className="border-2 border-teal-600 text-teal-600 px-4 py-1 rounded-full text-sm font-medium">
          {post.tag}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="border-t border-gray-300 pt-4">
        <p className="text-gray-800 text-base leading-relaxed">
          "We're currently running limited-time deals - DM us to learn more."
        </p>
      </div>
    </div>
  );

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 lg:px-50 py-8">
      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex animate-marquee hover:pause-marquee">
          {/* First set of posts */}
          {posts.map((post) => (
            <PostCard key={`first-${post.id}`} post={post} />
          ))}
          {/* Duplicate set for seamless loop */}
          {posts.map((post) => (
            <PostCard key={`second-${post.id}`} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialPostsMarquee;
