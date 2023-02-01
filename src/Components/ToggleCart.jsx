import React from 'react'
import {Box, Icon} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../Redux/Reducers/cartReducer'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function ToggleCart() {

    const dispatch = useDispatch()
    const changeToggle = () => {
        dispatch(toggleCart())
    }

  return (
    <Box 
        display='flex'
        w='70px'
        h='70px'
        position='fixed'
        bottom='10'
        right='10'
        backgroundColor="#000"
        borderRadius={50}
        onClick={changeToggle}
        alignItems='center'
        justifyContent='center'
        >
            <Icon as={AiOutlineShoppingCart} h={35} w={35} color='#fff'/>
        </Box>
  )
}
