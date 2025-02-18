import { Download, Hand, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkTheme }) => {
  return (
    <header className="w-11/12 max-w-5xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex items-center justify-center gap-2"
      >
        <Image
          src="/resume_image.jpg"
          alt=""
          width={70}
          height={70}
          className="rounded-full object-cover"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 mb-3 text-xl md:text-2xl font-Ovo"
      >
        Hi, I'm Gairik <Hand className="w-8" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo"
      >
        — a frontend developer based in India.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I build seamless digital experiences with cutting-edge technology and
        design. Transforming ideas into interactive, modern web solutions.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        {isDarkTheme ? (
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className={`px-10 py-3 border border-white rounded-full bg-white text-black flex items-center gap-2`}
          >
            Contact Me <MoveRight />
          </motion.a>
        ) : (
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className={`px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2`}
          >
            Contact Me <MoveRight />
          </motion.a>
        )}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          href="/resume.pdf"
          download
          className={`px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2`}
        >
          Resume <Download />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
