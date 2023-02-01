import React, { useEffect } from "react";
import "./App.css";
import { fetchBeers } from "./Redux/Reducers/beersReducer";
import { useDispatch } from "react-redux";
import { Box, Grid, GridItem, Button, Flex, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import HomeProduct from "./Components/HomeProduct";
import MarbleBackground from "./assets/marble.jpg";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeers());
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage={MarbleBackground}
      backgroundSize="cover"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Grid templateColumns="1fr 3fr 1fr" gap={6}>
          <GridItem
            w="100%"
            display={{ base: "none", lg: "none", full: "block" }}
          ></GridItem>
          <GridItem w="100%">
            <Flex height="80vh" w="100%" justifyContent="center" pt={10}>
              <HomeProduct />
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex pt={10} justifyContent="center" alignItems="center" h="80vh">
              <Link to="/products" as={ReachLink}>
                {" "}
                <Button p={20} background="#F2f2f2" border="3px solid #e3d3c3">
                  See our products {">"}{" "}
                </Button>
              </Link>
            </Flex>
          </GridItem>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default App;
