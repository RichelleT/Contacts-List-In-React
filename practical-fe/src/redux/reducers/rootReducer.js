import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import contacts from "./contactReducer";

const rootReducer = combineReducers({
  contacts,
  apiCallsInProgress,
});

export default rootReducer;
