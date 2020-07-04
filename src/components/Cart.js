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

    const { cart, removeProductQuantity } = useContext(GlobalContext)
    const removeFromCart = (cartItem) => {
        removeProductQuantity(cartItem.id)
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                { cart.map(cartItem =>
                    <Grid item xs={3}> 
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={cartItem.url}
                                    title="Contemplative Reptile" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {cartItem.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {cartItem.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button disabled={cartItem.quantity < 1} onClick={() => removeFromCart(cartItem)} size="small" color="secondary" variant="outlined">
                                    remove {cartItem.quantity}
                                </Button>
                                <Typography variant="h5" color="textSecondary" component="h2">
                                        {cartItem.price * cartItem.quantity}$         
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
