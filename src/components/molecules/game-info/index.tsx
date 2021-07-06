import { Button } from '../../atoms/button';
import { Text } from '../../atoms/text';
import { GameInfoProps } from '../../../interface';
import { Box } from '@material-ui/core';

export const GameInfo = (props: GameInfoProps) => {
  const { isSort, onClick, moves, status } = props;
  return(
    <div>
      <Text value={status} variant="h4"/>
      <Box m={2}>
        <Button
          value={isSort ? "昇順" : "降順"}
          color={isSort ? "primary" : "secondary"}
          variant="contained"
          onClick={() => onClick()}
        />
      </Box>
      <div>{moves}</div>
    </div>
  );
};