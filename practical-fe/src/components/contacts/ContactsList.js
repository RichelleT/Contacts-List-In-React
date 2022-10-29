import React from "react";
// import styles & components
import Header from "../common/header/Header";
import "../../styles/contacts.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

function Contacts() {
  let navigate = useNavigate();
  const defImg = require("../../assets/defAvatarImg.png");

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <div className="row">
          <div className="col-6">
            <h2>Contacts List</h2>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              className="iconBtn"
              onClick={() => navigate("/contactsForm")}
            >
              <i className="bi bi-plus-circle fs-5"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container noBorder">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-4 circleImgSrc">
                    <img src={defImg} alt="None"></img>
                    {/* ⁡⁢⁣⁢𝗳𝗶𝘅 𝗶𝗺𝗮𝗴𝗲 && 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 𝗹𝗮𝘁𝗲𝗿⁡ */}
                  </div>
                  <div className="col-8">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Default Contact Number</p>
                  </div>
                </div>
                <hr />
                <details>
                  Specific Address
                  <summary>Address</summary>
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
                      <i
                        className="bi bi-dash-circle"
                        title="Delete contact"
                      ></i>
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
        </div>
      </div>
      {/* ⁡⁢⁣⁢𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗯𝗮𝗻𝗻𝗲𝗿 𝗻𝗼𝘁 𝗳𝗹𝗼𝗮𝘁𝗶𝗻𝗴; 𝗺𝗮𝗸𝗲 𝗶𝘁 𝗳𝗹𝗼𝗮𝘁⁡ ⁡⁢⁣⁢&& 𝗳𝗶𝘅 𝗮𝗹𝗶𝗴𝗻𝗺𝗲𝗻𝘁⁡ */}
      <div className="banner">
        <div className="row">
          <div className="col-4">
            <button className="btnIcon">
              <i className="bi bi-star" title="Add to favourite"></i>
            </button>
          </div>
          <div className="col-4">
            <p>Display joke here</p>
          </div>
          <div className="col-4">
            <button className="btnIcon">
              <i
                className="bi bi-arrow-counterclockwise"
                title="Refresh joke"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
