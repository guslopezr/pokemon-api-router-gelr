import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./view/Home";
import Pokesearch from "./view/Pokesearch";
import CardPokemones from "./view/CardPokemon";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokesearch />} />
            <Route path="/pokemones/:name" element={<CardPokemones />} />
            
          </Routes>
        </BrowserRouter>     

  )
}

export default App;
