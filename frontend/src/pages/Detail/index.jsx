import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getallproducts } from "../../redux/slices/productSlices";
import Card from "../../components/card";

function Detail() {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallproducts());
  }, [dispatch]);
  const { id } = useParams();
  const cardFind = product?.find((elem) => elem._id == id);
  return (
    <>
      <div className="container">{cardFind && <Card elem={cardFind} />}</div>
    </>
  );
}

export default Detail;
