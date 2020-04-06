export interface IInputConfirmStateProps {
  initialValue: string;
}

export interface IInputConfirmDispatchProps {
  onConfirm: (value: string) => void;
}

// tslint:disable-next-line: no-empty-interface
export interface IInputConfirmProps extends
IInputConfirmStateProps,
IInputConfirmDispatchProps { }
