import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className="pt-20 h-screen">
        <div className="container lg:px-32 md:px-16 px-4 mx-auto sm:mt-20 mt-32 text-center md:text-left">
          <h1 className="font-bebas px-4 xl:text-9xl  md:text-8xl text-7xl text-white-imperial">
            AGUNG <br /> FIRMANSYAH
          </h1>
          <p className="text-gray-500 dark:text-gray-200 px-4 tracking-wider">
            an aspiring web developer fresh graduate
          </p>
        </div>
        {/* ================================================================= */}
        <div className="pt-20">
          <div className="flex container lg:px-32 md:px-16 mx-auto justify-center md:justify-start">
            <div className="flex px-2">
              <Link href="https://github.com/agungfir98">
                <a className="px-3 md:px-2">
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-red-400 dark:text-gray-400 dark:hover:text-red-400"
                    icon={faGithubAlt}
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/agung_firm">
                <a className="px-3 md:px-2">
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-red-400 dark:text-gray-400 dark:hover:text-red-400"
                    icon={faTwitter}
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/agung-firmansyah-76a8b819a/">
                <a className="px-3 md:px-2">
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-red-400 dark:text-gray-400 dark:hover:text-red-400"
                    icon={faLinkedinIn}
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
