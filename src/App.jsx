import Home from "./Views/Products";
import React, { useEffect } from "react";
import "./App.css";
import { fetchBeers } from "./Redux/Reducers/beersReducer";
import { useDispatch } from "react-redux";
import { Box,Text } from "@chakra-ui/react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeers());
  }, []);

  return (
    <Box>
      <Text>Hello</Text>
    </Box>
  );
}

export default App;
