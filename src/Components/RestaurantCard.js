import { CDN_URL } from "../Utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props
    const{name,cuisines,costForTwo,cloudinaryImageId,avgRating}=resData?.info
    return(
        <div className="card">
             <img className="card_img" src={ CDN_URL + cloudinaryImageId }alt=""/>

            <div className="details">
              <h1>{name}</h1>
              <h3>{cuisines .join(" ,")}</h3>
              <h3>{costForTwo}</h3>
              <h3>{avgRating}</h3>
            </div>
             
        </div>
    )
}

export default RestaurantCard ;