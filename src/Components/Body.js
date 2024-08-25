import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";



const Body=()=>{

    const[listOfRestaurants,setListOfRestaurants]=useState(restaurantList)

    return (
        <div className="body">
            <div className="top">
                <div>
                <input className="type" type="text" placeholder="Search for food"/>
                <button className="search" onClick={()=>{console.log("button clicked")}}> Search</button>
                </div>

                <button className="btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                    res.info.avgRating > 4.3
                    )
                    setListOfRestaurants(filteredList)
                }}
                >Top rated restaurants</button>

            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant)=>
                        <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                    )
                }
                  
            </div>


        </div>
    )
}

export default Body ;