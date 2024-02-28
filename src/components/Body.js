import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurantCard";
import { resData } from "./utils/data";

const Body = () => {
  let [newData, setNewData] = useState(resData.restaurants);

  console.log(
    useEffect(() => {
      console.log("im use effect function");
    }, [])
  );

  const fetData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0044745&lng=72.55311549999999&restaurantId=44388&catalog_qa=undefined&submitAction=ENTER"
    );
  }
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search Here ..." />
      </div>

      <div className="filter">

        <button
          onClick={() => {
            // filter logic
            let filteredRes = newData.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setNewData(filteredRes);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>

      </div>
      <div className="res-container">
        {newData.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
