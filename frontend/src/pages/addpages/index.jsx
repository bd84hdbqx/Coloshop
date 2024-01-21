import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallproducts } from "../../redux/slices/productSlices";
import BasicTable from "../../components/table";
import Header from "../../layout/Hedaer";
import { useEffect } from "react";
import Form from "../../components/forms";
function AddPage() {
  const [inpValue, setInpValue] = useState("");
  const product = useSelector((state) => state.products.product);

  return (
    <>
      <Header />
      <div className="container">
        <div>
          <input
            placeholder="search"
            type="text"
            onChange={(e) => {
              setInpValue(e.target.value.toLowerCase());
            }}
          />
        </div>
        <Form />
        <BasicTable inpValue={inpValue} />
      </div>
    </>
  );
}

export default AddPage;
