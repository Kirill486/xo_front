import * as React from 'react';
import {connect} from 'react-redux';
import { Button } from '../../components/button';
import { IButtonDispatchProps, IButtonProps } from '../../components/button/types';
import { startNewGame } from '../../use_cases/actions/playGame';

const StartNewButton: React.FC<IButtonProps> = (props) => (
  <Button
    {...props}
  >
    Start new
  </Button>
);

const mapDispatchToProps =
(
  dispatch: any,
): IButtonDispatchProps => {
  return {
    onClick: () => dispatch(startNewGame()),
  }
}

export default connect(undefined, mapDispatchToProps)(StartNewButton);
