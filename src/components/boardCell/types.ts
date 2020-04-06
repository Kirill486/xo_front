import { BoardFieldSymbol } from '../../domainTypes';

export interface IBoardCellOwnProps {
  cellId: number;
}

export interface IBoardCellStateProps {
  symbol: BoardFieldSymbol;
  isDisabled: boolean;
  isSuccess?:boolean;
}

export interface IBoardCellDispatchProps {
  moveHere: () => void;
}

export interface IBoardCellProps extends
IBoardCellOwnProps,
IBoardCellStateProps,
IBoardCellDispatchProps { }
