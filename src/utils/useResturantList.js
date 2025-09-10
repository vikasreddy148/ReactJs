import { useEffect, useState } from "react";

const useResturantList = () => {
  const [resturantList, setResturantList] = useState([]);

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
      }
    } catch (error) {
      console.log("Failed to fetch data:", error); // Add a more descriptive error message
    }
  };
  return resturantList;
};
export default useResturantList;
