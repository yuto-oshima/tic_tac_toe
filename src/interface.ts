// Square
export type ISquare = 'X' | 'O' | string | null;
export type SquareProps = {
  isHighlight: boolean;
  value: ISquare;
  onClick: () => void;
};

// Atoms Button
export type MuiButtonColorType = 'default' | 'inherit' | 'primary' | 'secondary'
export type MuiButtonVariantType = 'contained' | 'outlined' | 'text';

// Atoms Typography
export type MuiTypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type MuiTypographyColor = 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
export type MuiTypographyDisplay = 'initial' | 'block' | 'inline';
export type MuiTypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit';

export type GameBoardPrpos = {
  lines: number[] | null;
  squares: ISquare[];
  onClick: (i: number) => void;
};

type ILocation = {
  col: number | null;
  row: number | null;
};

export type History = {
  squares?: ISquare[];
  location?: ILocation;
};

export type MainProps = {};

export type GameInfoProps = {
  status: string;
  isSort: true | false;
  moves: any;
  onClick: () => void;
};