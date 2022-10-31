import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
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
    clearAllContacts: (state) => {
      state.contacts = [];
    },
    removeContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((item) => item.id !== contactId);
    },
    updateContact: (state, action) => {
      // eslint-disable-next-line
      state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
          contact.mobileNum = action.payload.mobileNum;
          contact.workNum = action.payload.workNum;
          contact.homeNum = action.payload.homeNum;
          contact.mainAddress = action.payload.mainAddress;
          contact.secAddress = action.payload.secAddress;
        }
      });
    },
  },
});

export const selectContactById = (state, contactId) =>
  state.contacts.contacts.find((contact) => contact.id === contactId);

export const { contactAdded, clearAllContacts, removeContact, updateContact } =
  contactSlice.actions;
export const selectAllContact = (state) => state.contacts.contacts;

export default contactSlice.reducer;
