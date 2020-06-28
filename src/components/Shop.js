import React, {useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

import {GlobalContext} from '../state/GlobalState'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  margin: {
    margin: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 180,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  const { products, addToCardFunction } = useContext(GlobalContext)

  const addToCart = (value) => {
        addToCardFunction('Id', value)
  }
 
  return (
    <Grid container item xs="12" sm="12" md="12">
       { products.map(product =>  <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            { product.name }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {product.desc}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
            <Typography variant="subtitle1" color="textSecondary"> $ {product.price} </Typography>
        </div>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
             <Favorite />
          </IconButton>
          <Button onClick={() => addToCart(product.id)} variant="contained">Add to Cart</Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={product.url}
        title="Live from space album cover"
      />
    </Card> )}
    </Grid>
  );
}
