import React from "react";
import { useNavigate } from "react-router-dom";
// import styles & components
import "../../styles/landing.css";

function Landing() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/contacts");
  };

  return (
    <div className="container pt-auto custMt">
      <div className="row d-flex">
        <div className="col-6">
          <div className="custTitle">Sign In</div>
          <div className="contBody">
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <br />
              <input className="custInputT" type="text"></input>
              <br />
              <br />
              <button className="custButton">Enter</button>
              <br />
              <br />
            </form>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default Landing;
