import { Card, CardType } from "./types";

export const initialCards: Card[] = [
  {
    type: CardType.Military,
    name: 'Strategic Air Force',
    description: '+50% Prodution toward information era air units, and toward all Carriers.',
    isAssigned: false
  },
  {
    type: CardType.Economics,
    name: 'Ecommerce',
    description: '+2 Production and +5 Gold for international Trade Routes',
    isAssigned: false
  },
  {
    type: CardType.Economics,
    name: 'Publick Works',
    description: '+30% Production toward Builders, and newely trained Builders gain 2 extra build actions.',
    isAssigned: false
  },
  {
    type: CardType.Economics,
    name: 'Market Economy',
    description: 'Your international Trade Routes provide +1 Gold per Luxury and Strategic resource improved at the destination, as well as +2 Culture and +2 Science.',
    isAssigned: false
  },
  {
    type: CardType.Diplomacy,
    name: 'Containtment',
    description: 'Each Envoy you send to a city-state counts as two, if its Suzerain has a different government than you.',
    isAssigned: false
  },
  {
    type: CardType.Wildcard,
    name: 'Oligarchic Legacy',
    description: 'All land melee, anti-cavalry and naval melee class units gain +4 Combat Strength',
    isAssigned: false
  },
  {
    type: CardType.Wildcard,
    name: 'Laisezz-Faire',
    description: '+4 Great Merchant points per turn',
    isAssigned: false
  }
]