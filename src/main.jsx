import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme, Spinner } from "@chakra-ui/react";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import Contact from "./Views/Contact";
import About from "./Views/About";
import ProductCard from "./Views/ProductCard";
import ErrorPage from "./Views/ErrorPage";
import Layout from "./Layout/Layout";
import Products from "./Views/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products/detail/:id",
        element: (
          <Layout>
            <ProductCard />
          </Layout>
        ),
        errorElement: <ErrorPage />,
        },
      ],
  },
  {
    path: "contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorPage />,
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
