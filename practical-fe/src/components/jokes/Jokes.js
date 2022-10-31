import * as React from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../common/header/Header";

export default function Jokes() {
  const [fullList, setList] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://official-joke-api.appspot.com/jokes/ten",
    }).then(function (response) {
      const result = response.data;
      setList(result);
    });
  }, []);

  console.log(fullList);
  // axios({
  //   method: "get",
  //   url: "https://official-joke-api.appspot.com/jokes/ten",
  // }).then(function (response) {
  //   const result = response.data;
  //   setList(result);
  // });

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Jokes</h2>
        {fullList.map((listItem) => {
          return (
            <div>
              <p>
                {listItem.setup} {listItem.punchline}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
