import { useState, useRef, useEffect } from "react";
import userImg from "../assets/profile.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdArrowForwardIos, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
const ProfileModal = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const user = {
    name: "Cody Fisher",
    plan: "Free",
    img: userImg,
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed top-3 right-[5%] md:right-10  z-50" ref={ref}>
      <button
        className="px-4 py-2 bg-[#323232] text-white rounded-xl focus:outline-none cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center">
          <img className="w-7 h-7 rounded-full" src={user.img} alt="" />
          <span className="ml-2">{user.name}</span>
          <span className="ml-2 text-sm text-[#A4A4A4]">({user.plan})</span>
          <span className="ml-2 text-lg text-[#A4A4A4]">
            {" "}
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </button>
      {open && (
        <div className="absolute -left-5 mt-1 min-w-max bg-[#232323] rounded-lg shadow-lg py-2 z-50 border border-[#323232]">
          <Link
            to="/dashboard/profile"
            onClick={() => setOpen((v) => !v)}
            className=" w-full text-left px-4 py-2 text-white hover:bg-[#178C91] rounded-t-lg transition-colors flex items-center gap-2"
          >
            <span>View Profile</span> <MdArrowForwardIos />
          </Link>
          <button onClick={() => setOpen((v) => !v)} className=" w-full text-left px-4 py-2 text-white hover:bg-[#178C91] cursor-pointer rounded-b-lg transition-colors flex items-center gap-2">
            <MdLogout /> <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
