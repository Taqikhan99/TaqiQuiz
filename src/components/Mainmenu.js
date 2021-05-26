import React, {useContext} from 'react';
import {QuizContext} from '../Helpers/Context'
import imgquiz from '../assets/quiz.jpg'

const Mainmenu = () => {

    const {gameState,setGameState}=useContext(QuizContext)
    return (
        <div className='menu'>
            <img src={imgquiz} alt="" />
            <button className='startbtn' onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
        </div>
    );
};

export default Mainmenu;