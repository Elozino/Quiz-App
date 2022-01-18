import React, { useState } from "react";

function Trivia({ countDown, questNumber, questionProps }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [className, setClassName] = useState("answer");
  const answer = [
    questionProps.correct_answer,
    questionProps.incorrect_answers,
  ].flat();

  console.log(answer);

  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
  };

  return (
    <div className="trivia">
      <div className="question">{questionProps?.question}</div>
      <div className="answers">
        {answer?.map((ans) => (
          <div
            key={ans}
            className={selectedAnswer === ans ? className : "answer"}
            onClick={() => handleClick(ans)}
          >
            {ans}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
