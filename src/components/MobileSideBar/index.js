import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineEye,
} from "react-icons/ai";
import { BiDownArrowAlt } from "react-icons/bi";
const MobNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-1/2  bg-white  transition-transform transform ${
        isNavOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full h-12 w-12 rounded-full bg-gray-100 border-none focus:outline-none"
        onClick={handleNavClick}
      >
        <BiDownArrowAlt className="h-10 w-10  rounded-md " />
      </button>
      <div className="overflow-y-auto h-2/3 ">
        <h4 className=" text-lg font-serif ml-4 pt-2">
          MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
        </h4>
        <div className="flex gap-2 mt-4 ml-4">
          <AiOutlineHeart className="text-4xl  rounded-full border border-gray-600 p-1 " />
          <AiOutlineShareAlt className="text-4xl rounded-full border border-gray-600 p-1" />
          <AiOutlineEye className="text-4xl rounded-full border border-gray-600 p-1" />
        </div>
        <div className="  text-sm pt-2 ml-5">
          <p>Dynasty: Ahichchhatra</p>
          <p>Period: 200 CE</p>
          <p>Material: Sandstone</p>
          <p>Location: National Museum</p>
        </div>
        <h4 className="pt-3 ml-4">Description:</h4>
        <>
          {isTruncated ? (
            <>
              <p className=" pb-4  mt-2 text-base ml-4 mr-3">
                Maitreya the future Buddha to be, resides in the Tushita heaven
                as a bodhisattava waiting to redeem humanity.In Buddhism,
                Maitreya is the eighth Buddha, a successor of the seven
                historical Buddhas (saptha-manusi Buddhas).
                <span
                  onClick={toggleTruncate}
                  className="  text-teal-900 p-2 mb-3 font-semibold"
                >
                  Read More....
                </span>
              </p>
            </>
          ) : (
            <>
              <p className=" mt-3 text-base ml-4 mr-3 pb-6">
                Maitreya the future Buddha to be, resides in the Tushita heaven
                as a bodhisattava waiting to redeem humanity. In Buddhism,
                Maitreya is the eighth Buddha, a successor of the seven
                historical Buddhas (saptha-manusi Buddhas). The Digha Nikays
                mentions, Maitreya Buddha will be born in Ketumati, in
                present-day Varanasi, Uttar Pradesh. Asa bodhisattva, Maitreya
                wears a heavily adorned with earrings, wristlets, necklaces, and
                amulet. Through the power of his holy body, speech and mind
                Maitreya will lead and satisfy all those gathered according to
                their individual needs and capacities, giving Hinayana teachings
                to some and Mahayana to others.
                <span
                  onClick={toggleTruncate}
                  className="  text-teal-900  mb-1 ml-3 font-semibold"
                >
                  Read Less
                </span>
              </p>
            </>
          )}
        </>
      </div>
      <div className="ml-4">
        <button className="bg-orange-700 text-white font-normal p-1 mt-2 mb-2">
          Add To Collection
        </button>
        <button className="text-orange-700 ml-2 border border-orange-700 p-1 mt-2">
          SOUVENIR
        </button>
      </div>

      {/* <ul className="flex justify-around items-center bg-white h-[900px] w-screen "></ul> */}
    </div>
  );
};

export default MobNavbar;
