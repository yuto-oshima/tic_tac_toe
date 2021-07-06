import { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { ISquare, History } from '../../../interface';
import { GameBoard } from '../../molecules/game-board';
import { GameInfo } from '../../molecules/game-info';
import { Button } from '../../atoms/button';

const calculateWinner = (squares: ISquare[]) => {
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

export const Game = () => {
  const [history, setHistory] = useState<History[]>([{squares: Array(9).fill(null)}]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isSort, setIsSort] = useState<boolean>(false);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    let squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(
      _history.concat([{
        squares: squares,
        location: { col: (i % 3) + 1, row: Math.trunc(i / 3) + 1 },
      }]),
    );
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0)
  };

  const _history = isSort ? history.slice().reverse() : history;
  const currentStepNumber = isSort ? _history.length - 1 - stepNumber : stepNumber;
  const current = _history[currentStepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = 'Winner: ' + winner.winner;
  } else if (current.squares.every(val => val === 'X' || val === 'O')) {
    status = 'This game is draw.';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  };

  const moves = _history.map((step, move) => {
    const moveIndex = isSort ? history.length - 1 - move : move;
    const desc = moveIndex ?
      'Go to move #' + moveIndex + '(col: ' + step.location.col + ', row: ' + step.location.row + ')' :
      'GO to game start';
    return(
      <Box key={moveIndex} display="flex">
        <p>{moveIndex}</p>
        <Box m={1} alignItems="center">
          <Button onClick={() => jumpTo(moveIndex)} variant="outlined" color="inherit" value={desc}/>
        </Box>
      </Box>
    )
  });

  return (
    <Box p={2}>
      <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
            <GameBoard
              squares={current.squares}
              lines={winner ? winner.lines : null}
              onClick={i => handleClick(i)}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <GameInfo
            status={status}
            isSort={isSort}
            moves={moves}
            onClick={() => setIsSort(!isSort)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}