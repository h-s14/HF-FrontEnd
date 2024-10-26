import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import { RxArrowBottomRight, RxArrowTopRight } from "react-icons/rx";

const AboutUs = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 pt-32 text-3xl text-body-text-light dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-body-text-dark">
        Not Yet Implemented
        <div className="pt-10">Contact</div>
        <div className="group">
          <a
            className="flex items-center gap-1 text-lg text-blue-400 underline duration-0 group-hover:text-blue-700"
            href="mailto:14singh.harkirat@gmail.com"
          >
            14singh.harkirat@gmail.com
            <RxArrowTopRight className="transition duration-0 group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
