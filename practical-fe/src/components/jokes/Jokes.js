import * as React from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../common/header/Header";

export default function Jokes() {
  const [fullList, setList] = React.useState([]);
  // const [joke, setJoke] = React.useState([]);

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

  // var randomItem = fullList[Math.floor(Math.random() * fullList.length)];
  // var intervalId = setInterval(() => {
  //   var timoutId = setTimeout(() => {
  //     console.log(randomItem);
  //     setJoke(randomItem);
  //   }, 5000);
  // }, 10000);

  // console.log(joke);

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
        {/* {joke.map((listItem) => {
          return (
            <div>
              <p>
                {listItem.setup} {listItem.punchline}
              </p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
