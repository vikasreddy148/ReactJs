import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import { RES_API } from "../utils/constants";

const ResturantComponent = () => {
  const [resInfo,setResInfo]= useState(null);
  const {resId} = useParams();
  
useEffect(()=>{
  fetchMenu();
},[])

const fetchMenu = async ()=>{
  const API =  RES_API + resId;
  console.log(API);
  const data =  await fetch(API);
  const json = await data.json();
   let cardInfo = json?.data?.cards?.find((c)=> c?.card?.card?.info);
      const newRes = cardInfo?.card?.card?.info;
      setResInfo(newRes);
  
}
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