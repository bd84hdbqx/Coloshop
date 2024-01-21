import React from "react";
import Header from "../../layout/Hedaer";
import Card2 from "../../components/card2";
import { useSelector, useDispatch } from "react-redux";

function Basket() {
  const basket = useSelector((state) => state.baskets.basket);
  const total = useSelector((state) => state.baskets.total);

  return (
    <>
      <Header />
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        <div>total{total}</div>
        {basket &&
          basket.map((elem, i) => {
            return <Card2 key={i} elem={elem} />;
          })}
      </div>
    </>
  );
}

export default Basket;
