import React from "react";
import { Container, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function Products() {
  const id = 1;
  return (
    <Container
      w={"100wh"}
      h={"100%"}
      p={10}
      justifyItems="center"
      alignContent="center"
    >
      <Link to={`/detail/${id}`} as={ReachLink}>
        <h1>Product {id}</h1>
      </Link>
    </Container>
  );
}
