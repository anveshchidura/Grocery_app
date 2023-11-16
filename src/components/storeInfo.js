import React from 'react'
import { RES_IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";

const StoreInfo = (store) => {
  return (
    <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
          src={RES_IMG_CDN + store?.cloudinaryImageId}
          alt={store?.name}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {store?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {store?.cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <AiFillStar />
              <span>{store?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{store?.sla.slaString}</div>
            <div>|</div>
            <div>{store?.costForTwoMsg}</div>
          </div>
        </div>
      </div>
  )
}

export default StoreInfo;