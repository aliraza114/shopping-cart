import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput  from '@material-ui/core/OutlinedInput'


export default function AddProduct() {
    
  const [name, setName] = React.useState('Enter Product Name');
  const handleChange = (event) => {
      setName(event.target.value)
  }
    return (
        <form>
        <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
        </FormControl>
        </form>
    );
}