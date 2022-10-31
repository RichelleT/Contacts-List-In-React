import * as React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Header from "../common/header/Header";
// import { useNavigate } from "react-router-dom";
// import { updateContact } from "../../redux/contacts/contactSlice";

export function EditContact() {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Edit Contact</h2>
        <form>
          <label htmlFor="contactName">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            // onChange={onNameChanged}
            // value={name}
          />
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="text"
            id="mobileNum"
            name="mobileNum"
            // onChange={onMobileNumChanged}
            // value={mobileNum}
          />
          <label htmlFor="workNum">Work Number:</label>
          <input
            type="text"
            id="workNum"
            name="workNum"
            // onChange={onWorkNumChanged}
            // value={workNum}
          />
          <label htmlFor="homeNum">Home Number:</label>
          <input
            type="text"
            id="homeNum"
            name="homeNum"
            // onChange={onHomeNumChanged}
            // value={homeNum}
          />
          <label htmlFor="mainAddress">Main Address:</label>
          <input
            type="text"
            id="mainAddress"
            name="mainAddress"
            // onChange={onMainAddressChanged}
            // value={mainAddress}
          />
          <label htmlFor="secAddress">Secondary/Optional Address:</label>
          <input
            type="text"
            id="secAddress"
            name="secAddress"
            // onChange={onSecAddressChanged}
            // value={secAddress}
          />
          <button
            className="btnA"
            type="button"
            //   onClick={handleClick}
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}
