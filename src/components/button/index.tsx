import * as React from 'react';
import { IButtonProps } from './types';
import { doNothing } from '../../modules/doNothing';

import './styles.css';
import { CONTROL } from '../../modules/css_classes';

export const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <>
      <button
        className={`button__button ${CONTROL}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
    
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  onClick: doNothing,
}
