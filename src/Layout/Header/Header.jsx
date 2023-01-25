import React from 'react'
import {
    Container,
    Box,
    Text,
    Link
} from '@chakra-ui/react'

export default function Header() {
  return ( 
    <>
    <Container>
        <Box>
        <Link to="/">
            <Text>
                Logo   
            </Text>
            <Text>
            Brewwz
            </Text>
            </Link>
        </Box>
    </Container>
    </>
  )
}
