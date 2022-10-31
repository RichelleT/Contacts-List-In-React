import { useSelector } from "react-redux";
import Header from "../common/header/Header";
import "../../styles/contacts.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { selectAllContact } from "../../redux/contacts/contactSlice";

const ContactsList = () => {
  const contacts = useSelector(selectAllContact);
  const defImg = require("../../assets/defAvatarImg.png");
  let navigate = useNavigate();

  const renderContacts = contacts.map((contact) => (
    <>
      <div className="col-3 mt-5">
        <div className="card w-100">
          <div className="card-body">
            <div className="row">
              <div className="col-4 circleImgSrc">
                <img
                  src={defImg}
                  style={{ width: 56, height: 56 }}
                  alt="None"
                ></img>
              </div>
              <div className="col-8">
                <h5 className="card-title">{contact.name}</h5>
                {contact.mobileNum.length > 0 && (
                  <p className="card-text">
                    Mobile Number:
                    <br />
                    {contact.mobileNum}
                  </p>
                )}
                {contact.workNum.length > 0 && (
                  <p className="card-text">
                    Work Number:
                    <br />
                    {contact.workNum}
                  </p>
                )}
                {contact.homeNum.length > 0 && (
                  <p className="card-text">
                    Home Number:
                    <br />
                    {contact.homeNum}
                  </p>
                )}
              </div>
            </div>
            <hr />
            <details>
              {contact.mainAddress.length > 0 && (
                <>
                  <b>Main Address:</b> <br />
                  {contact.mainAddress}
                </>
              )}
              {contact.secAddress.length > 0 && (
                <>
                  <br />
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
              <summary>Addresses</summary>
            </details>
            <hr />
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-3">
                <button className="iconBtn">
                  <i
                    className="bi bi-eye"
                    title="View full details of contact"
                  ></i>
                </button>
              </div>
              <div className="col-3">
                <button className="iconBtn">
                  <i className="bi bi-dash-circle" title="Delete contact"></i>
                </button>
              </div>
              <div className="col-3">
                <button className="iconBtn">
                  <i
                    className="bi bi-three-dots"
                    title="Edit contact details"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <div>
      <Header />
      <section>
        <div className="container noBorder">
          <div className="row">
            <div className="col-6">
              <h2>Contacts List</h2>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button className="btnA" onClick={() => navigate("/addContact")}>
                <i class="bi bi-plus"></i> Add New Contact&nbsp;
              </button>
            </div>
          </div>
        </div>
        <div className="container noBorder">
          <div className="row row-cols-1 row-cols-md-5">{renderContacts}</div>
        </div>
      </section>
    </div>
  );
};

export default ContactsList;
