import React  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
import Contact from "./Views/Contact";
import About from "./Views/About";
import ProductDetail from "./Views/ProductDetail";
import ErrorPage from "./Views/ErrorPage";
import Layout from "./Layout/Layout";
import ProductsList from "./Views/ProductsList";

import theme from "./Lib/Theme";
import { fetchBeers } from "./Redux/Reducers/beersReducer";

store.dispatch(fetchBeers())

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
        <ProductsList />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "detail/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
    errorElement: <ErrorPage />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ChakraProvider theme={theme}>
        </ChakraProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
