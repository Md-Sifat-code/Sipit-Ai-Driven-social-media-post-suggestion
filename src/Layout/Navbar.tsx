


import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";


// Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Feed", href: "/dashboard" },
    { name: "Examples", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Pricing", href: "/dashboard/package" },
  ];

  // Function to check if a nav item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const openModal = (type: "login" | "register") => {
    setShowModal(type);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <nav className="bg-white pt-2 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <NavLink to="/">
                    <img
                      className="h-10 sm:12 md:h-12 lg:h-14"
                      src="../src/assets/logo.svg"
                      alt=""
                    />
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-teal-600 font-semibold"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => openModal("login")}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/auth/login")
                    ? "text-teal-600 font-semibold"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => openModal("register")}
                className="w-full min-w-max mt-2 mx-3 text-white px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-[8px] border border-[#3AADB2]"
                style={{
                  background:
                    "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                }}
              >
                Free Register
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-6 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-teal-600 font-semibold"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="border-t pt-4 mt-4">
                <button
                  onClick={() => openModal("login")}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive("/auth/login")
                      ? "text-teal-600 font-semibold"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => openModal("register")}
                  className="w-full mt-2 mx-3 text-white px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-[8px] border border-[#3AADB2]"
                  style={{
                    background:
                      "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
                  }}
                >
                  Free Register
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modal Backdrop */}
      {(showModal === "login" || showModal === "register") && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/20 transition-opacity"></div>
          <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className={`inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
                showModal ? "animate-slideDown" : "animate-slideUp"
              }`}
            >
              {showModal === "login" ? (
                <Login onClose={closeModal} />
              ) : (
                <Register onClose={closeModal} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;