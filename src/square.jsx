import './square.css';

function Square(props) {
  return (
    <button className={`square ${props.isHighlight ? 'highlight' : ''}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;