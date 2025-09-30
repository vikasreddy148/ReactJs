import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";

function ItemList({ items }) {
  const dispatch = useDispatch();
const handleAddItem = (item) =>{
  dispatch(addItem(item))
}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="">
            <button className="absolute bg-white text-green-400 p-3 font-bold rounded-lg cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
          </div>
          <div className="w-3/12 p-4 rounded-lg">
          <img src={IMG_URL + item.card.info.imageId} className="w-full rounded-2xl" alt="" />
            
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default ItemList;
