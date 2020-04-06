export interface IButtonStateProps {
  disabled?: boolean;
}

export interface IButtonDispatchProps {
  onClick: () => void;
}

// tslint:disable-next-line: no-empty-interface
export interface IButtonProps extends
IButtonStateProps,
IButtonDispatchProps { }
