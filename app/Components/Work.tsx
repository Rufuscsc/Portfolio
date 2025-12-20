import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Work = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className={`grid grid-cols-auto my-10 gap-5 ${
          isDarkMode ? "text-black" : ""
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {workData.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              target="_blank"
              className="block h-full"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                // 1. Updated Background and Border for Dark Mode
                className={`flex flex-col h-full rounded-xl shadow-md overflow-hidden cursor-pointer group border ${
                  isDarkMode
                    ? "bg-dark-theme border-gray-700 hover:bg-dark-hover"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* Top Section: Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Section: Text Content & Icon */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    {/* 2. Updated Title Text Color */}
                    <h2
                      className={`font-semibold text-lg truncate ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </h2>
                    {/* 3. Updated Description Text Color */}
                    <p
                      className={`text-sm mt-1 line-clamp-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-end mt-4">
                    <div
                      className={`border rounded-full w-9 h-9 flex items-center justify-center transition-colors duration-300 group-hover:bg-lime-300 ${
                        isDarkMode
                          ? "border-white shadow-[2px_2px_0_#fff]"
                          : "border-black shadow-[2px_2px_0_#000]"
                      }`}
                    >
                      <Image
                        src={
                          isDarkMode ? assets.dark_send_icon : assets.send_icon
                        }
                        alt="send icon"
                        className="w-4"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
