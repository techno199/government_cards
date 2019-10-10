export const CHANGE_CARD = 'CHANGE_CARD';

export interface ChangeCardAction {
  type: typeof CHANGE_CARD,
  card: Card,
  newCard: Card
}

export interface CardsState {
  cards: Card[];
}

export interface Card {
  type: CardType;
  name: string;
  description: string;
  isAssigned: boolean
}

export enum CardType {
  Military,
  Economics,
  Diplomacy,
  Wildcard
}

export type CardsActions = ChangeCardAction;