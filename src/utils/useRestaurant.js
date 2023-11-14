import { useState, useEffect } from "react";
//import { GET_RESTAURANT_MENU} from "../config";

import { restaurantMenu4 } from '../config';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); 

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      /* Live Data */
      //const response = await fetch(GET_RESTAURANT_MENU + resId);
      //const res_data = await response.json();
      const res_data =  restaurantMenu4;
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

      setRestaurant(modifiedData)
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;

}

export default useRestaurant;