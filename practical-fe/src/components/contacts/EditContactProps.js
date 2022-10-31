import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../redux/contacts/contactSlice";
import { AddContactsForm } from "./AddContactsForm";
import { EditContact } from "./EditContact";

export default function App() {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [contact, setContact] = React.useState({
    name: "",
    mobileNum: "",
    workNum: "",
    homeNum: "",
    mainAddress: "",
    secAddress: "",
  });

  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContactId = useSelector((state) => state.selectedContact);

  const selectedContact =
    selectedContactId &&
    contacts.find((contact) => contact.id === selectedContactId);

  // eslint-disable-next-line
  const setValues = () => {
    setContact({
      name: selectedContact.name,
      mobileNum: selectedContact.mobileNum,
      workNum: selectedContact.workNum,
      homeNum: selectedContact.homeNum,
      mainAddress: selectedContact.mainAddress,
      secAddress: selectedContact.secAddress,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.mobileNum || !selectedContactId) {
      handleCancelUpdate();
      return;
    }

    dispatch(
      updateContact({
        id: selectedContactId,
        name: contact.name,
        mobileNum: contact.mobileNum,
        workNum: contact.workNum,
        homeNum: contact.homeNum,
        mainAddress: contact.mainAddress,
        secAddress: contact.secAddress,
      })
    );
    setIsEditMode(false);
    setContact({
      name: "",
      mobileNum: "",
      workNum: "",
      homeNum: "",
      mainAddress: "",
      secAddress: "",
    });
  };

  const handleCancelUpdate = (e) => {
    setIsEditMode(false);
    setContact({
      name: "",
      mobileNum: "",
      workNum: "",
      homeNum: "",
      mainAddress: "",
      secAddress: "",
    });
  };

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  return (
    <div className="App">
      {isEditMode ? (
        <EditContact
          contact={contact}
          setContact={setContact}
          selectedContact={selectedContact}
          isEditMode={isEditMode}
          handleUpdate={handleUpdate}
          handleCancelUpdate={handleCancelUpdate}
          handleChange={handleChange}
        />
      ) : (
        <AddContactsForm />
      )}
    </div>
  );
}
