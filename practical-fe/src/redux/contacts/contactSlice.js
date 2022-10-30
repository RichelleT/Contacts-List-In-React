import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Richelle Tan",
    mobileNum: "0119994567",
    workNum: "",
    homeNum: "",
    mainAddress: "bangsar south, kuala lumpur",
  },
  {
    id: 2,
    name: "Kim Yoo Jin",
    mobileNum: "0167894567",
    workNum: "088497238",
    homeNum: "",
    mainAddress: "subang jaya, selangor",
  },
  //   {
  //     id: 3,
  //     name: "Kim Yoo Jin",
  //     mobileNum: "0167894567",
  //     workNum: "088497238",
  //     homeNum: "",
  //     mainAddress: "subang jaya, selangor",
  //   },
  //   {
  //     id: 4,
  //     name: "Richelle Tan",
  //     mobileNum: "0119994567",
  //     workNum: "",
  //     homeNum: "",
  //     mainAddress: "bangsar south, kuala lumpur",
  //   },
  //   {
  //     id: 5,
  //     name: "Kim Yoo Jin",
  //     mobileNum: "0167894567",
  //     workNum: "088497238",
  //     homeNum: "",
  //     mainAddress: "subang jaya, selangor",
  //   },
  //   {
  //     id: 6,
  //     name: "Richelle Tan",
  //     mobileNum: "0119994567",
  //     workNum: "",
  //     homeNum: "",
  //     mainAddress: "bangsar south, kuala lumpur",
  //   },
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
