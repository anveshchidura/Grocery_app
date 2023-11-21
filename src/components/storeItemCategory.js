import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const StoreItemCategory = ({ itemCategory }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const renderMenuItems = () => {
    return itemCategory.itemCards.map((item) => (
      <MenuItem key={item.id} item={item.card.info} />
    ));
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 onClick={handleToggle} className="font-bold text-lg cursor-pointer">
          {itemCategory.title} ({itemCategory.itemCards?.length ?? 0})
        </h3>
        {isExpanded ? (
          <SlArrowUp onClick={handleToggle} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={handleToggle} className="cursor-pointer" />
        )}
      </div>
      {isExpanded && <div className="flex flex-col justify-evenly">{renderMenuItems()}</div>}
    </div>
  );
};

export default StoreItemCategory;
