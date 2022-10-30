import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const ContactForm = ({
  contact,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{contact.id ? "Edit" : "Add"} Contact</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={contact.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="category"
        label="Category"
        value={contact.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default ContactForm;
