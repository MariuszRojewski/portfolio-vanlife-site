import React from "react";
import { useParams } from "react-router-dom";

function VanDetails() {
  const [vanData, setVanData] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {vanData ? (
        <div className="van-detail">
          <img src={vanData.imageUrl} />
          <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
          <h2>{vanData.name}</h2>
          <p className="van-price">
            <span>${vanData.price}</span>/day
          </p>
          <p>{vanData.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Van loading...</h2>
      )}
    </div>
  );
}

export default VanDetails;
