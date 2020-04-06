import { Statistics } from '../../components/statistics';
import { IStatisticsStateProps, IStatisticsDispatchProps } from '../../components/statistics/types';
import { IApplicationModel } from '../../models/types';
import {connect} from 'react-redux';
import { clearGamesStatistics } from '../../use_cases/actions/statistics';

const mapStateToProps =
(
  state: IApplicationModel,
): IStatisticsStateProps => {
  return {
    statistic: state.statistics,
  }
}

export const mapDispatchToProps =
(
  dispatch: any,
): IStatisticsDispatchProps => {
  return {
    resetStatistics: () => dispatch(clearGamesStatistics()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
