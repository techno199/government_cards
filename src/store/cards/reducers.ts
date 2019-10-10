import { CardsState, CardsActions, CHANGE_CARD } from "./types";
import { initialCards } from "./initial-cards";

const initialState: CardsState = {
  cards: initialCards
}

export const cardsReducer = (state: CardsState = initialState, action: CardsActions): CardsState => {
  switch (action.type) {
    case CHANGE_CARD:
      let targetCardIndex = state.cards.findIndex(c => c === action.card);

      if (targetCardIndex >= 0) {
        state.cards.splice(targetCardIndex, 1, { ...state.cards[targetCardIndex], ...action.newCard });
      }

      return state;
    default:
      return state;
  }
}