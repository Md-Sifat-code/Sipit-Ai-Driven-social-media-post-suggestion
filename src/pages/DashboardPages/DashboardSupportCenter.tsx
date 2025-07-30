import supportBackground from "../../assets/supportbanner.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import chat from "../../assets/chat.png";
import target from "../../assets/archery.png";
import privacy from "../../assets/padlock.png";
import user from "../../assets/user.png";
import mailbox from "../../assets/mailbox.png";
import money from "../../assets/flying-money.png";

const DashboardSupportCenter = () => {
  const navigate = useNavigate();
  const supportCategories = [
    {
      img: chat,
      title: "How SiPTit Works",
      description:
        "Understand how to rewrite your posts using tone selections like Savage, Sad, or Professional.",
      link: "Explore articles",
    },
    {
      img: target,
      title: "Tone Tips & Results",
      description:
        "Why your tone may feel off and how to get a rewrite that sounds just right.",
      link: "Explore articles",
    },
    {
      img: privacy,
      title: "Privacy & Data",
      description:
        "We don't store what you paste. Learn how SiPT protects your content and your account.",
      link: "Explore articles",
    },
    {
      img: user,
      title: "Account & Subscription",
      description:
        "Manage your profile, subscription, billing, and cancellation.",
      link: "Explore articles",
    },
    {
      img: money,
      title: "Refund Policy",
      description:
        "Not your vibe? Learn how to request a refund within 7 days.",
      link: "Explore articles",
    },
    {
      img: mailbox,
      title: "Contact Us",
      description: "Still need help? Reach out to our human support.",
      link: "Submit a ticket",
    },
  ];

  return (
    <div className="text-white min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 mb-10 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          <p className="text-lg font-medium">Support Centre</p>
        </div>

        {/* Decorative Elements */}
        <div className="overflow-hidden w-full h-[130px] lg:h-full rounded-3xl">
          <img
            src={supportBackground}
            alt="Support Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Support Categories Grid */}
        <div className=" mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {supportCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#232323] border border-[#414141] rounded-2xl p-6 hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="">
                      <img className="w-7 h-7" src={category.img} alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-lg font-semibold text-white ">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <button className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors underline">
                    {category.link}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupportCenter;
