import { useEffect, useState } from "react";
import "./index.css";

import { money } from "./data";
import Trivia from "./components/Trivia";

function App() {
  const [quesNumber, setQuesNumber] = useState(1);
  const [countDown, setCountDown] = useState(false);
  const [questionFetched, setQuestionFetched] = useState("");


  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((result) => setQuestionFetched(result.results[quesNumber - 1]));
  }, []);

  console.log(questionFetched);

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30 </div>
        </div>
        <div className="bottom">
          <Trivia questionProps={questionFetched} />
        </div>
      </div>

      <div className="prize">
        <ul className="prizeList">
          {money.map((item) => (
            <li
              key={item.id}
              className={quesNumber === item.id ? "money active" : "money"}
            >
              <span className="moneyNumber">{item.id}</span>
              <span className="moneyAmount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
