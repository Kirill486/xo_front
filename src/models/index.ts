import { combineReducers, createStore, applyMiddleware } from 'redux'
import { currentGameReducer } from './reducers/currentGame'
import { IApplicationModel } from './types'
import { currentPlayerReducer } from './reducers/currentPlayer'
import { oldGamesReducer } from './reducers/oldGames'
import { statisticsReducer } from './reducers/statistics'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../use_cases/sagas'

const appReducer = combineReducers<IApplicationModel>({
  currentGame: currentGameReducer,
  currentPlayer: currentPlayerReducer,
  oldGames: oldGamesReducer,
  statistics: statisticsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const applicationModel = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);