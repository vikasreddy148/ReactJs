import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResutrantMenu";
import ResturantMenuItems from "./ResturantMenuItems";

const ResturantComponent = () => {
  const [filteredItemList, setFilteredItemList] = useState(null);
  const { resId } = useParams();
  const json = useResturantMenu(resId);

  // console.log(json);

  const cardInfo = json?.data?.cards?.find((c) => c?.card?.card?.info);
  const resInfo = cardInfo?.card?.card?.info;

  useEffect(() => {
    // Use optional chaining to safely access nested properties
    const allItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    if (allItems) {
      const itemsFiltered = allItems.filter(
        (c) =>
          c?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setFilteredItemList(itemsFiltered);
    }
  }, [json]);

  // Use optional chaining for resInfo and check if filteredItemList is available before rendering.
  if (!resInfo || !filteredItemList) {
    return <ShimmerUi />;
  }

  return (
    <>
      <div className="w-12/12 mx-auto">
        <div className="card">
          <h1 className="text-4xl my-2 py-2 text-center font-bold ">{resInfo.name}</h1>
          <div className="text-center p-1">
            <span className="">Rating : {resInfo.avgRatingString} (</span>
            <span>Total Ratings : {resInfo.totalRatingsString})</span>
          </div>

          <div className="text-center">
            <p className="p-1 ">{resInfo.costForTwoMessage}</p>
            <p className="p-1 font-serif">{resInfo.cuisines.join(", ")}</p>
            <p className="p-1 font-serif"> Locality : {resInfo.locality}</p>
          </div>
        </div>
        {filteredItemList.map((category)=>{
          return <ResturantMenuItems key = {category?.card?.card?.title} itemList={category} />
        })
        
        }
      </div>
    </>
  );
};

export default ResturantComponent;