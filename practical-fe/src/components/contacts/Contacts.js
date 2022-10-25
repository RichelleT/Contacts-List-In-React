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
      <div className="container">
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
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-4 circleImgSrc">
                    <img src={defImg} alt="None"></img>
                    {/* fix image && responsive later */}
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
      {/* current banner not floating; make it float */}
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
