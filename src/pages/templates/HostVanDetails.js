import React from "react";
import { useParams } from "react-router-dom";

function HostVanDetails() {
  const [currentVansData, setcurrentVansData] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setcurrentVansData(data.vans));
  }, [params.id]);

  console.log(currentVansData);

  return (
    <div className="host-van-detail-layout-container">
      {currentVansData ? (
        <section>
          <div className="host-van-detail">
            <img src={currentVansData.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVansData.type}`}>
                {currentVansData.type}
              </i>
              <h3>{currentVansData.name}</h3>
              <h4>${currentVansData.price}/day</h4>
            </div>
          </div>
        </section>
      ) : (
        <h2>Van loading in progress...</h2>
      )}
    </div>
  );
}

export default HostVanDetails;
