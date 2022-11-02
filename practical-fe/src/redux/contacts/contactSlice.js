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
      prepare(
        name,
        mobileNum,
        workNum,
        homeNum,
        mainAddress,
        secAddress,
        favourite,
        addedTime
      ) {
        return {
          payload: {
            id: nanoid(),
            name,
            mobileNum,
            workNum,
            homeNum,
            mainAddress,
            secAddress,
            favourite: false,
            addedTime,
          },
        };
      },
    },

    toggleFavourite: (state, action) => {
      const contF = state.contacts.find((cont) => cont.id === action.payload);
      if (contF) {
        contF.favourite = !contF.favourite;
      }
    },

    clearAllContacts: (state) => {
      state.contacts = [];
    },

    removeContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((item) => item.id !== contactId);
    },

    updateContact: (state, action) => {
      const {
        id,
        name,
        mobileNum,
        workNum,
        homeNum,
        mainAddress,
        secAddress,
        favourite,
      } = action.payload;
      const contactId = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (state.contacts.filter((contact) => contact.id === contactId)) {
        const newArray = [...state.contacts];
        newArray[index].id = id;
        newArray[index].name = name;
        newArray[index].mobileNum = mobileNum;
        newArray[index].workNum = workNum;
        newArray[index].homeNum = homeNum;
        newArray[index].mainAddress = mainAddress;
        newArray[index].secAddress = secAddress;
        newArray[index].favourite = favourite;
        console.log(JSON.stringify(newArray));
      }
    },
  },
});

export const selectContactById = (state, contactId) =>
  state.contacts.contacts.find((contact) => contact.id === contactId);

export const {
  contactAdded,
  clearAllContacts,
  removeContact,
  updateContact,
  toggleFavourite,
} = contactSlice.actions;

export const selectAllContact = (state) => state.contacts.contacts;

export default contactSlice.reducer;
