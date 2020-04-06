import * as React from 'react';
import { IBoardCellProps } from './types';

import './styles.css';
import { CONTROL } from '../../modules/css_classes';

export const BoardCell: React.FC<IBoardCellProps> = ({
  symbol,
  isDisabled,
  moveHere,
  isSuccess,
}) => {
  let cellClass = `board-cell__cell ${CONTROL}`;
  if (isDisabled) {
    cellClass += ' board-cell__cell--disabled'
  }

  if (typeof isSuccess !== "undefined") {
    if (isSuccess) {
      cellClass += ' board-cell__cell--success'
    } else {
      cellClass += ' board-cell__cell--failure'
    }
  }

  // for empty
  let symbolToRepresent = "   ";

  const isPlayersSymbol = typeof symbol === "boolean";
  
  if (isPlayersSymbol) {
    if (symbol) {
      symbolToRepresent = " X ";
    } else {
      symbolToRepresent = " O ";
    }
  }

  return (
  <button
    className={cellClass}
    onClick={moveHere}
    disabled={isDisabled}
  >{symbolToRepresent}</button>
  );
}

BoardCell.displayName = 'BoardCell';
