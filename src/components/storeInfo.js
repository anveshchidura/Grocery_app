import React from 'react';
import { AiFillStar } from "react-icons/ai";

const StoreInfo = ({ name, cuisines, avgRating, slaString, image }) => {
  // Fallbacks for missing data
  const storeName = name || 'Store Name Unavailable';
  const cuisineList = cuisines?.join(", ") || 'Cuisines Information Unavailable';
  const rating = avgRating || 'N/A';
  const sla = slaString || 'N/A';
  const storeImage = image || 'Default Image URL'; // Replace 'Default Image URL' with a real URL

  return (
    <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:h-[81px]"
          src={storeImage}
          alt={storeName}
        />
        <div className="flex flex-col basis-[540px] m-5">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {storeName}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {cuisineList}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <AiFillStar />
              <span>{rating}</span>
            </div>
            <div>|</div>
            <div>{sla}</div>
          </div>
        </div>
      </div>
  );
}

export default StoreInfo;
