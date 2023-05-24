import React, { useState } from "react";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineEye,
} from "react-icons/ai";
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div
      className={`flex box-border p-3 pt-4 h-screen relative    ${
        !open ? "md:w-2/5 overflow-x-hidden  " : "w-50"
      }`}
    >
      {!open && (
        <div className="h-full w-full ">
          <div>
            <h2>
              <MdKeyboardArrowLeft
                className={`text-3xl rounded-full border border-gray-600 ${
                  !open && ""
                }`}
              />
            </h2>
            <h4 className="md:text-2xl text-sm font-serif md:pt-3 pt-2">
              MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
            </h4>
            <div className="flex gap-2 mt-4">
              <AiOutlineHeart className="text-4xl md:text-3xl rounded-full border border-gray-600 p-1 " />
              <AiOutlineShareAlt className="text-4xl md:text-3xl rounded-full border border-gray-600 p-1" />
              <AiOutlineEye className="text-4xl md:text-3xl rounded-full border border-gray-600 p-1" />
            </div>
            <div className=" md:text-sm text-xs pt-2">
              <p>Dynasty: Ahichchhatra</p>
              <p>Period: 200 CE</p>
              <p>Material: Sandstone</p>
              <p>Location: National Museum</p>
            </div>
            <h4 className="pt-3">Description:</h4>
            <>
              {isTruncated ? (
                <>
                  <p className=" pb-4  mt-2 text-sm">
                    Maitreya the future Buddha to be, resides in the Tushita
                    heaven as a bodhisattava waiting to redeem humanity.In
                    Buddhism, Maitreya is the eighth Buddha, a successor of the
                    seven historical Buddhas (saptha-manusi Buddhas).
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
                  <p className="pb-4  mt-3 text-sm">
                    Maitreya the future Buddha to be, resides in the Tushita
                    heaven as a bodhisattava waiting to redeem humanity. In
                    Buddhism, Maitreya is the eighth Buddha, a successor of the
                    seven historical Buddhas (saptha-manusi Buddhas). The Digha
                    Nikays mentions, Maitreya Buddha will be born in Ketumati,
                    in present-day Varanasi, Uttar Pradesh. Asa bodhisattva,
                    Maitreya wears a heavily adorned with earrings, wristlets,
                    necklaces, and amulet. Through the power of his holy body,
                    speech and mind Maitreya will lead and satisfy all those
                    gathered according to their individual needs and capacities,
                    giving Hinayana teachings to some and Mahayana to others.
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

            <div>
              <button className="bg-orange-700 text-white font-normal p-1 mt-2 mb-2">
                Add To Collection
              </button>
              <button className="text-orange-700 ml-2 border border-orange-700 p-1 mt-2">
                SOUVENIR
              </button>
            </div>
          </div>
        </div>
      )}

      <MdKeyboardDoubleArrowLeft
        className={`bg-white text-amber-700 cursor-pointer text-3xl rounded-full
          absolute -right-4 z-50 top-36 border border-pink-800 hidden lg:block  ${
            !open && "rotate-180"
          }`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Sidebar;
