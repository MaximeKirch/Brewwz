import React from "react";
import { Box, Text, Spinner, Image, Flex, Heading, Button, Link } from "@chakra-ui/react";
import {Link as ReachLink} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function HomeProduct() {
  const beers = useSelector((state) => state.products.beers);
  const loading = useSelector((state) => state.products.loading);

  console.log(beers, loading);

  return loading === "pending" ? (
    <Box>
      <Spinner />
    </Box>
  ) : (
    <Box display='flex' flexDir={['column', 'row', 'row']} w="100%" h="100%" maxH="100%" pt={50} shadow='md'>
      {beers[0] !== undefined && (
        <Flex  w="100%">
          <Box p={5} w="20%" mr={10}>
            <Image
              pl={20}
              src={beers[1].image_url}
              alt="Beer picture"
              h='100%'
             maxH='500px'
              w="auto"
            />
          </Box>
          <Box px={20} pt={"15%"} display="flex" flexDir="column" shadow="md">
            <Heading textTransform="uppercase" fontSize="36px" fontWeight="bold" textColor='#000'>
              {beers[1].name}
            </Heading>
            <Text p={2}>{beers[1].tagline}</Text>
            <Box mt={20} py={20}>
                <Text fontSize='20px' lineHeight='1.4'>{beers[1].description}</Text>
            </Box>
            <Box ml={10}>
            <Link to={`/detail/${beers[1].id}`}  as={ReachLink}>
                <Button h={40} w='auto' p={10}> More infos</Button>
            </Link>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
}
