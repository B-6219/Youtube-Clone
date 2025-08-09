import React from "react";
import { assets } from "../assets/images/vidTube_img/images/assets";

const SideBar = () => {
  return (
    <div className="bg-gray-900 text-white w-60 p-4">
      <h2 className="text-xl font-bold">Sidebar</h2>
      <ul className="mt-4 space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded flex gap-2 cursor-pointer">
            <img className="h-7" src={assets.home} alt="" />
            <p className="active:text-[#29d911]">Home</p>
        </li>

         <li className="hover:bg-gray-700 p-2 rounded flex gap-2 cursor-pointer">
            <img className="h-7" src={assets.playlist} alt="" />
            <p className="active:text-[#29d911]">Music</p>
        </li>

         <li className="hover:bg-gray-700 p-2 rounded flex gap-2 cursor-pointer">
            <img className="h-7" src={assets.subscription} alt="" />
            <p className="active:text-[#29d911]">Subscription</p>
        </li>

         <li className="hover:bg-gray-700 p-2 rounded flex gap-2 cursor-pointer">
            <img className="h-7" src={assets.history} alt="" />
            <p className="active:text-[#29d911]">History</p>
        </li>

      </ul>
    </div>
  );
};

export default SideBar;
