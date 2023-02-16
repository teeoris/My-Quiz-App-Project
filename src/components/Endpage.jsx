import React, { useContext } from 'react'
import { QuizContext } from '../ContextApi/Contexts'
import { Questions } from '../ContextApi/QuestionData'

const Endpage = () => {
  const {score, setScore, setGameStart} = useContext(QuizContext);

  const restartQuiz = ()=> {
    setScore(0)
    setGameStart("start")
  }
  return (
    <div>
      <h1>Finish Quiz</h1>
      <p>{score} 0f {Questions.length}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Endpage