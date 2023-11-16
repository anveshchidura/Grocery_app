
/**
*
*
* This component is not live, just using for trying reusing exisiting storeCard and storeMenu Components
* to generate Shimmer as well
* It's working fine but looks complicated and does not follow Single responsibility principle of component
* Here, the same component acts as both shimmer and actual component
*
*/



import { SHIMMER_RES_CARDS_COUNT } from '../config';

import {RES_IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";



export const storeShimmer = (props) => {
  let shimmer = false;
  const {name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString} = props;
  const buttonStyle = {
    backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
    color : isNaN(avgRating)? "#535665" : "#fff"
  }
  
  if(props.type == "shimmer") {
    shimmer = true;
  }
  return (
    <div className={shimmer? "shimmer-card" :"card" }>
      {shimmer ? <div className="shimmer-img stroke animate"></div> : 
      <img className="card-img" src={ RES_IMG_CDN + cloudinaryImageId } alt={name}/>
      }
      <div className="card-body">
        <h6 className={shimmer? "shimmer-title stroke animate" :"card-title" }>{name? name : ""}</h6>
        <p className={shimmer? "shimmer-tags stroke animate" :"card-tags" }>{cuisines ? cuisines.join(", ") : ""}</p>
        <div className={shimmer? "shimmer-details stroke animate" :"card-details" }>
          <div className={shimmer? "none" :"" }>
          <div  className="rating" style={buttonStyle}>
            <AiFillStar /><span>{avgRating? avgRating : ""}</span>
          </div>
          <div>•</div>
          <div>{slaString? slaString : ""}</div>
          <div>•</div>
          <div>{costForTwoString? costForTwoString : ""}</div>
          </div>
        </div>
      </div>
    </div>

  );
};


export const MenuShimmer = () => {
  let shimmer = false;
  if(props.type == "shimmer") {
    shimmer = true;
  }
  return (
    <div className="store-menu">
      <div className={shimmer? "store-summary stroke-color animate" : "store-summary"}>
        {shimmer ?         <img className="shimmer-img stroke animate" />
         : <img className="store-img" src={ RES_IMG_CDN  + store?.cloudinaryImageId } alt={store?.name}/> }
        <div className="store-summary-details">
          <h2 className={shimmer ?"shimmer-w40  stroke animate": "store-title"}>{store?.name}</h2>
          <p className={shimmer ? "shimmer-w20 stroke animate" : "store-tags"}>{store?.cuisines.join(", ")}</p>
          <div className= { shimmer ? "shimmer-w60  stroke animate" : "store-details" }>
          <div className={shimmer? "none" :"" }>
            <div className="store-rating">
              <AiFillStar /><span>{store?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{store?.sla.slaString}</div>
            <div>|</div>
            <div>{store?.costForTwoMsg}</div>
          </div>
          </div>
        </div>
      </div>

      <div className="store-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className={shimmer ? "shimmer-w40 stroke animate" : "menu-title"}>Recommended</h3>
            <p className={ shimmer ? "shimmer-w20 stroke animate" : "menu-count" }>{Object.keys(store?.menu?.items).length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            { shimmer ? Array.from({length:SHIMMER_RES_CARDS_COUNT}).map( (element, index)  =>
            <ShimmerMenuItem></ShimmerMenuItem>) : 
             Object.values(store?.menu?.items).map( item => 
              <MenuItem></MenuItem>
            )
           }          
          </div>
        </div>
        <div className="cart-widget"></div>

      </div>
    </div>
  )
}

export const ShimmerMenuItem = () => {
  return (
    <div className="shimmer-menu-card" key={index}>
      <div className="shimmer-item-details">
        <h3 className="shimmer-w40  stroke animate"></h3>
        <p className="shimmer-w20  stroke animate"> </p>
        <p className="shimmer-w60  stroke animate"></p>
      </div>
      <div className="shimmer-img-wrapper">
        <img className="shimmer-img stroke animate" /> 
        <div className="shimmer-btn stroke animate"> </div>
      </div>
    </div>
  )
}

export const MenuItem = () => {
  return (
    <div className="menu-item" key={item?.id} >
    <div className="menu-item-details">
    <h3 className="item-title">{item?.name}</h3>
    <p className="item-cost">{(item?.price > 0) ?
      new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p>
    <p className="item-desc">{item?.description}</p>
  </div>
  <div className="menu-img-wrapper">
    { item?.cloudinaryImageId  && <img className="menu-item-img" src={ ITEM_IMG_CDN  + item?.cloudinaryImageId } alt={item?.name}/> }
    <button className="add-btn"> ADD +</button>
  </div>
</div>
  )
}


const CommonShimmer = () => { 
  return (
    <div className="shimmer-container">
      {Array.from({length:SHIMMER_RES_CARDS_COUNT}).map((element, index) => {
        return <storeShimmer type="shimmer"
        key ={index} />
      }) }
    </div>   
  )
}

export default CommonShimmer;