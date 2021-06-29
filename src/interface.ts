export type ISquare = 'X' | 'O' | null;

export type SquareProps = {
  isHighlight: boolean;
  value: string;
  onClick: () => void;
};

export type BoardPrpos = {
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

