import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <a href="#top" className="text-3xl font-bold tracking-wide">
          Gairik<span className="text-green-500">.</span>
        </a>
        <div className="w-max mx-auto flex items-center gap-2 text-md text-gray-500">
          <Mail size={20} />
          <a href="mailto:gairik9@gmail.com" target="_blank">
            gairik9@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; {new Date().getFullYear()} Gairik. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link href="https://github.com/gairik9" target="_blank">
              <FaGithub className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/gairik-chakraborty-334024169/"
              target="_blank"
            >
              <FaLinkedinIn className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
          </li>
          <li>
            <Link href="mailto:gairik9@gmail.com" target="_blank">
              <MdEmail className="w-4 h-6 text-gray-700 cursor-pointer dark:text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
