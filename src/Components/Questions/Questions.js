import React,{useState} from 'react';
import './Questions.css'
import ShowScore from '../ShowScore/ShowScore'


  function Questions() {
    // console.log("render")
    const [QuestionNumber, SetQuestionNumber] = useState(0);
    const [Clicked, SetClicked] = useState(false);
    const [Score, SetScore] = useState(false);
    const [Points, SetPoints] = useState(0);
    const [Dis,SetDis]=useState(true);
    const [Ansdis,SetAnsdis]=useState(false);
    let Quiz = [
      {
        QuestionsText: "Q) What is the DOM?",
        answersOptions: ["Document Object Model", "Direct Overall Model", "Design Object Model", "Document Overall Model"],
        RightAnswer: "Document Object Model",
      },
      {
        QuestionsText: "Q) React is Front-end or back-end ?",
        answersOptions: ["Back-end", "Front-end", "Both", "Neither"],
        RightAnswer: "Front-end",
      },
      {
        QuestionsText: "Q) DOM in React is Called ?",
        answersOptions: ["Real DOM", "Virtual DOM", "Original DOM", "React & Virtual DOM"],
        RightAnswer: "React & Virtual DOM",
      },
    ];
    
    // function to update the number of question
    let updateQuestion = () => {
      SetAnsdis(false);
      SetDis(true)
      if(QuestionNumber==Quiz.length-1)
      {
        SetScore(true);
      }
      else{
        SetClicked(false);
        let nextQuestion = QuestionNumber + 1;
        SetQuestionNumber(nextQuestion);
      }
    };;

    // to check answer
    let checkAnswer=(QNo,selectedAnswer)=>{
      SetAnsdis(true);
      SetDis(false)
      // set click to true when user click on any option so we apply css after user click
      SetClicked(true);
      if(selectedAnswer==Quiz[QNo].RightAnswer)
      {
        let addPoint=Points+1;
        SetPoints(addPoint);
      }
      else{
      }
     
    }

    return (
      <>
      {Score ? (
        <ShowScore points={Points} TotalQuestions={Quiz.length}/>
      ):(
        <>
        <div className='MainBox'>
        <div className="Question_section">
          {Quiz[QuestionNumber].QuestionsText}
        </div>
        <div className="Answer_section">
          {Quiz[QuestionNumber].answersOptions.map((answer, index) => (
            <button    // conditional css applied on button 
               disabled={Ansdis} key={index} id={answer} className={`before ${Clicked && answer==Quiz[QuestionNumber].RightAnswer ? "after":""}
                ${Clicked && answer!=Quiz[QuestionNumber].RightAnswer ?"wrong":""}`}  
               onClick={() => checkAnswer(QuestionNumber, answer)}>
              {answer}
            </button>
          ))}
        </div>
        <div className="submit">
          <button disabled={Dis} id='next' onClick={()=>updateQuestion()}>Next</button>
        </div>
        </div>
        </>
        )}
      </>
    );
  }
 export default Questions;


