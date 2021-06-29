import './board.css';
import Square from '../square/square';
import { BoardPrpos } from '../../interface';

const Board = ({lines, squares, onClick}: BoardPrpos) => {

  const renderSquare = (i: number) => {
    return (
      <Square
        key={i}
        isHighlight={lines ? lines.some(line => line === i) : false}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  const cols: (0 | 1 | 2)[] = [0, 1, 2];
  const rows: (0 | 1 | 2)[] = [0, 1, 2];

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
