import React from 'react'
import {Container, Box, Text, Link} from '@chakra-ui/react'

export default function Home() {
  return (
    <Container w={'100wh'} h={'100vh'} p={10} justifyItems='center' alignContent='center'>
        <Box width={['50%','50%','100%']} background='red'>
            <Text textAlign={'center'}>
                Hello  
            </Text>
        </Box>
        <Box width={'50%'} >
            <Text>
                Hello  
            </Text>
        </Box>
    </Container>
  )
}
