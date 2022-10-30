import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import styles & components
import "./App.css";
import Landing from "./components/landing/Landing";
import ContactsForm from "./components/contacts/ContactsForm";
import ContactsPage from "./components/contacts/ContactsPage";
import { ManageContactPage } from "./components/contacts/ManageContactsPage";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* add routes, header, footer, & toastcontainer in here */}
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/contactsForm" element={<ContactsForm />} />
        <Route path="/courses" component={ContactsPage} />
        <Route path="/course/:slug" component={ManageContactPage} />
        <Route path="/course" component={ManageContactPage} />
        <Route component={PageNotFound} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
