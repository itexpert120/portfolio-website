"use client";

import { useState } from "react";

import Logo from "./header/Logo";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const links = [
  {
    label: "Home",
    id: "/",
  },
  {
    label: "About",
    id: "#about",
  },
  {
    label: "Tech Stack",
    id: "#tech-stack",
  },
  {
    label: "Projects",
    id: "#projects",
  },
  {
    label: "Contact",
    id: "#contact",
  },
];

const iconLinks = [
  {
    label: "Github",
    icon: AiFillGithub,
    href: "https://github.com/itexpert120",
  },
  {
    label: "Twitter",
    icon: AiFillTwitterCircle,
    href: "https://twitter.com/itexpert120",
  },
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/itexpert120",
  },
];

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <nav className="flex items-center backdrop-blur-md bg-black/5 sticky top-0 h-20 max-w-screen z-50">
      {mobileToggle && (
        <div className=" w-full h-[460px] bg-white dark:bg-[#191919] absolute top-0 left-0 shadow-lg">
          <div className="flex mx-auto flex-row justify-between items-center w-full px-4 h-20 py-4">
            <Logo />

            <button onClick={() => setMobileToggle(!mobileToggle)}>
              <AiOutlineClose
                size={32}
                className="fill-[#666666] dark:fill-[#A7A7A7"
              />
            </button>
          </div>
          <div className="flex flex-col gap-6 px-8">
            {links.map((item) => (
              <div
                onClick={() => setMobileToggle(!mobileToggle)}
                key={item.id}
                className="hover:underline hover:text-black dark:hover:text-white text-2xl transition"
              >
                <a href={item.id}>{item.label}</a>
              </div>
            ))}
            <div className="flex gap-5 items-center py-4">
              {iconLinks.map((item) => (
                <div key={item.label}>
                  <a href={item.href} target="_blank">
                    <item.icon
                      size={36}
                      className="fill-[#666666] dark:fill-[#A7A7A7] hover:fill-black dark:hover:fill-white transition"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex mx-auto flex-row justify-between items-center max-w-6xl w-full px-4">
        <Logo />

        <div className="flex sm:hidden">
          <button onClick={() => setMobileToggle(!mobileToggle)}>
            <AiOutlineMenu
              size={32}
              className="fill-[#666666] dark:fill-[#A7A7A7"
            />
          </button>
        </div>

        <div className="hidden sm:flex gap-8 sm:gap-2 md:gap-8 lg:gap-16 items-center text-[#666666] dark:text-[#A7A7A7]">
          {links.map((item) => (
            <div
              key={item.id}
              className="hover:underline hover:text-black dark:hover:text-white sm:text-[15px] md:text-[16px] lg:text-lg transition"
            >
              <a href={item.id}>{item.label}</a>
            </div>
          ))}

          <div className="flex gap-5 items-center">
            {iconLinks.map((item) => (
              <div key={item.label}>
                <a href={item.href} target="_blank">
                  <item.icon
                    size={30}
                    className="fill-[#666666] dark:fill-[#A7A7A7] hover:fill-black dark:hover:fill-white transition"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
