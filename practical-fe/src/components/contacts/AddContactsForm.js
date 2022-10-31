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
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="text"
            id="mobileNum"
            name="mobileNum"
            value={mobileNum}
            onChange={onMobileNumChanged}
          />
          <label htmlFor="workNum">Work Number:</label>
          <input
            type="text"
            id="workNum"
            name="workNum"
            value={workNum}
            onChange={onWorkNumChanged}
          />
          <label htmlFor="homeNum">Home Number:</label>
          <input
            type="text"
            id="homeNum"
            name="homeNum"
            value={homeNum}
            onChange={onHomeNumChanged}
          />
          <label htmlFor="mainAddress">Main Address:</label>
          <input
            type="text"
            id="mainAddress"
            name="mainAddress"
            value={mainAddress}
            onChange={onMainAddressChanged}
          />
          <label htmlFor="secAddress">Secondary/Optional Address:</label>
          <input
            type="text"
            id="secAddress"
            name="secAddress"
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
