import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const theme = extendTheme({
  fonts: {
    heading: `"Open Sans", sans-serif`,
    body: `"Raleway", sans-serif'`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ChakraProvider theme={theme}></ChakraProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
