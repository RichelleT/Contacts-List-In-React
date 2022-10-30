import React from "react";
import { connect } from "react-redux";
import * as contactActions from "../../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ContactList from "./ContactsList";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../common/spinner/Spinner";

class ContactsPage extends React.Component {
  state = {
    redirectToAddContactPage: false,
  };

  componentDidMount() {
    const { contacts, actions } = this.props;

    if (contacts.length === 0) {
      actions.loadContacts().catch((error) => {
        alert("Loading contacts failed" + error);
      });
    }
  }

  handleDeleteContact = async (contact) => {
    toast.success("Contact deleted");
    try {
      await this.props.actions.deleteContact(contact);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddContactPage && <Navigate to="/contact" />}
        <h2>Contacts</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-contact"
              onClick={() => this.setState({ redirectToAddContactPage: true })}
            >
              Add Contact
            </button>

            <ContactList
              onDeleteClick={this.handleDeleteContact}
              contacts={this.props.contacts}
            />
          </>
        )}
      </>
    );
  }
}

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadContacts: bindActionCreators(contactActions.loadContacts, dispatch),
      deleteContact: bindActionCreators(contactActions.deleteContact, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
