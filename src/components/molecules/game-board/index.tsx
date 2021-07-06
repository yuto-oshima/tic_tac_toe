import { Square } from '../../atoms/square';
import { GameBoardPrpos } from "../../../interface";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    '&:after': {
      clear: 'both',
      content: "",
      display: 'table'
    }
  }
});

export const GameBoard = (props: GameBoardPrpos) => {
  const { lines, squares, onClick } = props;
  const classes = useStyles();
  const cols: (0 | 1 | 2)[] = [0, 1, 2];
  const rows: (0 | 1 | 2)[] = [0, 1, 2];
  return (
    <div>
      { rows.map(row => {
        return(
          <div
            key={row}
            className={classes.root}
          >
            { cols.map(col => {
              const i: number = row * 3 + col;
              return(
                <Square
                  key={i}
                  isHighlight={lines ? lines.some(line => line === i) : false}
                  value={squares[i]}
                  onClick={() => onClick(i)}
                />
              )
            }) }
          </div>
        )
      })}
    </div>
  );
};