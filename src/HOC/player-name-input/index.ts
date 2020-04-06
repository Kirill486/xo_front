import {TextInputConfirm} from '../../components/text-input-confirm';
import {IInputConfirmStateProps, IInputConfirmDispatchProps} from '../../components/text-input-confirm/types';
import { IApplicationModel } from '../../models/types';
import {connect} from 'react-redux';
import { introduceSelf } from '../../use_cases/actions/statistics';

const mapStateToProps =
(
  state: IApplicationModel,
): IInputConfirmStateProps => {
  return {
    initialValue: state.currentPlayer.name,
  }
}

const mapDispatchToProps =
(
  dispatch: any,
): IInputConfirmDispatchProps => {
  return {
    onConfirm: (name: string) => dispatch(introduceSelf(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputConfirm);
