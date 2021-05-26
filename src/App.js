import React, {useState} from 'react'
import './App.css';
import Mainmenu from './components/Mainmenu'
import QuizStart from './components/QuizStart'
import Gameover from './components/Gameover'
import {QuizContext} from './Helpers/Context'

function App() {

  const [gameState,setGameState]=useState("menu")

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{gameState, setGameState}}>
      {gameState==="menu" && <Mainmenu/>}
      {gameState==="quiz" && <QuizStart/>}
      {gameState==="gameover" && <Gameover/>}

      </QuizContext.Provider>
     
    </div>
  );
}

export default App;
