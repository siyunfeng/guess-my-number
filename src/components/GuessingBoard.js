import { useState } from 'react';
import iconScore from '../img/score.png';
import iconHighestScore from '../img/high-score.png';

const [
  initCurrentNum,
  initGuess,
  initScore,
  initHighestScore,
  initMessage,
  initBGImgUrl,
] = ['?', '', 20, 0, 'Start guessing...', '../src/img/bg-clark-board.png'];

const [noNum, correct, tooHigh, tooLow, lost] = [
  `🚫 No number found!`,
  `💡 Correct Number!`,
  `Too low! Go higher ⬆️`,
  `Too high! Go lower ⬇️`,
  `💔 You lost the game!`,
];

const GuessingBoard = () => {
  let secretNum = Math.trunc(Math.random() * 20) + 1;
  const [currentNum, setCurrentNum] = useState(initCurrentNum);
  const [guess, setGuess] = useState(initGuess);
  const [score, setScore] = useState(initScore);
  const [highestScore, setHighestScore] = useState(initHighestScore);
  const [message, setMessage] = useState(initMessage);

  const handleChange = (e) => setGuess(e.target.value);

  const newGame = () => {
    setScore(initScore);
    secretNum = Math.trunc(Math.random() * 20) + 1;

    setMessage(initMessage);
    setCurrentNum(initCurrentNum);
    setGuess(initGuess);
    console.log('new game button, guess =', guess);
  };

  function onGuess() {
    setCurrentNum(guess);
    console.log('guess =', guess, 'currentNum =', currentNum);
  }

  return (
    <main>
      <button className='btn new-game' onClick={newGame}>
        New Game
      </button>
      <section className='main-box'>
        <div className='current-guess main-box-top'>{currentNum}</div>
        <div className='main-box-bottom'>
          <div className='left'>
            <div className='guess-input'>
              <input
                type='number'
                min={1}
                max={20}
                className='guess'
                onChange={handleChange}
              />
            </div>
            <button className='btn send' onClick={onGuess}>
              Guess
            </button>
          </div>
          <div className='right'>
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
            <h2 className='message'>{message}</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuessingBoard;
