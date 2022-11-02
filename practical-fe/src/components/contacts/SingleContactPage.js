import { useSelector } from "react-redux";
import {
  selectContactById,
  //removeContact,
  //toggleFavourite,
} from "../../redux/contacts/contactSlice";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import { ThemeContext } from "../common/theme/ThemeContext";
import React from "react";
import Header from "../common/header/Header";
import "../../styles/singleContact.css";

export const SingleContactPage = () => {
  //const defImg = require("../../assets/defAvatarImg.png");

  //let navigate = useNavigate();
  //const dispatch = useDispatch();
  const { contactId } = useParams();
  const contact = useSelector((state) => selectContactById(state, contactId));
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  if (!contact) {
    return (
      <div>
        <Header />
        <div className="container noBorder">
          <p>Contact not found.</p>
        </div>
      </div>
    );
  }

  // const handleCancel = () => {
  //   navigate("/contacts");
  // };

  if (contact) {
    return (
      <div>
        <Header />
        <div
          className={`${
            darkMode
              ? "container noBorder lightBg"
              : "container noBorder darkBg"
          }`}
        >
          <h2>Contact</h2>
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
      </div>
    );
  }
};

export default SingleContactPage;
