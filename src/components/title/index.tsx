import * as React from 'react';
import { ITitleProps } from './types';
import './styles.css';

export const Title: React.FC<ITitleProps> =
({text}) => {
  return (
    <div className="title__container">
      <h1 className="title__title">{text}</h1>
    </div>
  );
}

Title.defaultProps = {
  text: 'Default title',
}

Title.displayName = 'Title';
