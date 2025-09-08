import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [copyResturantList, setCopyResturantList] = useState([]);
  const [resSearch, setResSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const API =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.461421&lng=78.3346205&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
      const response = await fetch(API); // Renamed `data` to `response` for clarity
      const json = await response.json();

      // Correctly access the nested data from the `json` variable
      const cards = json?.data?.cards;

      // Ensure `cards` exists before filtering and mapping
      if (cards) {
        const infoList = cards
          .filter(
            (cardItem) =>
              cardItem.card && cardItem.card.card && cardItem.card.card.info
          )
          .map((cardItem) => cardItem.card.card.info);
          

        setResturantList(infoList);
        setCopyResturantList(infoList);
        console.log(infoList);
      }

    //  setCopyResturantList(cardInfo);
    //  setResturantList(cardInfo);
     console.log(cardInfo);
    } catch (error) {
      console.log("Failed to fetch data:", error); // Add a more descriptive error message
    }
  };

  const handleClick = () => {
    setCopyResturantList(
      resturantList.filter(
        (res) =>res.avgRatingString > 4.1
      )
    );
  };
if(resturantList.length==0) {
  
  return (
    <>
    <div className="res-container" style={{height:"379px"}}>
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
   
    
  )
}
  return (
    <div className="body">
      
      <div className="filter-list">
        <input type="text" placeholder="Enter Resturant Name" value={resSearch} onChange={(e)=>{
          setResSearch(e.target.value)
          
        }}/>
        <button onClick={()=>{
          console.log(resSearch);

          const resSearchList = resturantList.filter((res)=> res.name.toLowerCase().includes(resSearch.toLowerCase()));
          console.log(resSearchList);
             setCopyResturantList(resSearchList);
          
          
        }}>search</button>
        <button onClick={handleClick}>Filter List</button>
      </div>
      <div className="res-container">
        {copyResturantList.map((resturant) => (
          <Link to={"resturants/"+ resturant?.id} key={resturant?.id}>
          <ResturantCard  resData={resturant} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;