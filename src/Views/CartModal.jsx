import React from "react";
import { Box, Text, Image, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../Redux/Reducers/cartReducer";

import {AiOutlineClose} from 'react-icons/ai'

export default function CartModal() {
  const cartLength = useSelector((state) => state.cart.cart.length);
  const dispatch = useDispatch();

  console.log(cartLength)

  const changeToggle = () => {
    dispatch(toggleCart());
  };

  return (
    <Box
      display="flex"
      position="fixed"
      flexDir='column'
      bottom="10"
      right="10"
      w="40%"
      h="60%"
      justifyContent="center"
      backgroundColor="rgba(255,255,255,0.6)"
      borderRadius={25}
      border="1px solid #000"
    >
      <Box display="flex" flexDir="row">
        <Icon name="close" />
        <Text>Cart</Text>
        <Box position="absolute" top="10" right="20" onClick={changeToggle}>
          <Icon as={AiOutlineClose} name="close" />
        </Box>
      </Box>
<Box backgroundColor='blue'>
      {
        cartLength >= 1 ? 
        (
            <Box backgroundColor='red' display='flex' justifySelf='center' alignSelf='center'>
                <Text>Cart length is {cartLength}</Text>
            </Box>
        ) : (
            <Box>
                <Text>Cart is empty</Text>
            </Box>
        )
      }
      </Box>
    </Box>
  );
}
