import React, { useState, useContext } from 'react'
import { QuizContext } from '../ContextApi/Contexts';
import { Questions } from '../ContextApi/QuestionData';

const QuizPage = () => {
  const {score, setScore, setGameStart} = useContext(QuizContext)
  const [currentQues, setCurrentQues] = useState(0);
  const [optionChosen, setOptionChosen] = useState("")

  const nextQuestion = () => {
    if (Questions[currentQues].answer === optionChosen){
      setScore(score + 1)
    }
    setCurrentQues(currentQues + 1)
  }

  const finishQuiz = () => {
    if (Questions[currentQues].answer === optionChosen){
      setScore(score + 1)
    }
    setGameStart("end")
  }

  return (
    <div>
      <h1>{Questions[currentQues].prompt}</h1>
      <div>
        <button onClick={()=> setOptionChosen("A")}>{Questions[currentQues].optionA}</button>
        <button onClick={()=> setOptionChosen("B")}>{Questions[currentQues].optionB}</button>
        <button onClick={()=> setOptionChosen("C")}>{Questions[currentQues].optionC}</button>
        <button onClick={()=> setOptionChosen("D")}>{Questions[currentQues].optionD}</button>
      </div>
      {currentQues === Questions.length - 1? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ): (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default QuizPage