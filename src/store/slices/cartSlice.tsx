import { createSlice } from "@reduxjs/toolkit";
import { productStateType } from "../../Types/ProductState_TYPE";
//images Path
import { images } from "../imagesPaths/shoesImages";
import { count } from "console";

const initialState: productStateType[] = [
  {
    id: "1",
    shoeName: "Nike Original 1",
    slug: "Nike-Original-1",
    price: 100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe1,
    count: 1,

    added: false,
  },
  {
    id: "2",
    shoeName: "Nike Original 2",
    slug: "Nike-Original-2",
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe2,
    count: 1,
    added: false,
  },
  {
    id: "3",
    shoeName: "Nike Original 3",
    slug: "Nike-Original-3",
    price: 220,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe3,
    count: 1,
    added: false,
  },
  {
    id: "4",
    shoeName: "Nike Original 4",
    slug: "Nike-Original-4",
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe4,
    count: 1,
    added: false,
  },
  {
    id: "5",
    shoeName: "Nike Original 5",
    slug: "Nike-Original-5",
    price: 150,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe5,
    count: 1,
    added: false,
  },
  {
    id: "6",
    shoeName: "Nike Original 6",
    slug: "Nike-Original-6",
    price: 100,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe6,
    count: 1,
    added: false,
  },
  {
    id: "7",
    shoeName: "Nike Original 7",
    slug: "Nike-Original-7",
    price: 250,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe7,
    count: 1,
    added: true,
  },
  {
    id: "8",
    shoeName: "Nike Original 8",
    slug: "Nike-Original-8",
    price: 300,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe8,
    count: 1,
    added: true,
  },
  {
    id: "9",
    shoeName: "Nike Original 9",
    slug: "Nike-Original-9",
    price: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: images.Shoe9,
    count: 1,
    added: false,
  },
];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    ADD: (state, action) => {
      //this if condition will run 8 times because there are 9 product in it then it will go to else when it will find id which is === palyoad
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        } else
          return {
            ...product,
            added: true,
          };
      });
    },
    REMOVE: (state, action) => {
      return state.map((product) => {
        //this if condition will run 8 times because there are 9 product in it then it will go to else when it will find id which is === palyoad
        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            added: false,
          };
        }
      });
    },
    INCREMENT: (state, action) => {
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            count: product.count + 1,
          };
        }
      });
    },
    DECREMENT: (state, action) => {
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            count: product.count - 1,
          };
        }
      });
    },
  },
});

export const { ADD, REMOVE, INCREMENT, DECREMENT } = cartSlice.actions;
