import React, { useState } from "react";

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (selectedOption) => {
    // Check if the selected option is correct
    const isCorrect = selectedOption === quizData[currentQuestion].answer;

    // Update the score and set the selected option
    setScore(isCorrect ? score + 1 : score);
    setSelectedOption(selectedOption);

    // Move to the next question or show the result if it's the last question
    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 2000); // Delay before moving to the next question
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          <p>
            Your score: {score} out of {quizData.length}
          </p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="questions">
          <div className="question-box">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{quizData[currentQuestion].question}</p>
          </div>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`
                  ${
                    selectedOption &&
                    option === quizData[currentQuestion].answer
                      ? "correct"
                      : ""
                  }
                  ${
                    selectedOption &&
                    option !== quizData[currentQuestion].answer
                      ? "wrong"
                      : ""
                  }
                `}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
