import React from "react";
// import styles & components
import Header from "../../common/header/Header";
import "../../styles/contacts.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contacts() {
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
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          {/* delete here */}
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
          {/* delete till here */}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
