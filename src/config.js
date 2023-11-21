
export const RES_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const ITEM_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  
export const CART_FALLBACK_IMG = 
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";


export const SHIMMER_RES_CARDS_COUNT = 8;
export const SHIMMER_MENU_ITEMS_COUNT = 4;


export const stripe_public_key = "pk_test_51OB4wHLdx32sllfUn5rTq2oBe7zgtO329W8FLDArRCK4FCuiwGxQh2mDsmXSWeIU62hvQiHNRK55yBUzttb4h4Fb00CuhSkIpH";


/* User Address - Checkout  */
export const USERS_ADDRESS_LIST = [
	{
		id: "01",
		addressType: "Home",
		addressDescription: "University Terrace Drive,Charlotte",
	},

	{
		id: "02",
		addressType: "Work",
		addressDescription: "UNC Charlotte",
	},
];

/* Payment Method - Checkout  */
export const PAYMENT_METHODS = [
	{
		id: "01",
		paymentType: "Pay Online",
		paymentMethod: ["Apple Pay"],
	},

	{
		id: "02",
		paymentType: "Pay Offline",
		paymentMethod: ["Cash On Delivery"],
	},
];



export const storeList3 = {
    "stores": [
      {
        "info": {
          "id": "348811",
          "name": "Suvidha SuperMarket",
          "cuisines": [
            "Indian",
            "Fast-food",
          ],
          "avgRating": 4.3,
          "slaString": "30 mins",
        }
      }
    ]
  };
  


export const storeMenu4 = 
{
    
    "REGULAR": {
          "cards": [
            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                  "itemCards": [
                    {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                        "info": {
                          "id": "97386391",
                          "name": "Tomatoes",
                          "price": 31900,
                          "imageId": "cfe78f80eca8c6fee076104c1a4c92bb",
                          "ratings": {
                            "aggregatedRating": {
                              "rating": "4.6"
                            }
                          }
                        }
                      }
                    },
                    {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                        "info": {
                          "id": "97386392",
                          "name": "Bread Sandwich",
                          "imageId": "0f05af5fd9613aa8d9dae31f4af56425",
                          "price": 30900,
                          "ratings": {
                            "aggregatedRating": {
                              "rating": "4.7"
                            }
                          }
                        }
                      }
                    },
                    {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                        "info": {
                          "id": "98650485",
                          "name": "Onions",
                          "imageId": "zdpxxc6wiqzof7duygxl",
                          "price": 43900,
                          "ratings": {
                            "aggregatedRating": {
                              "rating": "4.6"
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      
      
        
    ,
    "info": {
        "id": "348811",
        "name": "Suvidha SuperMarket",
        "cloudinaryImageId": "gkm33nhcda7ahujr1wcp",
        "cuisines": [
          "Indian",
          "Fast-Food"
        ],
        "avgRating": 4.3,
        "slaString": "48 MINS",
        "costForTwoString": "Budget Friendly"
      }
}