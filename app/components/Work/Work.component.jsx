import { projects } from "@/app/constants/data";
import { MoveRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = ({isDarkTheme}) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo max-md:leading-[55px]">
        My Latest Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore my latest projects showcasing modern design, responsive layouts,
        and interactive user experiences. Each creation reflects precision,
        creativity, and attention to detail!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <Link
              href={project.project_url}
              target="_blank"
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  flex items-center justify-between duration-500 group-hover:bottom-7 group-hover:bg-lightBlueHover"
            >
              <div>
                <h2 className={`font-semibold text-gray-700 ${isDarkTheme ? "text-black" : ""}`}>{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0px_#000] group-hover:bg-[#ABE7FE] transition">
                <Send size={16} fill={"#000"} />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <a
        href="#top"
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightBlueHover duration-500 ${isDarkTheme ? "text-white hover:text-black" : ""}`}
      >
        Show More <MoveRight />
      </a>
    </div>
  );
};

export default Work;
