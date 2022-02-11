import React,{useState} from 'react'
import Homepage from '../Homepage/Homepage'
import './ShowScore.css'

function ShowScore(props) {
   const [Back, setBack] = useState(true);
  let PlayAgain=()=>{
    setBack(false);
  }


  return (
    <>
    {Back ? (
      <div className='ViewScore'>
        <h1>Score CARD</h1>
         <h3 className='score'> Your Score {props.points} out of {props.TotalQuestions}
        </h3>
        <button className='playAgain' onClick={PlayAgain}>Play Again</button>
      </div>
    ):(
      <Homepage></Homepage>
    )}
    </>
  )
}

export default ShowScore