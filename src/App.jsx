import { useState } from "react";
import "./index.css";

import { money } from "./data";
import Trivia from "./components/Trivia";

function App() {
  const [quesNumber, setQuesNumber] = useState(4);

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30 </div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>

      <div className="prize">
        <ul className="prizeList">
          {money.map((item) => (
            <li className={quesNumber === item.id ? "money active" : "money"}>
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
