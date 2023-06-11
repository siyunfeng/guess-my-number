import { useEffect, useState } from 'react';
import iconScore from '../img/score.png';
import iconHighestScore from '../img/high-score.png';
import increaseBtn from '../img/add.png';
import decreaseBtn from '../img/minus.png';

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
  initIsLost,
] = ['?', '', 100, 0, 1, 20, 'Start guessing...', '', false, false];

const [noNum, correctNum, tooHigh, tooLow, lost, errMsg] = [
  `🚫 No number found! `,
  `💡 Correct!!! `,
  `Too high! Go lower ⬇️ `,
  `Too low! Go higher ⬆️ `,
  `💀 Game Over! `,
  `⚠️ Please input a number between ${inputMin} and ${inputMax}.`,
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
  const [isLost, setIsLost] = useState(initIsLost);

  const handleChange = (e) => {
    setErrMessage(initErrMessage);

    if (e) {
      let inputValue = Number(e.target.value);
      if (inputValue >= 1 && inputValue <= 20) {
        setErrMessage(initErrMessage);
        setGuess(inputValue);
      } else {
        setErrMessage(errMsg);
      }
    }
  };

  const newGame = () => {
    setCurrentNum(initCurrentNum);
    setScore(initScore);
    setIsWin(initIsWin);
    setIsLost(initIsLost);
    setMessage(initMessage);
    handleChange(initGuess);
    setGuess(initGuess);

    secretNum = Math.trunc(Math.random() * 20) + 1;
  };

  const onGuess = (e) => {
    e.preventDefault();
    setErrMessage(initErrMessage);
    if (guess && guess >= 1 && guess <= 20) {
      setCurrentNum(guess);
      if (guess === secretNum) {
        setMessage(correctNum);
        setIsWin(true);
        if (score > highestScore) {
          setHighestScore(score);
        }
      } else if (guess !== secretNum) {
        setScore(score - 20);
        if (score > 0) {
          setMessage(guess > secretNum ? tooHigh : tooLow);
        }
      }
    } else if (guess && guess < 1 && guess > 20) {
      setErrMessage(errMsg);
    } else {
      setMessage(noNum);
    }
  };

  const decrease = () => {
    if (guess >= 2) {
      setErrMessage(initErrMessage);
      setGuess(Number(guess) - 1);
    }
  };
  const increase = () => {
    if (guess < 20) {
      setErrMessage(initErrMessage);
      setGuess(Number(guess) + 1);
    }
  };

  useEffect(() => {
    if (score === 0) {
      setMessage(lost);
      setIsLost(true);
    }
  }, [score, guess]);

  return (
    <main className={`${isWin ? 'main-won' : ''} ${isLost ? 'main-lost' : ''}`}>
      <button className='btn new-game' onClick={newGame}>
        New Game
      </button>
      <section className='main-box'>
        <div className='main-box-top'>
          <div className={`current-guess ${isWin ? 'correct-guess' : ''}`}>
            {currentNum}
          </div>
        </div>
        <div className='message-box'>
          <div className='guess-box'>
            <form onSubmit={onGuess}>
              <img
                src={decreaseBtn}
                className='decrease'
                alt='decrease'
                onClick={decrease}
              />
              <input
                type='text'
                className='guess'
                value={guess}
                onChange={handleChange}
              />
              <img
                src={increaseBtn}
                className='increase'
                alt='increase'
                onClick={increase}
              />
              <p className='input-err-message'>{errMessage}</p>
              <button className='btn submit-guess' disabled={isWin || isLost}>
                Guess
              </button>
            </form>
          </div>
          <div className='message-board'>
            <h2
              className={`message ${isWin ? 'won' : ''} ${
                isLost ? 'lost' : ''
              }`}
            >
              {message}
            </h2>
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
