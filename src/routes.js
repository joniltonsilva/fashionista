import React from "react";
import { Switch, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Topbar from './components/Topbar';
import Search from './components/Search';
import Cart from './components/Cart';

const Routes = () => {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Catalog} />
        <Route path="/product/:slug" component={Product} />
      </Switch>

      <Search />
      <Cart />
    </>
  );
};

export default Routes;
