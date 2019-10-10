import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { CardType, Card } from '../../../store/cards/types';
import { AppState } from '../../../store';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { TargetType, Identifier } from 'dnd-core';
import { CardsSelectorCard } from '../cards-selector-card';
import { changeCardAction } from '../../../store/cards/actions';
import classNames from 'classnames';
import { CardsSelectorCardPlaceholder } from '../cards-selector-card-placeholder';

const styles = { 
  root: {
    minHeight: 210,
    border: '1px solid black',
  },
  cardsList: {
    flexGrow: 1,
    margin: 10
  },
  card: {
    margin: '5px'
  }
}

interface Props {
  classes: any;
  cards: Card[];
  type?: CardType;
  title: string;
  changeCard: typeof changeCardAction;
  isUnassignedSection?: boolean;
  availableSlots?: number;
  cardsContainerClassName?: any;
}

const CardsSelectorCardsSection = (props: Props) => {
  const [{isOver, canDrop}, dropRef] = useDrop({
    accept: Object.keys(CardType),
    drop: (item: { type: string, card: Card }) => {
      let newCard: Card;

      if (!props.isUnassignedSection && props.type != null && props.type === item.card.type) {
        // Если скидываем карточку из общего раздела в соответствующий раздел
        newCard = { ...item.card, isAssigned: true }
      } else {
        // Если из специфичного отдела куда-либо еще
        newCard = { ...item.card, isAssigned: false }
      }

      props.changeCard(item.card, newCard);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  const selectedCards = props.cards.filter(c => props.isUnassignedSection && c.isAssigned === false || c.type === props.type && c.isAssigned === true).map(c =>
    <CardsSelectorCard className={props.classes.card} card={c} />
  );

  if (props.availableSlots) {
    const freeSlots = props.availableSlots - selectedCards.length;

    for (let i=0; i<freeSlots; i++) {
      selectedCards.push(
        <CardsSelectorCardPlaceholder className={props.classes.card} />
      )
    }
  }

  return (
    <Grid container direction="column" wrap="nowrap" className={classNames(props.classes.root)} ref={dropRef}>
      <div className={props.classes.cardsSectionTitle}>
        <Typography>{ props.title }</Typography>
      </div>
      <Grid container className={classNames(props.classes.cardsList, props.cardsContainerClassName)}>
        {
          selectedCards
        }
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: AppState) => ({
  cards: state.cards.cards
});

const mapDispatchToProps = {
  changeCard: changeCardAction
}

const CardsSelectorCardsSectionStyled = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CardsSelectorCardsSection));

export { CardsSelectorCardsSectionStyled as CardsSelectorCardsSection }