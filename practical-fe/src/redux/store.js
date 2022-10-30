import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
