import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const Routes = () => (
    <>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </>
);

export default Routes;
