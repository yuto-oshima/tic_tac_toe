import { Button as MuiButton } from '@material-ui/core';
import { MuiButtonColorType, MuiButtonVariantType, ISquare } from '../../../interface';

type ButtonProps = {
  color?: MuiButtonColorType;
  variant?: MuiButtonVariantType;
  style?: any;
  onClick?: () => void;
  value?: ISquare;
};

export const Button = (props: ButtonProps) => {
  const {style, color, variant, onClick, value} = props;
  return(
    <MuiButton
      style={{ ...style }}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {value}
    </MuiButton>
  );
};