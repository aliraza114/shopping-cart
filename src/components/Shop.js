import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GlobalContext } from '../state/GlobalState'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
    },
}));

 

export default function CenteredGrid() {
    const classes = useStyles();

const { cart, products, addToCardFunction, addProductQuantity } = useContext(GlobalContext)
    
    const addToCart = (product) => {
        cart.find(item => item.id === product.id) ? addProductQuantity(product.id) : addToCardFunction(product)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                { products.map(product =>
                    <Grid key={product.id} item xs={12} sm={4} md={3} > 
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.url}
                                    title="Contemplative Reptile" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {product.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" onClick={() => addToCart(product)} color="primary" variant="outlined">Add to Cart {product.quantity} </Button>
                                <Typography> $ {product.price} </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
