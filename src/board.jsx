import React from 'react';
import './board.css';
import Square from './square';

const Board = props => {

  const renderSquare = i => {
    return (
      <Square
        key={i}
        isHighlight={props.lines ? props.lines.some(line => line === i) : false}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const cols = [0, 1, 2];
  const rows = [0, 1, 2];

  return (
    <div>
      { rows.map(row => {
        return(
          <div
            key={row}
            className="board-row"
          >
            { cols.map((col) => renderSquare(row * 3 + col)) }
          </div>
        )
      })}
    </div>
  );
};

export default Board;
