import React, { useContext, useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput  from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'

import { GlobalContext } from '../state/GlobalState'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));


export default function AddProduct() {   
    const classes = useStyles()
    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [url, setUrl] = useState('');
    
    const [nameerror, setNameError] = useState('')
    const [priceerror, setPriceError] = useState('')
    const [descerror, setDescError] = useState('')
    const [urlerror, setUrlError] = useState('')
    
    const { addProd } = useContext(GlobalContext)
    
        const saveProductData = () => {
            if(name.length < 3){
                setNameError('Name should be atleast three characters long')
            }
            if(price <= 0) {
                setPriceError('Price should be greater than 0')
            }
            if(desc.length < 5){   
                setDescError('Description should be atleast five characters long')
            } 
            //    if( !(url.startsWith('https')) || !(url.startsWith('http')) ){
            if( !(url.startsWith('https'))){
                setUrlError('Image Url is not valid')
            }

            let data = {
                'id': new Date(),
                'name': name,
                'price': price,
                'desc': desc,
                'url': url,
            }
            
            addProd(data)
        console.log(data)
}


    const handleNameChange = (event) => {
        setName(event.target.value)
        setNameError('')
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
        setPriceError('')
    }
    
    const handleDescChange = (event) => {
        setDesc(event.target.value)
        setDescError('')
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
        setUrlError('')
    }

    return (
        <form>
            <Grid container justify="center" >
            <h1>Add Product Data</h1>
            </Grid>
            <Grid container justify="center">
                <FormControl 
                    className={classes.margin} 
                    variant="outlined">
                    <InputLabel 
                        htmlFor="component-name">
                        Name</InputLabel>
                    <OutlinedInput
                        type='text' id="component-name" 
                        value={name} 
                        name="name"
                        onChange={handleNameChange} 
                        label="Name" />
                        <span className='errorClass'> {nameerror} </span>
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-desc">Description</InputLabel>
                    <OutlinedInput id="component-desc" value={desc} onChange={handleDescChange} label="Description" />
                    <span className='errorClass'> {descerror} </span>
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-price">Price</InputLabel>
                    <OutlinedInput type='number' id="component-price" value={price} onChange={handlePriceChange} label="Price" />
                    <span className='errorClass'> {priceerror} </span>
                </FormControl>
            </Grid>
            <Grid container justify="center">
                    <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-url">Image Url</InputLabel>
                    <OutlinedInput id="component-url" value={url} onChange={handleUrlChange} label="Image Url" />
                    { urlerror.length > 0 ? <span className="errorClass"> {urlerror} </span> : '' }
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <Button onClick={saveProductData} className={classes.margin} variant="contained" color="primary">
                    Add Product
                </Button>
            </Grid>
        </form>
    );
}