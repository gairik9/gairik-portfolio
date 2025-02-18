import { Download, Hand, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = ({ isDarkTheme }) => {
  return (
    <header className="w-11/12 max-w-5xl mx-auto text-center h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/profile_image.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <h3 className="flex items-center gap-2 mb-3 text-xl md:text-2xl font-Ovo">
        Hi, I'm Gairik <Hand className="w-8" />
      </h3>
      <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo">
        — a frontend developer based in India.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I build seamless digital experiences with cutting-edge technology and
        design. Transforming ideas into interactive, modern web solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <a
          href="#contact"
          className={`px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 ${
            isDarkTheme
              ? "text-black bg-white hover:bg-white hover:text-black"
              : "hover:bg-black hover:text-white"
          }`}
        >
          Contact Me <MoveRight />
        </a>
        <a
          href="/resume.pdf"
          download
          className={`px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2`}
        >
          Resume <Download />
        </a>
      </div>
    </header>
  );
};

export default Header;
