import React from "react";
import "./section2.scss";
import img1 from "../../assets/banner_1.jpg";
import img2 from "../../assets/banner_2.jpg";
import img3 from "../../assets/banner_3.jpg";

function Section2() {
  return (
    <section className="section2">
      <div className="container">
        <div className="women">
          <img src={img1} alt="" />
        </div>
        <div className="men">
          <img src={img2} alt="" />
        </div>
        <div className="accesories">
          <img src={img3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section2;
