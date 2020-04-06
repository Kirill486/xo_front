import { Action } from 'redux';
import { IOldGame } from '../../domainTypes';

export const oldGamesInitial: IOldGame[] = [];

export const oldGamesReducer =
(
  state: IOldGame[] = oldGamesInitial,
  action: Action,
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
