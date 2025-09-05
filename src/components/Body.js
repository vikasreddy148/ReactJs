import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [resturantList, setResturantList] = useState(resList);
  const handleClick = () => {
    setResturantList(
      resturantList.filter(
        (res) => res.info.ratingNew.ratings.DINING.rating > 4.3
      )
    );
  };
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter-list">
        <button onClick={handleClick}>Filter List</button>
      </div>
      <div className="res-container">
        {resturantList.map((resturant) => (
          <ResturantCard key={resturant.info.resId} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
