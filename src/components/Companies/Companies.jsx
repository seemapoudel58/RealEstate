import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="c-wrapper ">
      <div className=" paddings innerWidth  flexCenter c-container">
        <img src="./tower.png" alt="tower" />
        <img src="./realty.png" alt="realty" />
        <img src="./prologis.png" alt="prologis" />
        <img src="./equinix.png" alt="equinix" />
      </div>
    </section>
  );
};

export default Companies;