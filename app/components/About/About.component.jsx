import { aboutInfo } from "@/app/constants/data";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const About = ({ isDarkTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src="/profile_pic.jpg"
            alt="profile_picture"
            width={1000}
            height={1000}
            className="rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-lg">
            Hi, I'm Gairik, a frontend developer with 2+ years of experience
            creating responsive and visually stunning web applications. Skilled
            in React.js, Next.js, and Tailwind CSS, I specialize in crafting
            seamless user experiences. Currently, I work as a senior frontend
            developer, delivering innovative and efficient web solutions.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {aboutInfo.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500 hover:shadow-lightBlack"
              >
                <item.icon className="text-slate-400 w-7 mt-3" />
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className={`my-3 font-semibold text-gray-700 ${
                    isDarkTheme ? "text-gray-400" : ""
                  }`}
                >
                  {item.title}
                </motion.h3>
                <p
                  className={`text-gray-600 text-sm ${
                    isDarkTheme ? "text-gray-400" : ""
                  }`}
                >
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className={`my-6 text-gray-700 font-Ovo ${
              isDarkTheme ? "text-white" : ""
            }`}
          >
            Tools I use :
          </motion.h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500"
            >
              <Image src="/vs_code.png" alt="vscode" width={25} height={25} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500"
            >
              <Image src="/git.png" alt="vscode" width={25} height={25} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className={`flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500 ${
                isDarkTheme ? "hover:text-black" : "text-black"
              }`}
            >
              <FaGithub className="w-[25px] h-[25px]" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500"
            >
              <Image src="/figma.png" alt="vscode" width={25} height={25} />
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
