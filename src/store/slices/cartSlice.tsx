import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, productName: "Product1", description: "lorem10", price: 100 },
];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {},
});
