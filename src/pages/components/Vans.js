import React from "react";

function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const mapedVans = vans.map((van) => {
    return (
      <div key={van.id} className="van-title">
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            <span>${van.price}</span>/day
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <div className="van-list">{mapedVans}</div>
    </div>
  );
}

export default Vans;
