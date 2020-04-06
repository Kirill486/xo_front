import * as React from 'react';
import { IInputConfirmProps } from './types';
import { Button } from '../button';
import { doNothing } from '../../modules/doNothing';
import './styles.css';

export const TextInputConfirm: React.FC<IInputConfirmProps> =
({onConfirm, initialValue}) => {
  const [value, setValue] = React.useState(initialValue);

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onConfirmShangeValue = () => {
    onConfirm(value);
  }

  return (
    <div className="input-confirm__container">
      <input
        type="text"
        className="input-confirm__input"
        value={value}
        onChange={setInputValue}
      />
      <Button
        onClick={onConfirmShangeValue}    
      >Ok</Button>
    </div>
  );
}

TextInputConfirm.displayName = 'TextInputConfirm';
TextInputConfirm.defaultProps = {
  initialValue: '',
  onConfirm: doNothing,
}
