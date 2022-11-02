import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectContactById,
  updateContact,
} from "../../redux/contacts/contactSlice";
import { ThemeContext } from "../common/theme/ThemeContext";

export function EditContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { contactId } = useParams();
  const contacts = useSelector((state) => selectContactById(state, contactId));
  // eslint-disable-next-line
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
      }
      navigate("/contacts");
    }
  };

  const handleCancel = () => {
    navigate("/contacts");
  };

  const canSaveContact = Boolean(name) && Boolean(mobileNum);

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
            <form
              className="my-4 mx-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="contactName">Contact Name:</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                onChange={onNameChanged}
                value={name || contacts.name}
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
                onChange={onMobileNumChanged}
                value={mobileNum || contacts.mobileNum}
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
                onChange={onWorkNumChanged}
                value={workNum || contacts.workNum}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
              />
              <br />
              <br />
              <label htmlFor="homeNum">Home Number:</label>
              <input
                type="number"
                id="homeNum"
                name="homeNum"
                onChange={onHomeNumChanged}
                value={homeNum || contacts.homeNum}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 12))}
              />
              <br />
              <br />
              <label htmlFor="mainAddress">Main Address:</label>
              <input
                type="text"
                id="mainAddress"
                name="mainAddress"
                onChange={onMainAddressChanged}
                value={mainAddress || contacts.mainAddress}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 30))}
              />
              <br />
              <br />
              <label htmlFor="secAddress">Secondary/Optional Address:</label>
              <input
                type="text"
                id="secAddress"
                name="secAddress"
                onChange={onSecAddressChanged}
                value={secAddress || contacts.secAddress}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 30))}
              />
              <br />
              <br />
              <button
                className="btn btn-primary m-3"
                type="button"
                onClick={handleClick}
                disabled={!canSaveContact}
              >
                Edit Contact
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
