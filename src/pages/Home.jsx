import { React, useRef } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/departments/Departments";
import SineWave from "../components/SineWave";
import DepartmentsCara from "../components/departments/DepartmentsCara";
import MessageForm from "../components/MessageForm";

import { ArrowUp } from "lucide-react";

const Home = () => {
  const homeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const biographyRef = useRef(null);
  const departmentsRef = useRef(null);
  const messageRef = useRef(null);
  return (
    <div className="no-scrollbar bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 pt-32 text-body-text-light dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-body-text-dark">
      {/* -----------------------Hero/Home Page----------------------- */}
      <div>
        <Hero />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%] pt-8">
            <button
              onClick={() => {
                biographyRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-2 border-gray-400 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter dark:border-gray-600"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
          <div className="flex justify-center py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
      {/* -----------------------BioGraphy Page----------------------- */}
      <div ref={biographyRef}>
        <Biography />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%] pt-8">
            <button
              onClick={() => {
                departmentsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-2 border-gray-400 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter dark:border-gray-600"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
          <div className="flex justify-center py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
      {/* -----------------------Departments Page----------------------- */}
      <div ref={departmentsRef}>
        <div className="flex pb-10 pt-28">
          <Departments />
          {/* -----------------------Scroll Button Start----------------------- */}
          <div className="pl-[15%]">
            <button
              onClick={() => {
                messageRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="z-10 h-24 w-12 rounded-full border-2 border-gray-400 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter dark:border-gray-600"
            >
              <img
                src="/arrow-down.svg"
                className="mt-12 h-12 w-14 font-bold"
              />
            </button>
          </div>
          {/* -----------------------Scroll Button End----------------------- */}
        </div>
        <DepartmentsCara />
        <div className="flex justify-center py-5 pt-3">
          <SineWave />
        </div>
      </div>
      {/* -----------------------Messages Page----------------------- */}
      <div ref={messageRef}>
        <MessageForm />
        <>
          {/* -----------------------Scroll Button Start----------------------- */}
          <button
            className="fixed bottom-5 left-5 z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black border-opacity-20 bg-gray-400 bg-opacity-10 text-3xl text-black shadow-lg backdrop-blur-md backdrop-filter transition dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:text-white"
            onClick={homeScroll}
          >
            <ArrowUp className="mt-1 h-12 w-14 font-bold text-gray-900 dark:text-gray-400" />
          </button>

          {/* -----------------------Scroll Button End----------------------- */}
          <div className="flex justify-center py-5 pl-9">
            <SineWave />
          </div>
        </>
      </div>
      {/* <Footers /> */}
    </div>
  );
};

export default Home;
