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
} from "@chakra-ui/react";
import { fetchBeers } from "../Redux/Reducers/beersReducer";
import { addToCart } from "../Redux/Reducers/cartReducer";
import MarbleBackground from "../assets/marble.jpg";
import CustomButton from "../Components/CustomButton";

export default function ProductDetail() {
  const beers = useSelector((state) => state.products.beers);
  const { id } = useParams();

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const beer = beers !== undefined && beers.find((beer) =>  beer.id === Number(id));
  const price = 5;
  const name = beer?.name;
  const image_url = beer?.image_url;

  return beer !== undefined ? (
    <Container
      display="flex"
      w="100%"
      minH="80vh"
      height="auto"
      maxH="auto"
      pt={50}
      shadow="md"
      justifyContent="center"
      alignItems={isLargerThan768 ? "none" : "center"}
      backgroundImage={MarbleBackground}
      backgroundSize="cover"
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
          px={10}
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
          <Text py={5} mb={10} textAlign={isLargerThan768 ? "null" : "center"} maxW='50%'>
            {beer.description}
          </Text>
          <Box width="90px">
            <CustomButton name={name} price={price} image_url={image_url}/>
          </Box>
        </Box>
      </Flex>
    </Container>
  ) : (
    <Text>Product not found :( </Text>
  );
}
