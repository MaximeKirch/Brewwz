import React from "react";
import { Box, Container, Flex, Grid, GridItem, Link } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { fetchBeers } from "../Redux/Reducers/beersReducer";

export default function Products() {
  const products = useSelector((state) => state.products.beers);
  
  return (
  products ? (
    <Box
      display="flex"
      w='100%'
      justifyContent='center'
    >
    <Grid
      templateColumns="repeat(3, 1fr)"
      width={'100%'}
      gap={6}
    >
      {products?.map((product) => (
    <GridItem>
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image_url={product.image_url}
          />
    </GridItem>
      ))}
    
    </Grid>
    </Box>
      ) : (
        null
      )
  );
}
