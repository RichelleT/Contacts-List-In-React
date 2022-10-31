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
      const { id, name, mobileNum, workNum, homeNum, mainAddress, secAddress } =
        action.payload;
      const existingContact = state.contacts.map(
        (contact) => contact.id === id
      );
      console.log("existing");
      console.log(existingContact);
      if (existingContact) {
        existingContact.name = name;
        existingContact.mobileNum = mobileNum;
        existingContact.workNum = workNum;
        existingContact.homeNum = homeNum;
        existingContact.mainAddress = mainAddress;
        existingContact.secAddress = secAddress;
      }
    },
  },
});

export const selectContactById = (state, contactId) =>
  state.contacts.contacts.find((contact) => contact.id === contactId);

export const { contactAdded, clearAllContacts, removeContact, updateContact } =
  contactSlice.actions;

export const selectAllContact = (state) => state.contacts.contacts;

export default contactSlice.reducer;
