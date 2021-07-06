import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { SquareProps } from '../../../interface';

const useStyles = makeStyles({
  root: {
    background: isHighlight => `${isHighlight ? 'indianred' : '#fff'}`,
    border: '2px solid #999',
    float: 'left',
    fontSize: '44px',
    fontWeight: 'bold',
    lineHeight: '23px',
    height:  '140px',
    margin: '-1px -1px 0 0',
    padding: 0,
    textAlign: 'center',
    width: '140px',
    '&:focus': {
      background: '#ddd',
      outline: 'none'
    },
  },
});

export const Square = (props: SquareProps) => {
  const {isHighlight, value, onClick} = props;
  const classes = useStyles(isHighlight);
  return(
    <Button
      className={classes.root}
      color="default"
      variant="contained"
      onClick={() => onClick()}
    >
      {value}
    </Button>
  );
};