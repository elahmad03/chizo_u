import React from "react";
import Logo from "/img/logo.png"; // Make sure this is the correct path

const LogoSpinner = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="w-24 h-24 mb-6 object-contain" />

      {/* Animated Loading Progress Bar */}
      <div className="w-2/3 max-w-sm h-2 bg-cyan-100 rounded-full overflow-hidden">
        <div className="loading-bar h-full bg-cyan-800"></div>
      </div>
    </div>
  );
};

export default LogoSpinner;
