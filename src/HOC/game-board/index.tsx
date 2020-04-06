import * as React from 'react';
import { Board, BoardRow } from '../../components/boardCell/elements';
import AppBoardCell from '../app-board-cell';
import {connect} from 'react-redux';

const GameBoard: React.FC<{}> = () => {
  return (
    <Board>
      <BoardRow>
        <AppBoardCell cellId={1} />
        <AppBoardCell cellId={2} />
        <AppBoardCell cellId={3} />
      </BoardRow>
      <BoardRow>
        <AppBoardCell cellId={4} />
        <AppBoardCell cellId={5} />
        <AppBoardCell cellId={6} />
      </BoardRow>
      <BoardRow>
        <AppBoardCell cellId={7} />
        <AppBoardCell cellId={8} />
        <AppBoardCell cellId={9} />
      </BoardRow>
    </Board>
  );
}

export default connect(undefined, undefined)(GameBoard);
