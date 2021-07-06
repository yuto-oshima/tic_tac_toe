import { Header } from '../../organisms/header';
import { Game } from '../../organisms/game';
import { MainProps } from '../../../interface';

export const Main = (props: MainProps) => {

  return(
    <div>
      <Header />
      <Game />
    </div>
  );
};