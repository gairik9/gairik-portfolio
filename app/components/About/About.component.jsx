import { aboutInfo } from "@/app/constants/data";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const About = ({ isDarkTheme }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/profile_pic.jpg"
            alt="profile_picture"
            width={1000}
            height={1000}
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-lg">
            Hi, I'm Gairik, a frontend developer with 2+ years of experience
            creating responsive and visually stunning web applications. Skilled
            in React.js, Next.js, and Tailwind CSS, I specialize in crafting
            seamless user experiences. Currently, I work as a senior frontend
            developer, delivering innovative and efficient web solutions.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {aboutInfo.map((item, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500 hover:shadow-lightBlack"
              >
                <item.icon className="text-slate-400 w-7 mt-3" />
                <h3
                  className={`my-3 font-semibold text-gray-700 ${
                    isDarkTheme ? "text-gray-400" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-gray-600 text-sm ${
                    isDarkTheme ? "text-gray-400" : ""
                  }`}
                >
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4
            className={`my-6 text-gray-700 font-Ovo ${
              isDarkTheme ? "text-white" : ""
            }`}
          >
            Tools I use :
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500">
              <Image src="/vs_code.png" alt="vscode" width={25} height={25} />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500">
              <Image src="/git.png" alt="vscode" width={25} height={25} />
            </li>
            <li
              className={`flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500 ${
                isDarkTheme ? "hover:text-black" : "text-black"
              }`}
            >
              <FaGithub className="w-[25px] h-[25px]" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightBlueHover hover:-translate-y-1 duration-500">
              <Image src="/figma.png" alt="vscode" width={25} height={25} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
