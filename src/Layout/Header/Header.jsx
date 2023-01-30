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
        boxShadow="lg"
      >
        <Box
          display="flex"
          flexDirection="row"
          w="60%"
          justifyContent="space-between"
        >
          <Link
            as={ReachLink}
            to="/"
            pt={10}
          >
            <Box display="flex" flexDir="row">
              <Text fontSize={24} px={10} color='#E3D3C3'>
                Brewwz
              </Text>
            </Box>
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection={"row"}
          w="40%"
          justifyContent="space-around"
          pt={15}
        >
          <Link
            as={ReachLink}
            to="/products"
          >
            <Text>Products</Text>
          </Link>
          <Link 
            as={ReachLink} 
            to="/about" 
        >
            <Text>About</Text>
          </Link>
          <Link
            as={ReachLink}
            to="/contact"
          >
            <Text>Contact</Text>
          </Link>
        </Box>
      </Container>
    </>
  );
}
