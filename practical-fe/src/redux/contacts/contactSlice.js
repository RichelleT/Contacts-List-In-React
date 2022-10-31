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

// eslint-disable-next-line
const setItem = (
  name,
  mobileNum,
  workNum,
  homeNum,
  mainAddress,
  secAddress
) => {
  localStorage.setItem("contactName", JSON.stringify(name));
  localStorage.setItem("mobileNum", JSON.stringify(mobileNum));
  localStorage.setItem("workNum", JSON.stringify(workNum));
  localStorage.setItem("homeNum", JSON.stringify(homeNum));
  localStorage.setItem("mainAddress", JSON.stringify(mainAddress));
  localStorage.setItem("secAddress", JSON.stringify(secAddress));
};
// eslint-disable-next-line
const name =
  localStorage.getItem("contactName") !== null
    ? JSON.parse(localStorage.getItem("contactName"))
    : [];

// eslint-disable-next-line
const mobileNum =
  localStorage.getItem("mobileNum") !== null
    ? JSON.parse(localStorage.getItem("mobileNum"))
    : [];

// eslint-disable-next-line
const workNum =
  localStorage.getItem("workNum") !== null
    ? JSON.parse(localStorage.getItem("workNum"))
    : [];

// eslint-disable-next-line
const homeNum =
  localStorage.getItem("homeNum") !== null
    ? JSON.parse(localStorage.getItem("homeNum"))
    : [];

// eslint-disable-next-line
const mainAddress =
  localStorage.getItem("mainAddress") !== null
    ? JSON.parse(localStorage.getItem("mainAddress"))
    : [];

// eslint-disable-next-line
const secAddress =
  localStorage.getItem("secAddress") !== null
    ? JSON.parse(localStorage.getItem("secAddress"))
    : [];

export const { contactAdded } = contactSlice.actions;
export const selectAllContact = (state) => state.contacts;

export default contactSlice.reducer;
