import * as React from "react";
import Header from "../common/header/Header";

export const EditContact = ({
  contact,
  setContact,
  selectedContact,
  isEditMode,
  handleUpdate,
  handleCancelUpdate,
  handleChange,
}) => {
  React.useEffect(() => {
    setContact({
      name: selectedContact.name,
      mobileNum: selectedContact.mobileNum,
      workNum: selectedContact.workNum,
      homeNum: selectedContact.homeNum,
      mainAddress: selectedContact.mainAddress,
      secAddress: selectedContact.secAddress,
    });
  }, [
    selectedContact.name,
    selectedContact.mobileNum,
    selectedContact.workNum,
    selectedContact.homeNum,
    selectedContact.mainAddress,
    selectedContact.secAddress,
    setContact,
  ]);

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Edit Contact</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="text"
            id="mobileNum"
            name="mobileNum"
            value={contact.mobileNum}
            onChange={handleChange}
          />
          <label htmlFor="workNum">Work Number:</label>
          <input
            type="text"
            id="workNum"
            name="workNum"
            value={contact.workNum}
            onChange={handleChange}
          />
          <label htmlFor="homeNum">Home Number:</label>
          <input
            type="text"
            id="homeNum"
            name="homeNum"
            value={contact.homeNum}
            onChange={handleChange}
          />
          <label htmlFor="mainAddress">Main Address:</label>
          <input
            type="text"
            id="mainAddress"
            name="mainAddress"
            value={contact.mainAddress}
            onChange={handleChange}
          />
          <label htmlFor="secAddress">Secondary/Optional Address:</label>
          <input
            type="text"
            id="secAddress"
            name="secAddress"
            value={contact.secAddress}
            onChange={handleChange}
          />
          <button
            className="btnA"
            type="button"
            value="Update Contact"
            onClick={handleUpdate}
          >
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
  //   }
};
