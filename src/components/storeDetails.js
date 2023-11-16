import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import usestore from "../utils/usestore";
import StoreInfo from "../components/storeInfo";
import StoreMenuList from "../components/storeMenuList";

const storeDetails = () => {
  const { resId } = useParams(); /* Read dynamic URL params */

  const store =
    usestore(
      resId
    ); /* Passing resId to Custom Hooks to fetch store details and returns it */

  return !store ? (
    <MenuShimmer />
  ) : (
    <div className="container">
      <StoreInfo {...store.info} />
      <StoreMenuList menu={store.menu} />

    </div>
  );
};

export default storeDetails;
