import React from "react";
// import styles & components
import Header from "../../common/header/Header";
import "../../styles/contacts.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contacts() {
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
            <button className="iconBtn">
              <i class="bi bi-plus-circle fs-5"></i>
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
                      <i class="bi bi-eye"></i>
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="iconBtn">
                      <i class="bi bi-dash-circle"></i>
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="iconBtn">
                      <i class="bi bi-three-dots"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ⁡⁢⁣⁢𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗯𝗮𝗻𝗻𝗲𝗿 𝗻𝗼𝘁 𝗳𝗹𝗼𝗮𝘁𝗶𝗻𝗴; 𝗺𝗮𝗸𝗲 𝗶𝘁 𝗳𝗹𝗼𝗮𝘁⁡ */}
      <div className="banner">
        <div className="row d-flex align-items-center">
          <div className="col-4">
            <button className="btnIcon">
              <i class="bi bi-star"></i>
            </button>
          </div>
          <div className="col-4">
            <p>Display joke here</p>
          </div>
          <div className="col-4">
            <button className="btnIcon">
              <i class="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
