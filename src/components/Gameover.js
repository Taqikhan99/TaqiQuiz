import React, { useContext } from 'react';
import Fireworks from '../assets/fireworks.gif'
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
const Gameover = () => {

    const {score}=useContext(QuizContext)
    return (
        
        <div className="gameover">
            {score/Questions.length>=0.75?(
                <>
                <img src={Fireworks} alt="firework" />
                <h2>Congratulations Your Score is: {score}/{Questions.length}</h2>
                </>
            ):(
                <h2>You can do better</h2>
            )}
           
        </div>
    );
};

export default Gameover;