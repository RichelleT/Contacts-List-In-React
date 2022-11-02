import { useDispatch, useSelector } from "react-redux";
import {
  selectContactById,
  removeContact,
  toggleFavourite,
} from "../../redux/contacts/contactSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from "../common/theme/ThemeContext";
import React from "react";
import Header from "../common/header/Header";

export const SingleContactPage = () => {
  const defImg = require("../../assets/defAvatarImg.png");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const contact = useSelector((state) => selectContactById(state, contactId));
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const backToCL = () => {
    navigate("/contacts");
  };

  if (!contact) {
    return (
      <div>
        <Header />
        <section className={`${darkMode ? "lightContBg" : "darkContBg"}`}>
          <div className="container noBorder">
            <p>Contact not found.</p>
            <button
              className={`${darkMode ? "btnA" : "btnA darkBtnCL"}`}
              onClick={backToCL}
            >
              Return to contacts list
            </button>
          </div>
        </section>
      </div>
    );
  }

  if (contact) {
    return (
      <section
        className={`${darkMode ? "lightContBg" : "darkContBg"}`}
        style={{ overflowX: "hidden" }}
      >
        <Header />
        <div className="container noBorder">
          <h2>Contact</h2>
          <div
            className={`${
              darkMode
                ? "card w-50 mx-auto lightCardBg"
                : "card w-50 mx-auto darkCardBg"
            }`}
          >
            <div className="row d-flex align-items-stretch my-3 mx-3">
              <div className="col-4 circleImgSrc">
                <img
                  src={defImg}
                  style={{ width: 56, height: 56 }}
                  alt="None"
                ></img>
              </div>
              <div className="col-8">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">
                  <b>Mobile Number:</b>
                  <br />
                  {contact.mobileNum}
                </p>
              </div>
            </div>
            <hr className="my-2 mx-2" />
            <details className="my-3 mx-3">
              {contact.workNum.length > 0 && contact.homeNum.length === 0 && (
                <>
                  <b>Work Number:</b> <br />
                  {contact.workNum}
                </>
              )}
              {contact.homeNum.length > 0 && contact.workNum.length === 0 && (
                <>
                  <b>Home Number:</b> <br />
                  {contact.homeNum}
                </>
              )}
              {contact.homeNum.length === 0 && contact.workNum.length === 0 && (
                <>
                  <b>No Additional Numbers Added</b> <br />
                </>
              )}
              {contact.workNum.length > 0 && contact.homeNum.length > 0 && (
                <>
                  <b>Work Number:</b> <br />
                  {contact.workNum}
                  <br />
                  <b>Home Number:</b> <br />
                  {contact.homeNum}
                </>
              )}
              <summary>Other Numbers</summary>
            </details>
            <hr className="my-2 mx-2" />
            <details className="my-3 mx-3">
              {contact.mainAddress.length > 0 &&
                contact.secAddress.length === 0 && (
                  <>
                    <b>Main Address:</b> <br />
                    {contact.mainAddress}
                  </>
                )}
              {contact.secAddress.length > 0 &&
                contact.mainAddress.length === 0 && (
                  <>
                    <b>Secondary Address:</b> <br />
                    {contact.secAddress}
                  </>
                )}
              {contact.secAddress.length === 0 &&
                contact.mainAddress.length === 0 && (
                  <>
                    <b>No Address Added</b> <br />
                  </>
                )}
              {contact.secAddress.length > 0 && contact.mainAddress.length > 0 && (
                <>
                  <b>Main Address:</b> <br />
                  {contact.mainAddress}
                  <br />
                  <b>Secondary Address:</b> <br />
                  {contact.secAddress}
                </>
              )}
              <summary>Addresses</summary>
            </details>
            <hr className="my-2 mx-2" />
            <div className="row d-flex align-items-center my-3 mx-3">
              <div className="col-4 justCent">
                <button className="iconBtn">
                  <i
                    className={`switch ${
                      contact.favourite ? "bi bi-star-fill" : "bi bi-star"
                    }`}
                    style={{ color: "orange" }}
                    title="Add favourite contact"
                    onClick={() => {
                      dispatch(toggleFavourite(contact.id));
                    }}
                  ></i>
                </button>
              </div>
              <div className="col-4 justCent">
                <button
                  className="iconBtn"
                  onClick={() => {
                    dispatch(removeContact(contact.id));
                  }}
                >
                  <i
                    className="bi bi-dash-lg"
                    style={{ color: "red" }}
                    title="Delete contact"
                  ></i>
                </button>
              </div>
              <div className="col-4 justCent">
                <Link to={`/contact/edit/${contact.id}`}>
                  <i
                    className="bi bi-three-dots"
                    title="Edit contact details"
                  ></i>
                </Link>
              </div>
            </div>
            <button
              className={`${darkMode ? "btnA" : "darkBtnOC"}`}
              onClick={backToCL}
            >
              Return to contacts list
            </button>
          </div>

          {/* <div>
            <p>{contact.name}</p>
            <p>{contact.mobileNum}</p>
            <p>{contact.workNum}</p>
            <p>{contact.homeNum}</p>
            <p>{contact.mainAddress}</p>
            <p>{contact.secAddress}</p>
          </div>
          <div>
            <Link to={`/contact/edit/${contact.id}`}>
              Edit Contact Information
            </Link>
            <button className="btnA" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div> */}
        </div>
      </section>
    );
  }
};

export default SingleContactPage;
