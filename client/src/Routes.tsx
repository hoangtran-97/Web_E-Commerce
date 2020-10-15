import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductPage } from "./pages/Product";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const Routes = () => {
    const [query, setQuery] = useState("");
    return (
        <>
            <Header query={query} setQuery={setQuery}></Header>
            <Switch>
                <Route exact path="/">
                    <Home query={query} />
                </Route>
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </>
    );
};

export default Routes;
