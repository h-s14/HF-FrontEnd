import React from "react";

const Biography = () => {
  return (
    <div className="flex-auto pt-12">
      <div className="w-full pr-[10%] pt-12 text-right text-8xl">Biography</div>
      <div className="w-full pr-[35%] pt-10 text-right text-3xl">
        Who We Are
      </div>
      <div className="flex w-full pt-3">
        <img
          src="/bio-img.webp"
          className="align-right ml-40 h-52 w-96 rounded-full"
          alt="biography-img"
        />
        <p className="ml-[15%] w-[35%] pr-8 text-left">
          Health Flow was founded over 50 years ago by Dr.Emily Harrison.
          Starting as a small clinic, it has grown into a leading healthcare
          facility with over 500 beds and specialized departments, including
          cardiology and oncology. Known for its patient-first approach and
          cutting-edge technology, CityCare serves thousands of patients
          annually, offering high-quality care and innovative treatments. The
          hospital continues to uphold its mission of providing accessible,
          compassionate healthcare to both local and international patients.
        </p>
      </div>
    </div>
  );
};

export default Biography;
