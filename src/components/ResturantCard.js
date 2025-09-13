const ResturantCard = ({ resData }) => {
  // Destructure the individual properties you need from `resData`
  const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } = resData;

  return (
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <div className="res-img">
        <img
        alt="restaurant-logo"
        className="w-[250] h-[200] rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      </div>
      
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResturantCard;