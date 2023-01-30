import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Button
} from "@chakra-ui/react";
import { fetchBeers } from "../Redux/Reducers/beersReducer";
import { addToCart } from "../Redux/Reducers/cartReducer";

export default function ProductCard() {
  const beers = useSelector((state) => state.products.beers);
  const { id } = useParams();

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const beer = beers !== undefined && beers.find((beer) =>  beer.id === Number(id));
  const price = 5;
  const name = beer?.name;
  const image_url = beer?.image_url;
    

  const dispatch = useDispatch();

  return beer !== undefined ? (
    <Container
      display="flex"
      w="100%"
      h="auto"
      maxH="auto"
      pt={50}
      shadow="md"
      justifyContent="center"
      alignItems={isLargerThan768 ? "none" : "center"}
    >
      <Flex
        direction={isLargerThan768 ? "row" : "column"}
        width="100%"
        height="auto"
      >
        <Box
          display="flex"
          width={isLargerThan768 ? "50%" : "100%"}
          justifyContent={isLargerThan768 ? "end" : "center"}
        >
          <Image
            src={beer.image_url}
            alt="Beer picture"
            h={isLargerThan768 ? "400px" : "300px"}
            w="auto"
            maxH="500px"
            pr={isLargerThan768 ? 20 : 0}
          />
        </Box>
        <Box
          pt={20}
          px={5}
          display="flex"
          flexDirection="column"
          justifyContent={isLargerThan768 ? "start" : "center"}
        >
          <Text fontSize="24px" textAlign={isLargerThan768 ? "null" : "center"}>
            {beer.name}
          </Text>
          <Text pt={5} textAlign={isLargerThan768 ? "null" : "center"}>
            {beer.tagline}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Button onClick={() => dispatch(addToCart({id,name, image_url, price}))}>Add to card</Button>
      </Box>
    </Container>
  ) : (
    dispatch(fetchBeers())
  );
}
