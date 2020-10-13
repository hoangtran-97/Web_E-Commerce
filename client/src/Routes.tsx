import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";

const Routes = () => (
    <>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
        </Switch>
    </>
);

export default Routes;
