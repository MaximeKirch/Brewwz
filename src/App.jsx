import Home from './Views/Home'
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import ErrorPage from './Views/ErrorPage'
import './App.css'
import Layout from './Layout/Layout'
import { fetchBeers } from "./Redux/Reducers/beersReducer";
import { useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchBeers());
  }, []);
  return (
    <Routes>
       <Route element={<Layout />}>
        <Route index element={<Home />} />
      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
  )
}

export default App
