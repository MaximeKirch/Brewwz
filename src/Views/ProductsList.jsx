import React from "react";
import { Box, Container, Flex, Grid, GridItem, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import marble from "../assets/marble.jpg";

export default function Products() {
  const products = useSelector((state) => state.products.beers);

  return products ? (
    <Box
      display="flex"
      w="100%"
      justifyContent="center"
      backgroundImage={marble}
      backgroundSize="cover"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        width={"100%"}
        gap={6}
        alignContent="center"
        ml={'10%'}
      >
        {products?.map((product) => (
          <GridItem>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image_url={product.image_url}
              />
            </motion.div>
          </GridItem>
        ))}
      </Grid>
    </Box>
  ) : null;
}
