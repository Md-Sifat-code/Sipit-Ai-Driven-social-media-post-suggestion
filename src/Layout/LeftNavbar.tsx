import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logo from "../assets/Vector.png";
import { GiStarsStack } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";

const LeftNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [context, setContext] = useState("History");
  const navigationItems = [
    {
      name: "Home",
      path: "/dashboard/home",
    },
    {
      name: "Community Feed",
      path: "/dashboard/community",
    },
    {
      name: "Package & Pricing",
      path: "/dashboard/package",
    },
    {
      name: "Disclaimer",
      path: "/dashboard/disclaimer",
    },
    {
      name: "Support Centre",
      path: "/dashboard/support",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="xl:hidden fixed top-4 left-4 z-10 p-2 rounded-md bg-[#414141] text-white"
      >
        {isOpen ? " " : <RiMenuFold4Fill className="" size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-[#414141] text-white z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-400"}
          xl:translate-x-0 xl:static xl:z-50
          w-[300px] md:w-[351px] flex flex-col rounded-xl overflow-y-auto m-2
        `}
      >
        {/* Logo Section */}

        <div className="p-6 border-b border-website-color-lightGray/20">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <img className="w-16" src={logo} alt="Logo" />
            </Link>
            {/* Context Select Button */}
            <select
              className="cursor-pointer ml-4 bg-[#323232]  text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            >
              <option value="history">History</option>
              <option value="see_more">See More</option>
            </select>
            <button className="xl:hidden block" onClick={() => toggleSidebar()}>
              <RiMenuFold3Fill className="text-2xl " />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between px-2 md:px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-radial-active text-white shadow-lg" // Active items will show radial bg color
                        : "text-gray-300 hover:bg-website-color-lightGray/10 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.name && <ChevronRight size={16} />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Upgrade Section */}
        <div className="p-4 m-4 bg-gradient-to-b from-[#232323] to-[#178C91] rounded-lg">
          <div className="flex flex-col items-start gap-2 text-white">
            <p className="text-sm text-left min-w-max font-medium bg-[#345355] mb-1 border border-white rounded-2xl px-2 py-1">
              Current tier: Free
            </p>
            <p className="text-xl  flex items-center gap-2 mb-3">
              <GiStarsStack />
              <span> Daily limit about to reach</span>
            </p>
            <p className="text-lg  mb-4">
              Get access to premium features, higher limits, and priority
              support.
            </p>

            <div className="space-y-2 w-full">
              <button className="cursor-pointer w-full bg-gradient-to-r from-[#3AADB2] to-[#0D777C] border border-[#3AADB2]  text-white py-2 px-4 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">
                Go Premium
              </button>
              <button className="cursor-pointer w-full bg-[#232323] text-white py-2 px-4 rounded-md font-medium text-sm hover:bg-teal-900 transition-colors">
                Watch Ads
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="p-4 flex items-center justify-center gap-2">
          <p className="text-xs text-gray-400">Follow us:</p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
