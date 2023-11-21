import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import StoreItemCategory from "./storeItemCategory";

const StoreNestedItemCategory = ({ nestedCategory }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  const renderCategories = () => {
    return nestedCategory.categories.map((category, index) => (
      <StoreItemCategory key={category.id || index} itemCategory={category} />
    ));
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 onClick={handleToggle} className="font-bold text-lg cursor-pointer">
          {nestedCategory.title}
        </h3>
        {isExpanded ? (
          <SlArrowUp onClick={handleToggle} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={handleToggle} className="cursor-pointer" />
        )}
      </div>
      {isExpanded && <div>{renderCategories()}</div>}
    </div>
  );
}

export default StoreNestedItemCategory;
