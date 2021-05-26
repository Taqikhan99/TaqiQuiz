import React,{useState,useContext} from 'react';
import {Questions} from '../Helpers/QuestionBank'
import {QuizContext} from '../Helpers/Context'
const QuizStart = () => {

    const {score,setScore,setGameState}=useContext(QuizContext)
    const [currQuestion,setCurrQuestion]=useState(0)
    const [optionClicked,setOptionclicked]=useState("")

    // go to next question
    const nextQuestion=()=>{
        if(Questions[currQuestion].correct== optionClicked){
            setScore(score+1)
        }
        
        if(optionClicked==""){
            alert("Please select option")
        }
        else{
            setCurrQuestion(currQuestion+1)
        setOptionclicked("")
        }
        
    }

    // finish the quiz
    const finishQuiz=()=>{
        if(Questions[currQuestion].correct== optionClicked){
            setScore(score+1)
        }
        setGameState("gameover")

    }

    return (
        <div className='quiz'>
            <h2>{Questions[currQuestion].question}</h2>
            <div className="options">
                {/* button option A */}
                <button onClick={()=>{
                    setOptionclicked("optA")
                    console.log(optionClicked)
                }
                } 
                className="btnoption">{Questions[currQuestion].optA}
                </button>
                {/* button option B */}
                <button onClick={()=>{
                    setOptionclicked("optB")
                    console.log(optionClicked)
                }
                } 
                className="btnoption">{Questions[currQuestion].optB}
                </button>
                {/* button option A */}
                <button onClick={()=>{
                    setOptionclicked("optC")
                    console.log(optionClicked)
                }
                } 
                className="btnoption">{Questions[currQuestion].optC}
                </button>
                {/* button option A */}
                <button onClick={()=>{
                    setOptionclicked("optD")
                    console.log(optionClicked)
                }
                } 
                className="btnoption">{Questions[currQuestion].optD}
                </button>

          
            </div>
             {currQuestion<Questions.length-1 ? (
                 <button onClick={nextQuestion} className="nextbtn">NEXT</button>
             )
            :(
                <button onClick={finishQuiz} className="nextbtn">FINISH</button>
            )}   

            
        </div>
    );
};

export default QuizStart;