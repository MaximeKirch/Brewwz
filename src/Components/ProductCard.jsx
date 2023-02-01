import React from "react";
import { Text, Image, Box, Link } from "@chakra-ui/react";

export default function ProductCard({ id, name, image_url }) {
  return id && name && image_url ? (
    <Box
      maxW="250px"
      maxHeight="300px"
      display="flex"
      flexDir={"column"}
      alignContent="center"
      p={10}
      my={20}
    >
      <Link href={`/detail/${id}`} color="#000" textDecoration="none">
        <Box
          w="100%"
          height="300px"
          display="flex"
          flexDir={"column"}
          alignContent="center"
          border="1px solid #E3D3C3"
          p={10}
          borderRadius={25}
          backgroundColor="rgba(255,255,255,0.6)"
          _hover={{
            backgroundColor: "#E3D3C3",
          }}
        >
          <Image
            src={image_url}
            alt="Beer picture"
            alignSelf="center"
            h="250px"
            maxH="auto"
            w="80px"
          />
          <Text textAlign="center" pt={10} fontSize={22} fontWeight={500}>
            {name}
          </Text>
        </Box>
      </Link>
    </Box>
  ) : null;
}
