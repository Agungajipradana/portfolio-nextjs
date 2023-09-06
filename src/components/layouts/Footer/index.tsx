import Image from "next/image";
import imageGithub from "../../../assets/images/navbar/Github.svg";
import imageLinkedin from "../../../assets/images/navbar/linkedin.svg";
import Link from "next/link";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const Footer = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;
  return (
    <footer className={`pt-2 ${isDarkMode && "bg-gray-800"}`}>
      <div className="relative h-[242px] min-h-full">
        <div className={`absolute bottom-0 text-xs font-medium footer footer-center p-4 lg:text-sm ${isDarkMode ? "bg-gray-900 text-slate-50" : "bg-slate-200 text-gray-800"}`}>
          <p>Copyright © 2023 - All right reserved by Agung Aji Pradana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
