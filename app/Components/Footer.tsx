import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-z"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          rufusmfmwellens@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Wellens Rufus. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/Rufuscsc"
              className="flex items-center gap-0.5 mx-auto"
            >
              <Image src={assets.github} alt="" className="w-10" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rufus-well-021928225/"
              className="flex items-center gap-0.5 mx-auto"
            >
              <Image src={assets.linkedin} alt="" className="w-15" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Rufus_well"
              className="flex items-center gap-0.5 mx-auto"
            >
              <Image src={assets.twitter} alt="" className="w-15" /> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
