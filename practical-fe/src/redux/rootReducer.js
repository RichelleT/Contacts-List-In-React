import { combineReducers } from "redux";
import { contactSlice } from "./contacts/contactSlice";

export const rootReducer = combineReducers({
  contact: contactSlice.reducer,
});
