import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MediaCard from './PokemonsList';
import PokemonsContextProvider from './PokemonsContext';
import Details from './Details';

const MainRoutes = () => {
  return (
    <PokemonsContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MediaCard />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </PokemonsContextProvider>
  );
};

export default MainRoutes;
