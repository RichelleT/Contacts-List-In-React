import React from "react";
import Header from "../../common/header/Header";

function Landing() {
  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div className="container-left">
            <form>
              <label>Username</label>
              <input type="text"></input>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
