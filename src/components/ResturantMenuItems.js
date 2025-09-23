import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function ResturantMenuItems({itemList}) {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };


  return (
    <div>
      <div
        className="w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer "
        onClick={handleClick}
      >
        <div className="flex justify-between">
            <span className="font-bold">{itemList.card.card.title}({itemList.card.card.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        
        {showItems && <ItemList items={itemList.card.card.itemCards} />}
      </div>
    </div>
  );
}

export default ResturantMenuItems;
