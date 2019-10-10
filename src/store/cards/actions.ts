import { ChangeCardAction, Card, CardType, CHANGE_CARD } from "./types";

export const changeCardAction = (card: Card, newCard: Card): ChangeCardAction => ({
  type: CHANGE_CARD,
  card,
  newCard
});