import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import LayoutVans from "../components/LayoutVans";

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
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        {currentVansData ? (
          <section>
            <div className="host-van-detail">
              <img src={currentVansData.imageUrl} alt="" />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVansData.type}`}>
                  {currentVansData.type}
                </i>
                <h3>{currentVansData.name}</h3>
                <h4>${currentVansData.price}/day</h4>
              </div>
            </div>
            <LayoutVans />
            {/* <Outlet /> */}
          </section>
        ) : (
          <h2>Van loading in progress...</h2>
        )}
      </div>
    </section>
  );
}

export default HostVanDetails;
