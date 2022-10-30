import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadContacts, saveContact } from "../../redux/actions/contactActions";
import PropTypes from "prop-types";
import ContactForm from "./ContactsForm";
import Spinner from "../common/spinner/Spinner";
import { toast } from "react-toastify";

export function ManageContactPage({
  contacts,
  loadContacts,
  saveContact,
  history,
  ...props
}) {
  const [contact, setContact] = useState({ ...props.contact });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (contacts.length === 0) {
      loadContacts().catch((error) => {
        alert("Loading contacts failed" + error);
      });
    } else {
      setContact({ ...props.contact });
    }
    // eslint-disable-next-line
  }, [props.contact]);

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: name === "titleId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, category } = contact;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveContact(contact)
      .then(() => {
        toast.success("Contact saved.");
        history.push("/contacts");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return contacts.length === 0 ? (
    <Spinner />
  ) : (
    <ContactForm
      contact={contact}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageContactPage.propTypes = {
  contact: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  loadContacts: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getContactBySlug(contacts, slug) {
  return contacts.find((contact) => contact.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const contact = getContactBySlug(state.contacts, slug);
  return {
    contact,
    contacts: state.contacts,
  };
}

const mapDispatchToProps = {
  loadContacts,
  saveContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageContactPage);
