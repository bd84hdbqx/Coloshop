import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getallproducts = createAsyncThunk("getallproducts", async () => {
  const response = await axios("http://localhost:5000/api/products");
  return response.data;
});

const initialState = {
  product: [],
  error: "",
  loading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.product = state.product.filter(
        (elem) => elem._id !== action.payload._id
      );
      axios
        .delete(`http://localhost:5000/api/products/${action.payload._id}`)
        .then((res) => {});
    },
    addTable: (state, action) => {
      console.log(action.payload);
      state.product.push(action.payload);
      axios
        .post("http://localhost:5000/api/products/", action.payload)
        .then((res) => {
          return res.data;
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getallproducts.pending, (state, action) => {
      state.loading = true;
      state.product = action.payload;
    });
    //fulfilled
    builder.addCase(getallproducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    //rejected
    builder.addCase(getallproducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { deleteProduct, addTable } = productSlice.actions;

export default productSlice.reducer;
