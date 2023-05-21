import { useState } from 'react';
import iconScore from '../img/score.png';
import iconHighestScore from '../img/high-score.png';

const [
  initCurrentNum,
  initGuess,
  initScore,
  initHighestScore,
  inputMin,
  inputMax,
  initMessage,
  initErrMessage,
  initIsWin,
] = ['?', '', 20, 0, 1, 20, 'Start guessing...', '', false];

const [noNum, correctNum, tooHigh, tooLow, lost, errMsg] = [
  `🚫 No number found! `,
  `💡 Correct! You won! `,
  `Too high! Go lower ⬇️ `,
  `Too low! Go higher ⬆️ `,
  `💔 You lost the game! `,
  `⚠️ Please input a number between ${inputMin} and ${inputMax}. ⚠️`,
];

let secretNum = Math.trunc(Math.random() * inputMax) + inputMin;

const GuessingBoard = () => {
  const [currentNum, setCurrentNum] = useState(initCurrentNum);
  const [guess, setGuess] = useState(initGuess);
  const [score, setScore] = useState(initScore);
  const [highestScore, setHighestScore] = useState(initHighestScore);
  const [message, setMessage] = useState(initMessage);
  const [errMessage, setErrMessage] = useState(initErrMessage);
  const [isWin, setIsWin] = useState(initIsWin);

  const handleChange = (e) => {
    if (e === '') {
      setGuess(e);
    } else {
      let inputValue = Number(e.target.value);
      if (inputValue < 1 || inputValue > 20) {
        setErrMessage(errMsg);
      } else {
        setErrMessage(initErrMessage);
        setGuess(inputValue);
      }
    }
  };

  const newGame = () => {
    setCurrentNum(initCurrentNum);
    setScore(initScore);
    setIsWin(initIsWin);
    setMessage(initMessage);
    handleChange(initGuess);

    secretNum = Math.trunc(Math.random() * 20) + 1;
  };

  const onGuess = (e) => {
    e.preventDefault();
    if (guess) {
      setCurrentNum(guess);
      if (guess === secretNum) {
        setMessage(correctNum);
        setIsWin(true);
        if (score > highestScore) {
          setHighestScore(score);
        }
      } else if (guess !== secretNum) {
        if (!score) {
          setMessage(lost);
          setScore(0);
        } else {
          setMessage(guess > secretNum ? tooHigh : tooLow);
          setScore(score - 1);
        }
      }
    } else {
      setMessage(noNum);
    }
  };

  return (
    <main className={isWin ? 'main-won' : ''}>
      <button className='btn new-game' onClick={newGame}>
        New Game
      </button>
      <section className='main-box'>
        <div
          className={`current-guess main-box-top ${
            isWin ? 'correct-guess' : ''
          }`}
        >
          {currentNum}
        </div>
        <div className='main-box-bottom'>
          <div className='left'>
            <form onSubmit={onGuess}>
              <input
                type='number'
                min={1}
                max={20}
                className='guess'
                onChange={handleChange}
              />
              <p className='input-err-message'>{errMessage}</p>
              <button className='btn submit-guess' disabled={isWin}>
                Guess
              </button>
            </form>
          </div>
          <div className='right'>
            <h2 className={`message ${isWin ? 'won' : ''}`}>{message}</h2>
            <div className='score-board'>
              <div className='current-score-label'>
                <img src={iconScore} alt='Score' className='icon-score-board' />
                {'  '}Score:{' '}
                <span className='current-score-value'>{score}</span>
              </div>
              <div className='highest-score-label'>
                <img
                  src={iconHighestScore}
                  alt='Highest Score'
                  className='icon-score-board'
                />
                {'  '}Highest Score:{' '}
                <span className='highest-score-value'>{highestScore}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuessingBoard;
