import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput  from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles' 
 
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function AddProduct() {
  const classes = useStyles()  
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [url, setUrl] = React.useState('');

  const [nameerror, setNameError] = React.useState('')
  const [priceerror, setPriceError] = React.useState('')
  const [descerror, setDescError] = React.useState('')
  const [urlerror, setUrlError] = React.useState('')
  

  const saveProductData = () => {
      if(name === '' && name.length >= 3){
        setNameError('Name should be atleast three characters long')
      }else if(price <= 0) {
        setPriceError('Price should be greater than 0')
        //   setNameError('')
      }else if(desc.length <= 5){   
        setDescError('Description should be atleast five characters long')
      } else if( !desc.url.startsWith('http') || !desc.url.startsWith('https')){
          setUrlError('Image Url is not valid')
      }
    let data = {
        'id': new Date(),
        'name': name,
        'price': price,
        'desc': desc,
        'url': url,
    }
    console.log(data)
}


    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    
    const handleDescChange = (event) => {
        setDesc(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    return (
        <form >
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
                        <span className="errorClass"> {nameerror} </span>
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-desc">Description</InputLabel>
                    <OutlinedInput id="component-desc" value={desc} onChange={handleDescChange} label="Description" />
                </FormControl>
            </Grid>
            <Grid container justify="center">
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-price">Price</InputLabel>
                    <OutlinedInput type='number' id="component-price" value={price} onChange={handlePriceChange} label="Price" />
                </FormControl>
            </Grid>
            <Grid container justify="center">
                    <FormControl className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="component-url">Image Url</InputLabel>
                    <OutlinedInput id="component-url" value={url} onChange={handleUrlChange} label="Image Url" />
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