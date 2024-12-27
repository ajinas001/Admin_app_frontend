import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-background shadow-sm z-50 fixed w-full ">
      <div className=" px-6  lg:px-6">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <div className="text-xl font-bold text-primary mb-6">
                    <img src="../src/assets/images/logo.png" alt="ルクミル Logo" className="w-60 h-24 m-4 mt-8" />
                </div>
          <div className="flex items-center">
           
            {/* <span className=" text-xl md:text-2xl lg:text-4xl font-extrabold text-primary">
              ルックミール
            </span> */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
