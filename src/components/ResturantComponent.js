import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResutrantMenu";


const ResturantComponent = () => {
  
  const {resId} = useParams();
  const resInfo = useResturantMenu(resId);
  
  if(resInfo == null) return <ShimmerUi />
  return (
    <div className="menu">
        <h1>{resInfo.name}</h1>
        <div className="card">
          <span>Rating : {resInfo.avgRatingString} (</span>
          <span>Total Ratings : {resInfo.totalRatingsString})</span>
          <p style={{color:"blue"}}>{resInfo.costForTwoMessage}</p>
          <p style={{color:"red"}}>{resInfo.cuisines.join(', ')}</p>
          <p> Locality : {resInfo.locality}</p>
        </div>
    </div>
  )
}

export default ResturantComponent