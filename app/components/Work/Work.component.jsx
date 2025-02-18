import { projects } from "@/app/constants/data";
import { MoveRight, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center text-5xl font-Ovo max-md:leading-[55px]"
      >
        Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Explore my latest projects showcasing modern design, responsive layouts,
        and interactive user experiences. Each creation reflects precision,
        creativity, and attention to detail!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
                <h2
                  className={`font-semibold text-gray-700 ${
                    isDarkTheme ? "text-black" : ""
                  }`}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0px_#000] group-hover:bg-[#ABE7FE] transition">
                <Send size={16} fill={"#000"} />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#top"
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightBlueHover duration-500 ${
          isDarkTheme ? "text-white hover:text-black" : ""
        }`}
      >
        Show More <MoveRight />
      </motion.a>
    </motion.div>
  );
};

export default Work;
