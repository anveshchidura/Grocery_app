import React from 'react';
import { useParams } from "react-router-dom";
import MenuShimmer from "./Shimmer";
import useStore from "../utils/useStore";
import StoreInfo from "../components/StoreInfo";
import StoreMenuList from "../components/StoreMenuList";

const StoreDetails = () => {
  const { resId } = useParams(); 
  const store = useStore(resId); 

  if (!store) {
    return <MenuShimmer />;
  }

  const { info, menu } = store;

  return (
    <div className="container">
      <StoreInfo {...info} />
      <StoreMenuList menu={menu} />
    </div>
  );
};

export default StoreDetails;
