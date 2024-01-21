import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card";
import Header from "../../layout/Hedaer";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlists.wishlist);
  return (
    <>
      <Header />
      <div
        className="container"
        style={{ gap: "10px", display: "flex", flexWrap: "wrap" }}
      >
        {wishlist &&
          wishlist.map((elem, i) => {
            return <Card elem={elem} key={i} />;
          })}
      </div>
    </>
  );
}

export default Wishlist;
