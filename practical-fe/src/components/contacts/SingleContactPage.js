import { useSelector } from "react-redux";
import { selectContactById } from "../../redux/contacts/contactSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";
import Header from "../common/header/Header";

export const SingleContactPage = () => {
  //   let navigate = useNavigate();
  const { contactId } = useParams();
  const contact = useSelector((state) => selectContactById(state, contactId));

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

  if (contact) {
    return (
      <div>
        <Header />
        <div className="container noBorder">
          <h2>Contact</h2>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
};

export default SingleContactPage;
