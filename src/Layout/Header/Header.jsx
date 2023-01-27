import React from "react";
import { Container, Box, Text, Link, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Container
        display="flex"
        flexDir="row"
        pt={5}
        px={5}
        background="#000"
        minHeight="50px"
      >
        <Box
          display="flex"
          flexDirection="row"
          w="40%"
          justifyContent="space-between"
        >
          <Link
            as={ReachLink}
            to="/"
            textDecoration="none"
            color="white"
            pt={10}
          >
            <Box display="flex" flexDir="row">
              <Text fontSize={24} px={10}>
                Brewwz
              </Text>
            </Box>
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection={"row"}
          w="60%"
          justifyContent="space-around"
          pt={15}
        >
          <Link
            as={ReachLink}
            to="/products"
            textDecoration="none"
            color="white"
          >
            <Text>Products</Text>
          </Link>
          <Link 
            as={ReachLink} 
            to="/about" 
            textDecoration="none" 
            color="white"
        >
            <Text>About</Text>
          </Link>
          <Link
            as={ReachLink}
            to="/contact"
            textDecoration="none"
            color="white"
          >
            <Text>Contact</Text>
          </Link>
        </Box>
      </Container>
    </>
  );
}
