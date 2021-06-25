import React from 'react';
import './board.css';
import Square from './square';

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        key={i}
        isHighlight={this.props.lines ? this.props.lines.some(line => line === i) : false}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  render() {
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
              { cols.map((col) => this.renderSquare(row * 3 + col)) }
            </div>
          )
        })}
      </div>
    );
  }
}

export default Board;
