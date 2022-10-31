import * as React from "react";
import Header from "../common/header/Header";

export const EditContact = () => {
  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Edit Contact</h2>
        <form>
          <label htmlFor="contactName">Contact Name:</label>
          <input type="text" id="contactName" name="contactName" />
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input type="text" id="mobileNum" name="mobileNum" />
          <label htmlFor="workNum">Work Number:</label>
          <input type="text" id="workNum" name="workNum" />
          <label htmlFor="homeNum">Home Number:</label>
          <input type="text" id="homeNum" name="homeNum" />
          <label htmlFor="mainAddress">Main Address:</label>
          <input type="text" id="mainAddress" name="mainAddress" />
          <label htmlFor="secAddress">Secondary/Optional Address:</label>
          <input type="text" id="secAddress" name="secAddress" />
          <button className="btnA" type="button">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};
