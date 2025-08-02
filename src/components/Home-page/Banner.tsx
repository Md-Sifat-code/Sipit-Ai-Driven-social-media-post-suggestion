import { useState } from "react";

const Banner: React.FC = () => {
  const [activeMode, setActiveMode] = useState("Pitch Polisher");
  const [postContent, setPostContent] = useState("");

  const modes = [
    "Roast Mode",
    "Brutal Truth",
    "Pitch Polisher",
    "Petty Mode",
    "Drama Queen",
    "Too Real",
    "Nic",
  ];

  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
  };

  const handleTryForFree = () => {
    console.log("Try for free clicked with content:", postContent);
  };

  return (
    <div
      className="relative   flex items-center justify-center border border-white overflow-hidden"
      style={{ borderRadius: "0 0 80px 80px" }}
    >
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="../src/assets/Sipt.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 18.86%, rgba(212, 241, 243, 0.69) 100%)",
          borderRadius: "0 0 80px 80px",
        }}
      ></div>

      {/* ✅ Foreground Content */}
      <div className="relative z-20 w-full ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Your Social Post Gut Check
            </h1>

            <div className="mb-8 relative inline-block">
              <h2
                className="text-4xl min-w-max sm:text-5xl lg:text-6xl font-bold inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Made Easy With SiPT
              </h2>
              <img
                className="absolute right-0  w-40 sm:w-44 md:w-48 lg:w-56 xl:w-64 ml-2"
                src="../src/assets/line.svg"
                alt="decorative line"
              />
            </div>

            {/* Description */}
            <p className="text-lg pt-2 sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              Write your social posts in the tone that actually works.
            </p>

            {/* Mode Selection with Infinite Loop Marquee */}
            <div className="mb-8 overflow-hidden">
              <div className="relative">
                {/* First Marquee Container */}
                <div className="animate-marquee whitespace-nowrap inline-block">
                  {modes.map((mode) => (
                    <button
                      key={`first-${mode}`}
                      onClick={() => handleModeChange(mode)}
                      className="inline-block mx-2 px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200"
                      style={
                        activeMode === mode
                          ? {
                              borderRadius: "8px",
                              border: "0.8px solid #178C91",
                              background: "rgba(230, 239, 239, 0.5)",
                            }
                          : {
                              borderRadius: "8px",
                              background: "#E6F0F3",
                            }
                      }
                    >
                      {mode === "Pitch Polisher" ? (
                        <span className="inline-flex items-center">
                          {mode}
                          <img src="../src/assets/Frame.svg" alt="" />
                        </span>
                      ) : (
                        mode
                      )}
                    </button>
                  ))}
                </div>

                {/* Second Marquee Container (duplicate) */}
                <div className="animate-marquee2 whitespace-nowrap inline-block absolute top-0">
                  {modes.map((mode) => (
                    <button
                      key={`second-${mode}`}
                      onClick={() => handleModeChange(mode)}
                      className="inline-block mx-2 px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200"
                      style={
                        activeMode === mode
                          ? {
                              borderRadius: "8px",
                              border: "0.8px solid #178C91",
                              background: "rgba(230, 239, 239, 0.5)",
                            }
                          : {
                              borderRadius: "8px",
                              background: "#E6F0F3",
                            }
                      }
                    >
                      {mode === "Pitch Polisher" ? (
                        <span className="inline-flex items-center">
                          {mode}
                          <img src="../src/assets/Frame.svg" alt="" />
                        </span>
                      ) : (
                        mode
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Input Area */}
            <div className="max-w-4xl mx-auto">
              <div
                className="p-1"
                style={{
                  borderRadius: "21px",
                  border: "6px solid #178C91",
                  background: "rgba(255, 255, 255, 0.81)",
                  boxShadow: "0 6px 10px 0 rgba(21, 64, 66, 0.10)",
                }}
              >
                <div className="relative">
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Paste your tweet, caption, or idea here..."
                    className="w-full h-20 sm:h-30 p-4 sm:p-6 rounded-xl border-none resize-none focus:outline-none text-gray-700 placeholder-gray-400 text-base sm:text-lg"
                  />

                  {/* Bottom toolbar */}
                  <div className="flex items-center justify-between p-4 sm:p-6 pt-0">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <img src="../src/assets/file.svg" alt="" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <img src="../src/assets/gellary.svg" alt="" />
                      </button>
                    </div>

                    <button
                      style={{
                        background:
                          "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                      }}
                      onClick={handleTryForFree}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                    >
                      <span>Try For Free</span>
                      <img src="../src/assets/Free.svg" alt="" />
                    </button>
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

export default Banner;
