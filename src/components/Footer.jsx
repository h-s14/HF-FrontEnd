import { Mail, Navigation, Phone } from "lucide-react";
import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 dark:bg-gradient-to-tl dark:from-dark-gradient-1 dark:via-dark-gradient-2 dark:to-dark-gradient-3 dark:text-[#E0E0E0]">
        <div
          className={
            "relative flex w-full justify-between rounded-tl-3xl rounded-tr-3xl border-2 border-black border-opacity-20 bg-footer-light bg-opacity-40 px-36 pb-4 pt-5 text-black shadow-lg outline-none backdrop-blur-md backdrop-filter dark:bg-footer-dark dark:bg-opacity-40"
          }
        >
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="block w-20 opacity-60 dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="logo"
              className="hidden w-20 opacity-60 dark:block"
            />
          </div>
          <div className="flex flex-col">
            <div className="pb-2 font-semibold text-footer-text-light dark:text-footer-text-dark">
              Quick Links
            </div>
            <Link to={"/"}>
              {" "}
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                Home
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
            </Link>
            <Link to={"/appointment"}>
              {" "}
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                Appointment
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
            </Link>
            <Link to={"/about"}>
              {" "}
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                About
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
            </Link>
          </div>
          <div>
            <div className="ml-1 pb-2 font-semibold text-footer-text-light dark:text-footer-text-dark">
              Contact
            </div>
            <div className="">
              <span className="flex text-footer-text-light dark:text-footer-text-dark">
                <Phone className="pr-2" />
                999-999-9999
              </span>
              <span className="flex text-footer-text-light dark:text-footer-text-dark">
                <Mail className="pr-2" />
                <a href="mailto:health.flow@gmail.com">health.flow@gmail.com</a>
              </span>
              <span className="flex text-footer-text-light dark:text-footer-text-dark">
                <Navigation className="pr-2" />
                Earth,Solar System
              </span>
            </div>
          </div>
          <div className="flex flex-col items-baseline">
            <div className="pb-2 font-semibold text-footer-text-light dark:text-footer-text-dark">
              Donate
            </div>
            <div>
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
              <span className="group flex items-center text-footer-text-light dark:text-footer-text-dark">
                Link
                <RxArrowTopRight
                  style={{ transitionDuration: "0s" }}
                  className="ml-2 text-footer-text-light group-hover:rotate-45 group-hover:text-footer-text-dark dark:text-footer-text-dark dark:group-hover:text-blue-600"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
