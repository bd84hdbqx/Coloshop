import React from "react";
import "../card/card.scss";
import "./card2.scss";
import { incremet } from "../../redux/slices/basketSlices";
import { useSelector, useDispatch } from "react-redux";
import { decrement, deleteBasket } from "../../redux/slices/basketSlices";

function Card2({ elem }) {
  const basket = useSelector((state) => state.baskets.basket);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <div className="cardimg">
          <img src={elem.img} alt="" />
        </div>
        <div className="carddetail">
          <h3>{elem.name}</h3>
          <h4>{elem.price}</h4>
          <button
            style={{
              border: "1px solid black",
              height: "20px",
              width: "100px",
            }}
            onClick={() => {
              dispatch(deleteBasket(elem));
            }}
          >
            delete
          </button>
          <button
            className="inc"
            onClick={() => {
              dispatch(incremet(elem));
            }}
          >
            +
          </button>
          <span>{elem.quantity}</span>
          <button
            className="dec"
            onClick={() => {
              dispatch(decrement(elem));
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Card2;
