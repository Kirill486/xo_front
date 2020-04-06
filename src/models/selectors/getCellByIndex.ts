import { IApplicationModel } from '../types';
import { BoardFieldSymbol } from '../../domainTypes';

export default (state: IApplicationModel, id: number): BoardFieldSymbol => {
  const flatBoard = state.currentGame.board.flat();
  return flatBoard[id];
}
