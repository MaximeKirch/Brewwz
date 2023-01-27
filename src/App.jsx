import Home from './Views/Home'
import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import ErrorPage from './Views/ErrorPage'
import './App.css'
import Layout from './Layout/Layout'

function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/beers/ale');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  data && console.log(data)

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
