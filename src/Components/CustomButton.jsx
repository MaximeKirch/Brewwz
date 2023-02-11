import React from 'react'
import {Box, Text, Button} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../Redux/Reducers/cartReducer'

export default function CustomButton({name, price, image_url}) {
    const dispatch = useDispatch()
  return (
    <>
        <Button 
            onClick={() => dispatch(addToCart({name, price, image_url}))}
            backgroundColor='brown.800'
            width='100%'
            height='30px'
        >
        Add to cart
        </Button>
    </>
  )
}
