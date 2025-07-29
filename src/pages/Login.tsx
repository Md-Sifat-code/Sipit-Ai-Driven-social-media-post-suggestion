
"use client";

import { X } from "lucide-react";

interface LoginProps {
  onClose: () => void;
}

export default function Login({ onClose }: LoginProps) {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg md:p-8">
      {/* CardHeader */}
      <div className="relative flex flex-col items-center space-y-2 pb-6">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Sign in</h1>
        <p className="text-sm text-gray-600">
          Log in to get{" "}
          <a
            style={{
              backgroundImage:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            href="#"
            className="text-teal-600 underline hover:text-teal-700"
          >
            30 free credit
          </a>{" "}
          everyday
        </p>
        <img className="w-40 ml-20 -mt-2" src="../src/assets/Line2.svg" alt="" />
      </div>

      {/* CardContent */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Username
            </label>
            <input
              id="username"
              placeholder="username"
              type="text"
              className="w-full bg-gray-200 rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-teal-500 focus:ring-teal-500 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="123*******"
              type="password"
              className="w-full bg-gray-200 rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-teal-500 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="remember-me" className="text-gray-700">
              Remember me
            </label>
          </div>
          <a
            style={{
              backgroundImage:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            href="#"
            className="text-teal-600 hover:text-teal-700"
          >
            Forget Password
          </a>
        </div>

        <button
          style={{
            background: "linear-gradient(270deg, #3AADB2 0.23%, #0D777C 99.77%)",
          }}
          className="w-full rounded-md bg-teal-600 py-2 text-lg font-semibold text-white hover:bg-teal-700 transition-colors"
        >
          Log in
        </button>
        <div className="relative flex items-center justify-center">
          <span className="absolute  px-2 text-sm text-gray-500">
            or
          </span>
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="space-y-3 ">
          <button className="w-full bg-gray-200 flex items-center justify-center space-x-2 rounded-md border border-gray-300  py-2 text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="../src/assets/gogool.svg" alt="" />
            <span>Continue with Google</span>
          </button>
          <button className="w-full bg-gray-200 flex items-center justify-center space-x-2 rounded-md border border-gray-300  py-2 text-gray-700 hover:bg-gray-50 transition-colors">
            <img src="../src/assets/apple.svg" alt="" />
            <span>Continue with Apple ID</span>
          </button>
        </div>
      </div>

      {/* CardFooter */}
      <div className="flex flex-col items-center space-y-4 pt-6">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            style={{
              backgroundImage:
                "linear-gradient(270deg, #0D777C 0.23%, #3AADB2 99.77%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            href="#"
            className="text-teal-600 underline hover:text-teal-700"
          >
            Register for Free!
          </a>
        </p>
        <p className="text-center text-xs text-gray-500">
          We securely process your info and never share your data - privacy
          and sass, both respected.
        </p>
      </div>
    </div>
  );
}