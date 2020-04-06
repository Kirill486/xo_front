import { ITitleStateProps } from '../../components/title/types';
import { IApplicationModel } from '../../models/types';
import {connect} from 'react-redux';
import { Title } from '../../components/title';

export const mapStateToProps = (state: IApplicationModel): ITitleStateProps => {
  const { winner } = state.currentGame;
  let text = '';
  if (winner) {
    text = `Winner: ${winner}`
  } else {
    const { nextMove } = state.currentGame
    text = `Turn: ${nextMove}`;
  }
  return {
    text,
  }
}

export default connect(mapStateToProps)(Title);
