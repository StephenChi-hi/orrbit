"use client";

import React from "react";
import Image from "next/image";

interface NavItem {
  name: string;
  icon: string; // image path
  href: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", icon: "/menu.svg", href: "#" },
  { name: "Analytics", icon: "/wifi.svg", href: "#" },
  { name: "Inbox", icon: "/chat.svg", href: "#" },
  { name: "Activity", icon: "/activity.svg", href: "#" },
  { name: "Edit Profile", icon: "/edit.svg", href: "#" },
  { name: "Settings", icon: "/settings.svg", href: "#" },
];

const SideBar: React.FC = () => {
  return (
    <aside className="min-h-screen bg-white text-[13px] font-semibold rounded-[30px] w-full col-span-3 px-[20px]">
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="border-b last:border-b-0">
            <a
              href={item.href}
              className="flex items-center py-[17px] gap-[15px]"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-gray-800">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
