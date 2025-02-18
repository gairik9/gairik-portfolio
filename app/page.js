"use client";
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Navbar,
  Services,
  Work,
} from "./components";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // System Preference Theme :
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  // Toggle Theme :
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkTheme]);
  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Header isDarkTheme={isDarkTheme} />
      <About isDarkTheme={isDarkTheme} />
      <Services isDarkTheme={isDarkTheme} />
      <Work isDarkTheme={isDarkTheme} />
      <Contact isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </>
  );
}
