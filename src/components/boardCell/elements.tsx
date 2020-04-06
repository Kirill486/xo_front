import * as React from 'react';
import './styles.css';

export const Board: React.FC<{}> = ({children}) => {
  return (
    <div className="board">{children}</div>
  );
}

export const BoardRow: React.FC<{}> = ({children}) => {
  return (
    <div className="board-row">{children}</div>
  );
}
