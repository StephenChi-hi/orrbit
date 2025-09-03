"use client";

import React from "react";
import Image from "next/image";

const TopNavBar: React.FC = () => {
  return (
    <nav className=" flex rounded-[30px] items-center justify-between m-[10px] p-[15px] bg-white ">
      {/* Logo */}
      <div className="flex items-center gap-[10px] text-[#151515]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <h1 className=" font-semibold text-[24px]">orrbit</h1>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-6">
        <Image
          src="/aistar.svg"
          alt="AI"
          width={28}
          height={28}
          className="cursor-pointer hover:opacity-80"
        />
        <Image
          src="/notification.svg"
          alt="notification"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80"
        />
      </div>
    </nav>
  );
};

export default TopNavBar;
