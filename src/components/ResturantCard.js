const ResturantCard = ({ resData }) => {
  // Destructure the individual properties you need from `resData`
  const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } = resData;

  return (
    <div className="res-card">
      <div className="res-img">
        <img
        alt="restaurant-logo"
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      </div>
      
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default ResturantCard;