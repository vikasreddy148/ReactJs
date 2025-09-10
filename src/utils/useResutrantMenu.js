import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_API + resId);
    const json = await response.json();
    let cardInfo = json?.data?.cards?.find((c) => c?.card?.card?.info);
    const newRes = cardInfo?.card?.card?.info;
    setResInfo(newRes);
    
  };
  return resInfo;
};
export default useResturantMenu;
