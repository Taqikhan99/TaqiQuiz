import React,{useState} from 'react';
import {Questions} from '../Helpers/QuestionBank'
const QuizStart = () => {
    const [currQuestion,setCurrQuestion]=useState(0)
    return (
        <div className='quiz'>
            <h2>{Questions[currQuestion].question}</h2>
            <div className="options">
                <buttons className="btnoption">{Questions[currQuestion].optA}</buttons>
                <buttons className="btnoption">{Questions[currQuestion].optB}</buttons>
                <buttons className="btnoption">{Questions[currQuestion].optC}</buttons>
                <buttons className="btnoption">{Questions[currQuestion].optD}</buttons>
            </div>
            
        </div>
    );
};

export default QuizStart;