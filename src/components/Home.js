import React from "react";
import Sidebar from "./Sidebar";
import img1 from "./img3.png";
import img2 from "./img2.jpeg";

const Home = () => {
  return (
    // <div className="flex  justify-between items-start w-full">
    <div className="lg:flex lg:flex-nowrap   flex-wrap  flex-col-reverse lg:flex-row justify-between items-start w-full md:block hidden ">
      <Sidebar />

      <div
        style={{
          backgroundImage: `url(${img2})`,
        }}
        className=" lg:h-screen h-screen w-full flex justify-center items-center"
      >
        <img src={img1} alt="/" className="md:h-96 md:w-96 h-72 w-64" />
      </div>
    </div>
  );
};

export default Home;
