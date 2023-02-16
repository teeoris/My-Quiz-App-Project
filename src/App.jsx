import React, { useState } from 'react';
import Endpage from './components/Endpage';
import QuizPage from './components/QuizPage';
import StartPage from './components/StartPage';
import { QuizContext } from './ContextApi/Contexts';

const App = () => {
  const [gameStart, setGameStart] = useState("start");
  const [score, setScore] = useState("")

  return (
    <div>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameStart, setGameStart, score, setScore}} >
        {gameStart === "start" && <StartPage />}
        {gameStart === "quiz" && <QuizPage />}
        {gameStart === "end" && <Endpage />}
      </QuizContext.Provider>
    </div>
  )
}

export default App