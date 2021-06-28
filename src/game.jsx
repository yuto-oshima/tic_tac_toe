import React, { useState } from 'react';
import './game.css';
import Board from './board';

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return { winner: squares[a], lines: lines[i] };
  };
  return null;
};

const Game = props => {
  const init = {
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    isSort: false,
  };

  const [state, setState] = useState(init);

  const handleClick = i => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    let squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = state.xIsNext ? 'X' : 'O';

    setState({
      ...state,
      history: history.concat([{
        squares: squares,
        location: { col: (i % 3) + 1, row: Math.trunc(i / 3) + 1 },
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext
    });
  };

  const jumpTo = step => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  };

  const history = state.isSort ? state.history.slice().reverse() : state.history;
  const currentStepNumber = state.isSort ? history.length - 1 - state.stepNumber : state.stepNumber;
  const current = history[currentStepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner.winner;
  } else if (current.squares.every(val => val === 'X' || val === 'O')) {
    status = 'This game is draw.';
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  };

  const moves = history.map((step, move) => {
    const moveIndex = state.isSort ? history.length - 1 - move : move;
    const desc = moveIndex ?
      'Go to move #' + moveIndex + '(col: ' + step.location.col + ', row: ' + step.location.row + ')' :
      'GO to game start';
    return(
      <li key={moveIndex}>
        <button onClick={() => jumpTo(moveIndex)} className={ move === currentStepNumber ? 'text-bold' : null }>{desc}</button>
      </li>
    )
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          lines={winner ? winner.lines : null}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>
          <button onClick={() => setState({ ...state, isSort: !state.isSort }) }>{ state.isSort ? '昇順' : '降順'}</button>
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;