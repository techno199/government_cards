import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardType } from '../../../store/cards/types';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { Grid } from '@material-ui/core';

const styles = { 
  card: {
    width: 125,
    height: 150,
    border: '2px solid',
    '&.military': {
      borderColor: 'red'
    },
    '&.econimics': {
      borderColor: 'yellow'
    },
    '&.iplomacy': {
      borderColor: 'green'
    },
    '&.wildcard': {
      borderColor: 'purple'
    }
  },
  cardTitle: {
    borderBottom: '1px solid black'
  },
  cardDescription: {
    overflow: 'hidden'
  }
}

interface Props {
  classes: any;
  card: Card;
  className?: any;
}

const CardsSelectorCard = (props: Props) => {
  const [{opacity}, dragRef] = useDrag({
    item: { type: props.card.type.toString(), card: props.card },
    collect: monitor => ({
      opacity: monitor.isDragging ? 1 : 0.4
    })
  });

  let cardStyles;
  cardStyles = props.card ? {
    military: props.card.type === CardType.Military,
    econimics: props.card.type === CardType.Economics,
    diplomace: props.card.type === CardType.Diplomacy,
    wildcard: props.card.type === CardType.Wildcard
  } : null

  return (
    props.card ?
    <Grid container wrap="nowrap" direction="column" ref={dragRef} style={{opacity}} className={classNames(props.classes.card, props.className, cardStyles)}>
      <div className={props.classes.cardTitle}>{ props.card.name }</div>
      <div className={props.classes.cardDescription}>{ props.card.description }</div>
    </Grid> :
    <Grid container className={props.classes.card}>
    </Grid>
  )
}

const CardsSelectorCardStyled = withStyles(styles)(CardsSelectorCard);

export { CardsSelectorCardStyled as CardsSelectorCard }