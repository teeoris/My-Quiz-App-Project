import React, {useContext} from 'react'
import { QuizContext } from '../ContextApi/Contexts'

const StartPage = () => {
const {gameStart, setGameStart} = useContext(QuizContext)
  return (
    <div>
        <button onClick={()=> setGameStart("quiz")}>Start Quiz</button>
    </div>
  )
}

export default StartPage