import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantList from "../utils/useResturantList";

const Body = () => {
  const [copyResturantList, setCopyResturantList] = useState([]);
  const [resSearch, setResSearch] = useState("");
  const onlineStatus = useOnlineStatus();
  const resturantList = useResturantList();

  useEffect(() => {
    setCopyResturantList(resturantList);
  }, [resturantList]);

  const handleClick = () => {
    setCopyResturantList(
      resturantList.filter((res) => res.avgRatingString > 4.1)
    );
  };

  if (resturantList.length == 0) {
    return (
      <>
        <div className="res-container" style={{ height: "379px" }}>
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
          <ShimmerUi />
        </div>
      </>
    );
  }
  if (onlineStatus == false)
    return (
      <h1>Your Internet Connection is Lost Please Check Your Internet!!</h1>
    );
  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Enter Resturant Name"
            value={resSearch}
            onChange={(e) => {
              setResSearch(e.target.value);
            }}
          />
       
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              console.log(resSearch);

              const resSearchList = resturantList.filter((res) =>
                res.name.toLowerCase().includes(resSearch.toLowerCase())
              );
              console.log(resSearchList);
              setCopyResturantList(resSearchList);
            }}
          >
            search
          </button>
        </div>
         <div className="">
          
        <button className=" px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"onClick={handleClick}>Top Rated Resturatnts </button>
        </div>
      </div>
      <div className="flex flex-wrap p-2 m-2">
        {copyResturantList.map((resturant) => (
          <Link to={"resturants/" + resturant?.id} key={resturant?.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
