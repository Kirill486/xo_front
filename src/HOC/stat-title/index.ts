import { ITitleStateProps } from '../../components/title/types';
import { IApplicationModel } from '../../models/types';
import {connect} from 'react-redux';
import { Title } from '../../components/title';

export const mapStateToProps = (state: IApplicationModel): ITitleStateProps => {
  return {
    text: `Hi, ${state.currentPlayer.name})`,
  }
}

export default connect(mapStateToProps)(Title);
