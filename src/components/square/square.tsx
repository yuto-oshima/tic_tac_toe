import './square.css';
import { SquareProps } from '../../interface';

const Square = ({isHighlight, value, onClick}: SquareProps) => {
  return (
    <button className={`square ${isHighlight ? 'highlight' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;