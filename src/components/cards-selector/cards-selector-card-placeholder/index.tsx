import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';

const styles = { 
  card: {
    width: 125,
    height: 150,
    border: '2px solid black'
  }
}

interface Props {
  classes: any;
  className?: any
}

const CardsSelectorCardPlaceholder = (props: Props) => {
  return (
    <Grid className={classNames(props.classes.card, props.className)}></Grid>
  )
}

const CardsSelectorCardPlaceholderStyled = withStyles(styles)(CardsSelectorCardPlaceholder);

export { CardsSelectorCardPlaceholderStyled as CardsSelectorCardPlaceholder }