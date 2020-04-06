import { IStatistics } from '../../domainTypes';

export interface IStatisticsStateProps {
  statistic: IStatistics;
}

export interface IStatisticsDispatchProps {
  resetStatistics: () => void;
}

// tslint:disable-next-line: no-empty-interface
export interface IStatisticsProps extends
IStatisticsStateProps,
IStatisticsDispatchProps {}
