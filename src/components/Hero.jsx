import React from "react";

const Hero = () => {
  return (
    <>
      <div className="items-center md:pl-40">
        <div className="flex-col text-8xl sm:flex sm:items-center sm:px-2 md:items-start md:justify-start md:px-0">
          <div className="justify-center pl-12">Health Flow</div>
          <div className="pl-5 pt-1">is here</div>
        </div>

        <div className="flex justify-between sm:flex-col md:flex-row">
          <p className="pl-12 pt-10 sm:w-[90%] md:w-[35%]">
            Discover Health Flow Medical Institute: a state-of-the-art facility
            offering comprehensive healthcare services with compassion and
            expertise. Connect seamlessly with providers and access personalized
            care today!
          </p>
          <img
            src="/hero_img.jpg"
            alt="hospital"
            className="w-66 align-right h-52 rounded-full sm:mx-20 md:mr-40"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
