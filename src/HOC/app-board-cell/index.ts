import {BoardCell} from '../../components/boardCell'
import { IBoardCellStateProps, IBoardCellOwnProps, IBoardCellDispatchProps } from '../../components/boardCell/types'
import { IApplicationModel } from '../../models/types'
import {connect} from 'react-redux';
import getCellByIndex from '../../models/selectors/getCellByIndex';
import { makeMove } from '../../use_cases/actions/playGame';

export const mapStateToProps =
(
  state: IApplicationModel,
  {cellId}: IBoardCellOwnProps,
): IBoardCellStateProps => {
  const symbol = getCellByIndex(state, cellId);
  const isDisabled = typeof symbol !== "undefined";
  const {winner} = state.currentGame;
  const {name} = state.currentPlayer;

  let isSuccess;
  if (winner) {
    if (winner === name) {
      isSuccess = true;
    } else {
      isSuccess = false;
    }
  }
  return {
    isDisabled,
    symbol,
    isSuccess,
  }
}

export const mapDispatchToProps =
(
  dispatch: any,
  {cellId}: IBoardCellOwnProps,
): IBoardCellDispatchProps => ({  
  moveHere: () => dispatch(makeMove(cellId)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardCell);
