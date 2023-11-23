import React from "react";
import Quiz from "./components/Quiz";
import quizData from "./components/Data";
const App = () => {
  return (
    <div>
      <Quiz quizData={quizData} />
    </div>
  );
};

export default App;
