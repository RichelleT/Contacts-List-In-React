import React from "react";
import "../../styles/landing.css";

function Landing() {
  return (
    <div>
      <div className="row container">
        <div className="col-sm-6">
          <form>
            <label className="custLabel">Username</label>
            <br />
            <br />
            <input className="custInputT" type="text"></input>
            <br />
            <br />
            <button className="custButton">Submit</button>
            <br />
            <br />
          </form>
        </div>
        <div className="col-sm-6">
          <p>Image</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
