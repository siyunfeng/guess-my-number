import { useState } from 'react';

const GuessingBoard = () => {
  const [message, setMessage] = useState('Start guessing...');
  const [currentNum, setCurrentNum] = useState('?');

  return (
    <main>
      <button className='btn new-game'>New Game</button>
      <section className='main-box'>
        <div className='current-guess main-box-top'>{currentNum}</div>
        <div className='main-box-bottom'>
          <div className='left'>
            <div className='guess-input'>
              <input type='number' min={1} max={20} className='guess' />
            </div>
            <button className='btn send'>Guess</button>
          </div>
          <div className='right'>
            <div className='score-board'>
              <div className='current-score-label'>
                Score: <span className='current-score-value'>20</span>
              </div>
              <div className='highest-score-label'>
                Highest Score: <span className='highest-score-value'>0</span>
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
