
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
      <img className="card-img" src={ "data:image/jpeg;base64,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" } alt={name}/>
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