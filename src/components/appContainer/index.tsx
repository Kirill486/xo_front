import * as React from 'react';

import './styles.css';

export const AppContainer: React.FC<{}> = ({children}) => {
  return (
    <div className="application__container">
      {children}
    </div>
  );
}

export const ApplicationRow: React.FC<{}> = ({children}) => {
  return (
    <div className="application__row">{children}</div>
  );
}

export const ApplicationRowWide: React.FC<{}> = ({children}) => {
  return (
    <div className="application__row application__row--wide">{children}</div>
  );
}

export const ApplicationColumn: React.FC<{}> = ({children}) => {
  return (
    <div className="application__column">{children}</div>
  );
}
