import React from "react";
import { Text, Image, Box, Link } from "@chakra-ui/react";

export default function ProductCard({ id, name, image_url }) {

  return id && name && image_url ? (
      <Box
      maxW="250px"
      height="250px"
      display="flex"
      flexDir={'column'}
      alignContent="center"
      shadow="md"
    >
      <Link href={`/detail/${id}`} color="gray" textDecoration="none">
      <Box
        w='100%'
        display='flex'
        flexDir={'column'}
        alignContent='center'
        >
        <Image src={image_url} alt="Beer picture" alignSelf='center' maxH="200px" H='auto' w="80px" />
        <Text textAlign="center">{name}</Text>
        </Box>
      </Link>
    </Box>
  ) : null;
}
