import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const StoreCard = ({ props, setStores }) => {
  const { name, cuisines, avgRating, slaString, costForTwoString } = props;
  const [isFavourite, setIsFavourite] = useState(false);

  const markFavourite = (event) => {
    setStores(props);
    setIsFavourite((prev) => !prev);
    event.preventDefault();
  };

  const avgRatingFloat = parseFloat(avgRating);
  const buttonStyle = {
    backgroundColor: avgRating === "--" ? "#fff" : avgRatingFloat < 4.0 ? "#db7c38" : "#48c479",
    color: isNaN(avgRatingFloat) ? "#535665" : "#fff"
  };

  return (
    <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow">
      <div className="relative w-full">
        <div className="absolute z-2 text-gray-light text-[25px] text-right cursor-pointer rounded-full w-[99%]">
          <span className={isFavourite ? "text-red" : ""} onClick={markFavourite}>&#x2764;</span>
        </div>
        <img className="w-full mob:w-[130px]" src={'https://cdn-icons-png.flaticon.com/512/5016/5016804.png'} alt={name} />
      </div>
      <div>
        <h6 className="text-base font-bold w-3/5 tracking-normal">{name}</h6>
        <p className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">{cuisines.join(", ")}</p>
        <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
          <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
        </div>
      </div>
    </div>
  );
};
