import { combineReducers } from 'redux'
import { cardsReducer } from './cards/reducers';

export const rootReducer = combineReducers({
  cards: cardsReducer
});

export type AppState = ReturnType<typeof rootReducer>;