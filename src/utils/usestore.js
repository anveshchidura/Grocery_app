import { useState, useEffect } from "react";
//import { GET_store_MENU} from "../config";

import { storeMenu4 } from '../config';

const usestore = (resId) => {
  const [store, setstore] = useState(null); 

  useEffect(() => {
    getstoreInfo();
  }, []);

  const getstoreInfo = async () => {
    try {
      /* Live Data */
      //const response = await fetch(GET_store_MENU + resId);
      //const res_data = await response.json();
      const res_data =  storeMenu4;
      const menuItemsList = res_data.REGULAR.cards;
      const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      

      const menu = menuItemsList.map(item => {
        if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
          return item.card.card;
        }
      })

      const modifiedData = {
        info : res_data.info,
        menu : menu.filter(value => value !== undefined)
      };

      setstore(modifiedData)
    } catch (error) {
      console.log(error);
    }
  };

  return store;

}

export default usestore;