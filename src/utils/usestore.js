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
      const res_data =  storeMenu4;
      const menuItemsList = res_data.REGULAR.cards;
      const itemCategory = "1";
      //const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      

      const menu = menuItemsList.map(item => {
        if((item.card.card["@type"] === itemCategory)  ) {
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