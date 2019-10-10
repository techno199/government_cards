import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Card, CardType } from '../../store/cards/types';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { CardsSelectorCard } from './cards-selector-card';
import { CardsSelectorCardsSection } from './cards-selector-cards-section';

const styles = { 
  root: {
    minHeight: 400
  },
  cardSection: {
    justifyContent: 'center'
  }
}

interface Props {
  classes: any;
  cards: Card[];
}

const CardsSelector = (props: Props) => {
  return (
    <Grid className={props.classes.root} container justify="center">
      <Grid item container direction="column" xs={4}>
        <Grid item>
          <CardsSelectorCardsSection cardsContainerClassName={props.classes.cardSection} availableSlots={1} title="Military" type={CardType.Military} />
        </Grid>

        <Grid item>
          <CardsSelectorCardsSection cardsContainerClassName={props.classes.cardSection} availableSlots={3} title="Economics" type={CardType.Economics} />
        </Grid>

        <Grid item>
          <CardsSelectorCardsSection cardsContainerClassName={props.classes.cardSection} availableSlots={1} title="Diplomacy" type={CardType.Diplomacy} />
        </Grid>

        <Grid item>
          <CardsSelectorCardsSection cardsContainerClassName={props.classes.cardSection} availableSlots={2} title="Wildcards" type={CardType.Wildcard} />
        </Grid>
      </Grid>

        <Grid item xs={6}>
          <CardsSelectorCardsSection title="All cards" isUnassignedSection={true} />
        </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: AppState) => ({
  cards: state.cards.cards
});

const CardsSelectorStyled = connect(mapStateToProps)(withStyles(styles)(CardsSelector));

export { CardsSelectorStyled as CardsSelector }