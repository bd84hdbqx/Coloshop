import React, { useEffect } from "react";
import "./Section3.scss";
import Card from "../../components/card";
import { useSelector, useDispatch } from "react-redux";
import { getallproducts } from "../../redux/slices/productSlices";

function Section3() {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);

  return (
    <>
      <section className="section3">
        <div className="container">
          <h3>New Arrials</h3>
          <div className="categories">
            <div className="all">all</div>
            <div className="women">women</div>
            <div className="accesories">accesories</div>
            <div className="men">mens</div>
          </div>
          <div className="cardContainer">
            {product &&
              product.map((elem, i) => {
                return <Card key={i} elem={elem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
