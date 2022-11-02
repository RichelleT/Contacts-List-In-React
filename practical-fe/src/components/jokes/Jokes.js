import * as React from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

//export default function Jokes() {
const Jokes = () => {
  const [fullList, setList] = React.useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = React.useState(0);
  const [jokeSetup, setJokeSetup] = React.useState("");
  const [jokePunchline, setJokePunchline] = React.useState("");

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
      const jokeSetupS = JSON.stringify(fullList[currentJokeIndex].setup);
      const jokePunchlineS = JSON.stringify(
        fullList[currentJokeIndex].punchline
      );

      setJokeSetup(jokeSetupS);
      setJokePunchline(jokePunchlineS);
    }
  }, [currentJokeIndex, fullList, jokePunchline, jokeSetup]);

  var nqSetup = jokeSetup.split('"').join("");
  var nqPunchline = jokePunchline.split('"').join("");

  return (
    <div>
      <p>
        {nqSetup} <br />
        {nqPunchline}
      </p>
    </div>
  );
};
export default Jokes;
