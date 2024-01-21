import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addTable } from "../../redux/slices/productSlices";

function Form({ inpValue }) {
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      price: "",
      img: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(addTable(values));
    },
  });
  return (
    <>
      <form action="" onSubmit={handleSubmit} style={{ width: "400px" }}>
        <div>
          <TextField
            name="name"
            label="name"
            variant="standard"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField label="img" variant="standard" onChange={handleChange} />
        </div>
        <div>
          <TextField label="price" variant="standard" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
