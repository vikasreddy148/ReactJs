const ResturantCard = (props) => {
  const { resData } = props;
  const { info, distance } = resData;
  const { name } = resData.info;
  const { url } = resData.info.image;
  const { rating } = resData.info.ratingNew.ratings.DINING;
  const { cft, cfo } = info;

  return (
    <div className="res-card">
      <div className="res-img">
        <img alt="res image" className="res-logo" src={url} />
      </div>
      <h3>{name}</h3>
      <h4></h4>
      <h5>{rating}</h5>
      <h5>{cfo.text}</h5>
      <h5>{cft.text}</h5>

      <h5>{distance}</h5>
    </div>
  );
};
export default ResturantCard;