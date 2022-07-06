import React from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startQuiz = async () => {
    
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }
  
  const nextQuestion = () => {
    
  }
    
  return (
    <div className="App">
      <h1>REACT QUIZZ</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
