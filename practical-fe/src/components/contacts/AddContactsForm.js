import * as React from "react";
import { useDispatch } from "react-redux";
import { contactAdded } from "../../redux/contacts/contactSlice";
import Header from "../common/header/Header";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../common/theme/ThemeContext";

export const AddContactsForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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

  const backToCL = () => {
    navigate("/contacts");
  };

  return (
    <div>
      <Header />
      <section className={`${darkMode ? "lightContBg" : "darkContBg"}`}>
        <div className="container noBorder">
          <h3>Add New Contact</h3>
          <div
            className={`${
              darkMode
                ? "card w-50 mx-auto lightCardBg"
                : "card w-50 mx-auto darkCardBg"
            }`}
          >
            <form className="my-3 mx-3">
              <label htmlFor="contactName">Contact Name:</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={name}
                onChange={onNameChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
                required
              />
              <br />
              <br />
              <label htmlFor="mobileNum">Mobile Number:</label>
              <input
                type="number"
                id="mobileNum"
                name="mobileNum"
                value={mobileNum}
                onChange={onMobileNumChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
                required
              />
              <br />
              <br />
              <label htmlFor="workNum">Work Number:</label>
              <input
                type="number"
                id="workNum"
                name="workNum"
                value={workNum}
                onChange={onWorkNumChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
              />
              <br />
              <br />
              <label htmlFor="homeNum">Home Number:</label>
              <input
                type="tel"
                id="homeNum"
                name="homeNum"
                value={homeNum}
                onChange={onHomeNumChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
              />
              <br />
              <br />
              <label htmlFor="mainAddress">Main Address:</label>
              <input
                type="text"
                id="mainAddress"
                name="mainAddress"
                value={mainAddress}
                onChange={onMainAddressChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 30))}
              />
              <br />
              <br />
              <label htmlFor="secAddress">Secondary/Optional Address:</label>
              <input
                type="text"
                id="secAddress"
                name="secAddress"
                value={secAddress}
                onChange={onSecAddressChanged}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 30))}
              />
              <br />
              <br />
              <button
                className="btn btn-primary m-3"
                type="button"
                onClick={onAddContactClicked}
                disabled={!canAddContact}
              >
                Add Contact
              </button>
              <button className="btn btn-danger" onClick={backToCL}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
