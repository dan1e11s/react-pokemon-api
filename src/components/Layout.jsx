import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonAppBar from './Header';

const Layout = () => {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
      <div>
        <footer>Copyright 2022 Pokemons API</footer>
      </div>
    </>
  );
};

export default Layout;
