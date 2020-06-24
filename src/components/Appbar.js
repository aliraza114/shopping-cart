import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
}))

export default function Appbar() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography >
                        Shopping Cart
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}