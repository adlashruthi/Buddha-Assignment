import React from "react";

import img1 from "./img3.png";
import img2 from "./img2.jpeg";
import MobNavbar from "./MobileSideBar";

const Mobile = () => {
  return (
    // <div className="flex  justify-between items-start w-full">
    <div className="overflow-auto">
      <MobNavbar />

      <div
        style={{
          backgroundImage: `url(${img2})`,
        }}
        className=" h-[740px] w-full flex justify-center items-center"
      >
        <img src={img1} alt="/" className=" h-72 w-64" />
      </div>
    </div>
  );
};

export default Mobile;
