import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function clickBTN() {
    setIsOpen(!isOpen);
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currTheme = theme === "system" ? systemTheme : theme;
    if (currTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 text-dark-goldyellow shadow-2xl"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header>
      <div className="fixed backdrop-filter backdrop-blur-sm font-poppins w-full z-50">
        <div className="">
          <nav className="flex container lg:px-32 md:px-16 px-4 mx-auto items-center h-16 justify-between font-semibold ">
            <div className="px-4 hover:text-red-400">
              <Link href="/">AF</Link>
            </div>
            <div className="flex">
              <div className=" sm:px-10 ">
                <div className="w-7 h-7 shadow-2xl">{renderThemeChanger()}</div>
              </div>
              <div className="flex px-4">
                <button onClick={clickBTN} className="block sm:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="hidden sm:block">
                  <ul className="flex">
                    <li className="px-4 hover:text-red-400">
                      <Link href="#projects">Projects</Link>
                    </li>
                    <li className="px-4 hover:text-red-400">
                      <Link href="#skills">Skills</Link>
                    </li>
                    <li className="px-4 hover:text-red-400 flex">
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1xPxBpOgB0Gs6IuD9NBBmsFoeaELRxdsF/view"
                      >
                        Resume
                      </a>
                      <ExternalLinkIcon className="h-3 w-3" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* ====================== Mobile Nav =================== */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed z-40 top-16 right-8 text-white sm:hidden opacity-80 backdrop-filter backdrop-blur-sm font-poppins font-semibold`}
      >
        <div className="relative">
          <ul className="relative">
            <li className="px-4">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="px-4">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="px-4">
              <Link href="https://drive.google.com/file/d/1xPxBpOgB0Gs6IuD9NBBmsFoeaELRxdsF/view">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ====================== Mobile Nav =================== */}
    </header>
  );
}
