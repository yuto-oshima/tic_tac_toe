import { Typography } from '@material-ui/core';
import { MuiTypographyAlign, MuiTypographyColor, MuiTypographyDisplay, MuiTypographyVariant } from '../../../interface';

type TextProps = {
  align?: MuiTypographyAlign;
  color?: MuiTypographyColor;
  display?: MuiTypographyDisplay;
  gutterBottom?: true | false;
  noWrap?: true | false;
  paragraph?: true | false;
  variant: MuiTypographyVariant;
  value: string | number;
};

export const Text = (props: TextProps) => {
  const {align, color, display, gutterBottom, noWrap, paragraph, variant, value } = props
  return(
    <Typography
      align={align}
      color={color}
      display={display}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      variant={variant}
    >
      {value}
    </Typography>
  );
};