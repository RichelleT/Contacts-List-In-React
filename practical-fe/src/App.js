import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import styles & components
import "./App.css";
import Landing from "./components/landing/Landing";
import ContactsList from "./components/contacts/ContactsList";
import { AddContactsForm } from "./components/contacts/AddContactsForm";
import { SingleContactPage } from "./components/contacts/SingleContactPage";
import { EditContact } from "./components/contacts/EditContact";

function App() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/addContact" element={<AddContactsForm />} />
        <Route path="/contact/:contactId" element={<SingleContactPage />} />
        <Route path="/contact/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
