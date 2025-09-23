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
    
    // console.log(json?.data?.cards[4])
    setResInfo(json);
    
  };
  return resInfo;
};
export default useResturantMenu;
