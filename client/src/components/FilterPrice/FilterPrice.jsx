import { Input, Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import './FilterPrice.scss'
import { filterPrice } from '../../Redux/Slices/setProducts'
import { filterProduct } from '../../Redux/Slices/setProducts'



function FilterPrice() {
    const dispatch = useDispatch()
    function handlePrice(e){
        dispatch(filterPrice({name:e.target.name, value: e.target.value}))
        dispatch(filterProduct())
        console.log(e.target.name, e.target.value)
    } 
    return(
   <Box>
    <Box>
        <Input  name="min" type="number" defaultValue={0} onChange={handlePrice}/>
    </Box>
    <Box>
        <Input  name="max" type="number" defaultValue={0} onChange={handlePrice} />
    </Box>
   </Box>
   )
}

export default FilterPrice