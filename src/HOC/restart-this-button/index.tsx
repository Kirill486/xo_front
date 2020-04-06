import * as React from 'react';
import {connect} from 'react-redux';
import { Button } from '../../components/button';
import { IButtonDispatchProps, IButtonProps } from '../../components/button/types';
import { restartCurrentGame } from '../../use_cases/actions/playGame';

const RestartThisButton: React.FC<IButtonProps> = (props) => (
  <Button
    {...props}
  >
    Restart this
  </Button>
);

const mapDispatchToProps =
(
  dispatch: any,
): IButtonDispatchProps => {
  return {
    onClick: () => dispatch(restartCurrentGame()),
  }
}

export default connect(undefined, mapDispatchToProps)(RestartThisButton);
