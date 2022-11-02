import * as React from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../common/header/Header";

//export default function Jokes() {
const Jokes = () => {
  const [fullList, setList] = React.useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = React.useState(0);
  // eslint-disable-next-line
  const [joke, setJokeLine] = React.useState("");

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://official-joke-api.appspot.com/jokes/ten",
    }).then(function (response) {
      const result = response.data;
      setList(result);
    });
  }, []);

  //console.log(fullList);

  React.useEffect(() => {
    if (fullList.length > 0) {
      const id = setTimeout(
        () => setCurrentJokeIndex((currentJokeIndex + 1) % fullList.length),
        5000
      );
      return () => {
        clearInterval(id);
      };
    }
  }, [currentJokeIndex, fullList]);

  //console.log(fullList[currentJokeIndex]);

  React.useEffect(() => {
    if (
      fullList.length > 0 &&
      fullList[currentJokeIndex].setup.length > 0 &&
      fullList[currentJokeIndex].punchline.length > 0
    ) {
      const jokeSetup = JSON.stringify(fullList[currentJokeIndex].setup);
      const jokePunchline = JSON.stringify(
        fullList[currentJokeIndex].punchline
      );

      const conJoke = jokeSetup + jokePunchline;
      //console.log(conJoke);
      setJokeLine(conJoke);
    }
  }, [currentJokeIndex, fullList]);

  return (
    <div>
      <Header />
      <div className="container noBorder">
        <h2>Jokes</h2>
        <h2>Shows Full List</h2>
        {fullList.map((listItem) => {
          return (
            <div>
              <p>
                {listItem.setup} {listItem.punchline}
              </p>
            </div>
          );
        })}
        <h2>Test Singular Loop Display</h2>
        <div>
          <p>{joke}</p>
        </div>
      </div>
    </div>
  );
};
export default Jokes;
