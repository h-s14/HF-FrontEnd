import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";

const DepartmentsCara = () => {
  return (
    <div className="mx-24 flex flex-col items-center rounded-3xl border-gray-100 bg-gray-900 bg-opacity-10 backdrop-blur-md backdrop-filter">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        // navigation={true}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="lg:max-[80%] max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide className="" key={item.title}>
            <div className="group relative mx-6 my-12 flex h-[300px] w-[120px] cursor-pointer flex-col rounded-3xl px-6 py-8 text-white shadow-lg lg:h-[300px] lg:w-[250px]">
              <div className="absolute inset-0 z-30 h-full rounded-3xl bg-cover bg-center text-gray-700 transition group-hover:scale-110 dark:text-gray-400">
                <item.bgIcon
                  strokeWidth={1}
                  className="inset-0 z-40 h-[90%] w-full object-cover pt-20"
                />
              </div>

              <div className="absolute inset-0 rounded-3xl bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col">
                <h1 className="z-30 hidden text-xl text-nav-bar-text-light transition hover:text-nav-bar-text-hover-light group-hover:scale-110 dark:text-nav-bar-text-dark dark:hover:text-nav-bar-text-hover-dark md:flex lg:text-2xl">
                  {item.title}
                </h1>
              </div>
              <RxArrowTopRight
                style={{ transitionDuration: "0s" }}
                className="absolute bottom-5 right-5 h-[35px] w-[35px] text-nav-bar-text-light hover:text-nav-bar-text-hover-light group-hover:rotate-45 group-hover:text-nav-bar-text-hover-light dark:text-nav-bar-text-dark dark:hover:text-nav-bar-text-hover-dark dark:group-hover:text-nav-bar-text-hover-dark"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DepartmentsCara;
