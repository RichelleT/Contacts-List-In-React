import * as React from "react";
import { useDispatch } from "react-redux";
import { contactAdded } from "../../redux/contacts/contactSlice";
import Header from "../common/header/Header";
import { useNavigate } from "react-router-dom";

export const AddContactsForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [mobileNum, setMobileNum] = React.useState("");
  const [workNum, setWorkNum] = React.useState("");
  const [homeNum, setHomeNum] = React.useState("");
  const [mainAddress, setMainAddress] = React.useState("");
  const [secAddress, setSecAddress] = React.useState("");

  const onNameChanged = (event) => setName(event.target.value);
  const onMobileNumChanged = (event) => setMobileNum(event.target.value);
  const onWorkNumChanged = (event) => setWorkNum(event.target.value);
  const onHomeNumChanged = (event) => setHomeNum(event.target.value);
  const onMainAddressChanged = (event) => setMainAddress(event.target.value);
  const onSecAddressChanged = (event) => setSecAddress(event.target.value);

  const onAddContactClicked = () => {
    if (name && mobileNum) {
      dispatch(
        contactAdded(name, mobileNum, workNum, homeNum, mainAddress, secAddress)
      );
      setName("");
      setMobileNum("");
      setWorkNum("");
      setHomeNum("");
      setMainAddress("");
      setSecAddress("");
    }
    navigate("/contacts");
  };

  const canAddContact = Boolean(name) && Boolean(mobileNum);

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h3>Add New Contact</h3>
        <form>
          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={name}
            onChange={onNameChanged}
          />
          <label htmlFor="contactName">Mobile Number:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={mobileNum}
            onChange={onMobileNumChanged}
          />
          <label htmlFor="contactName">Work Number:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={workNum}
            onChange={onWorkNumChanged}
          />
          <label htmlFor="contactName">Home Number:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={homeNum}
            onChange={onHomeNumChanged}
          />
          <label htmlFor="contactName">Main Address:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={mainAddress}
            onChange={onMainAddressChanged}
          />
          <label htmlFor="contactName">Secondary/Optional Address:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={secAddress}
            onChange={onSecAddressChanged}
          />
          <button
            className="btnA"
            type="button"
            onClick={onAddContactClicked}
            disabled={!canAddContact}
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};
