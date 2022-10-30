// refer older file for structure
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/contacts/" + contact.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/contact/" + contact.slug}>{contact.title}</Link>
            </td>
            <td>{contact.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(contact)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
