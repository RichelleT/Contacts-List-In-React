import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  error: null,
  status: "idle",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactAdded: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
export const selectAllContact = (state) => state.contacts.contacts;
export const getPostsStatus = (state) => state.contacts.status;
export const getPostsError = (state) => state.contacts.error;

export default contactSlice.reducer;
