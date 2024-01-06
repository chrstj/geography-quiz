import React, { useState, useEffect } from "react";

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledQuizData, setShuffledQuizData] = useState([]);

  useEffect(() => {
    // Shuffle the quizData when the component mounts
    const shuffledData = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuizData(shuffledData);
  }, [quizData]);

  const handleOptionClick = (selectedOption) => {
    // Check if the selected option is correct
    const isCorrect =
      selectedOption === shuffledQuizData[currentQuestion].answer;

    // Update the score and set the selected option
    setScore(isCorrect ? score + 1 : score);
    setSelectedOption(selectedOption);

    // Move to the next question or show the result if it's the last question
    if (currentQuestion < shuffledQuizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 1500); // Delay before moving to the next question
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);

    // Reshuffle the quizData when resetting the quiz
    const shuffledData = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuizData(shuffledData);
  };

  return (
    <div>
      {showResult ? (
        <div className="questions">
          <div className="question-box">
            <h2>Quiz Result</h2>
            <p>
              Your score: {score} out of {shuffledQuizData.length}
            </p>
            <button onClick={resetQuiz}>Restart Quiz</button>
          </div>
        </div>
      ) : (
        <div className="questions">
          <div className="question-box">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{shuffledQuizData[currentQuestion].question}</p>
          </div>
          <ul>
            {shuffledQuizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`
                  ${
                    selectedOption &&
                    option === shuffledQuizData[currentQuestion].answer
                      ? "correct"
                      : ""
                  }
                  ${
                    selectedOption &&
                    option !== shuffledQuizData[currentQuestion].answer
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
