import React from 'react'
import {Box, Text, Image} from '@chakra-ui/react'

export default function CartLine({name, price, image, quantity}) {
  return (
    <Box>
        <Image src={image} alt="Beer picture" />
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{quantity}</Text>
    </Box>
  )
}
