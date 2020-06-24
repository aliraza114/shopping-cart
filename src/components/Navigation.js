import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CartIcon from '@material-ui/icons/AddShoppingCart'
import Grid from '@material-ui/core/Grid'
import Shop from '@material-ui/icons/Shop'
import Add from '@material-ui/icons/Add'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
        <div>
        <Grid container justify="flex-end" alignItems="baseline"  item xs={12} sm={12} md={12}>
             <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
        showLabels>
        <BottomNavigationAction label="Product" icon={<Add />} />
        <BottomNavigationAction label="Shop" icon={<Shop />} />
        <BottomNavigationAction label="Cart" icon={<CartIcon />} />
        </BottomNavigation>     
        </Grid>
       
     </div>
  );
}