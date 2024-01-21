import React from "react";
import "./card.scss";
import { useSelector, useDispatch } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlices";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { addWishlist } from "../../redux/slices/wishlistSlices";

function Card({ elem }) {
  const basket = useSelector((state) => state.baskets.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <div className="cardimg">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#f82020", marginLeft: "250px", fontSize: "30px" }}
            onClick={() => {
              dispatch(addWishlist(elem));
            }}
          />
          <img src={elem.img} alt="" />
        </div>
        <div className="carddetail">
          <h3>{elem.name}</h3>
          <h4>{elem.price}</h4>

          <button
            className="btn"
            onClick={() => {
              dispatch(addBasket({ ...elem, quantity: 1 }));
            }}
          >
            add to cart
          </button>

          {/* <Button
            variant="outlined"
            onClick={() => {
              navigate("/products/"+ {elem._id});
            }}
          >
            Detail
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Card;
