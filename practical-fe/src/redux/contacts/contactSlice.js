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
      const { name, mobileNum, workNum, homeNum, mainAddress, secAddress } =
        action.payload;
      const contactId = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id !== action.payload
      );
      if (state.contacts.filter((item) => item.id !== contactId)) {
        const newArray = [...state.contacts];

        newArray[index].name = name;
        newArray[index].mobileNum = mobileNum;
        newArray[index].workNum = workNum;
        newArray[index].homeNum = homeNum;
        newArray[index].mainAddress = mainAddress;
        newArray[index].secAddress = secAddress;
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
