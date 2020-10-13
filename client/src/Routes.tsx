import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";

const Routes = () => (
    <>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </>
);

export default Routes;
