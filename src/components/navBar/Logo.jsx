import React from "react";

const Logo = () => {
  return (
    <>
      <div className="mb-2 ml-1 mr-44 block w-14 opacity-60 dark:hidden">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="mb-2 ml-1 mr-44 hidden w-14 opacity-60 dark:block">
        <img src="/logo-dark.png" alt="logo" />
      </div>
    </>
  );
};

export default Logo;
