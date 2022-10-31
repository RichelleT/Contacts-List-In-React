import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectContactById,
  updateContact,
} from "../../redux/contacts/contactSlice";

export function EditContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();
  const contacts = useSelector((state) => selectContactById(state, contactId));

  const [id, setId] = React.useState("");
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

  const handleClick = () => {
    console.log(contacts.id);
    console.log(contactId);
    if (contacts.id === contactId) {
      if (name && mobileNum) {
        dispatch(
          updateContact({
            id: contacts.id,
            name,
            mobileNum,
            workNum,
            homeNum,
            mainAddress,
            secAddress,
          })
        );
        setName("");
        setMobileNum("");
        setWorkNum("");
        setHomeNum("");
        setMainAddress("");
        setSecAddress("");
        setId("");
        console.log(name);
      }
      navigate("/contacts");
    }
  };

  const canSaveContact = Boolean(name) && Boolean(mobileNum);

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Edit Contact</h2>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            onChange={onNameChanged}
            value={name}
          />
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="text"
            id="mobileNum"
            name="mobileNum"
            onChange={onMobileNumChanged}
            value={mobileNum}
          />
          <label htmlFor="workNum">Work Number:</label>
          <input
            type="text"
            id="workNum"
            name="workNum"
            onChange={onWorkNumChanged}
            value={workNum}
          />
          <label htmlFor="homeNum">Home Number:</label>
          <input
            type="text"
            id="homeNum"
            name="homeNum"
            onChange={onHomeNumChanged}
            value={homeNum}
          />
          <label htmlFor="mainAddress">Main Address:</label>
          <input
            type="text"
            id="mainAddress"
            name="mainAddress"
            onChange={onMainAddressChanged}
            value={mainAddress}
          />
          <label htmlFor="secAddress">Secondary/Optional Address:</label>
          <input
            type="text"
            id="secAddress"
            name="secAddress"
            onChange={onSecAddressChanged}
            value={secAddress}
          />
          <button
            className="btnA"
            type="button"
            onClick={handleClick}
            disabled={!canSaveContact}
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}
