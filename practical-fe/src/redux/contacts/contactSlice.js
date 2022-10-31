import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Richelle Tan",
    mobileNum: "0119994567",
    workNum: "",
    homeNum: "",
    mainAddress: "bangsar south, kuala lumpur",
    secAddress: "",
  },
  {
    id: 2,
    name: "Kim Yoo Jin",
    mobileNum: "0167894567",
    workNum: "088497238",
    homeNum: "",
    mainAddress: "subang jaya, selangor",
    secAddress: "bangsar south, kuala lumpur",
  },
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, mobileNum, workNum, homeNum, mainAddress, secAddress) {
        return {
          payload: {
            id: nanoid(),
            name,
            mobileNum,
            workNum,
            homeNum,
            mainAddress,
            secAddress,
          },
        };
      },
    },
  },
});

export const { contactAdded } = contactSlice.actions;

export const selectAllContact = (state) => state.contacts;

export default contactSlice.reducer;
