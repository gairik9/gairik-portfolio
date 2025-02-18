import { EllipsisVertical, Moon, Sun, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
  const sideMenuRef = useRef();

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-full h-screen dark:hidden">
        <Image
          src={"/gradient_bg.png"}
          alt="header_background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between py-4 z-50 dark:bg-darkTheme dark:shadow-white/20 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" className="text-3xl font-bold tracking-wide">
          Gairik<span className="text-green-500">.</span>
        </a>

        {/* Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button>
            {
              isDarkTheme ? (
                <Sun
                  className="w-6 h-6 text-yellow-400"
                  strokeWidth={1}
                  onClick={() => setIsDarkTheme(false)}
                />
              ) : (
                <Moon
                  className="w-6 h-6"
                  strokeWidth={1}
                  onClick={() => setIsDarkTheme(true)}
                />
              )
            }
          </button>

          {/* Contact Button */}
          {/* <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-10 py-2.5 rounded-full border border-gray-500 ml-4 font-Ovo"
          >
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="W-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a> */}

          {/* Link Icons */}
          <div className="hidden lg:flex items-center gap-4 px-10 py-2.5">
            <Link href="https://github.com/gairik9" target="_blank">
              <FaGithub className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gairik-chakraborty-334024169/"
              target="_blank"
            >
              <FaLinkedinIn className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
            <Link href="mailto:gairik9@gmail.com" target="_blank">
              <MdEmail className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="block md:hidden" onClick={openMenu}>
            <EllipsisVertical className="w-6 h-6" strokeWidth={1} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col py-20 px-10 gap-4 fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme dark:text-white`}
        >
          {/* Close Icon */}
          <button onClick={closeMenu} className="absolute top-6 right-6">
            <X />
          </button>
          {/* Nav Links */}
          <li onClick={closeMenu}>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
