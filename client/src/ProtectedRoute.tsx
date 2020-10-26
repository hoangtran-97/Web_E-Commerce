import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { AppState } from "./typings";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    return (
        <Route
            {...rest}
            render={props => {
                if (currentUser && token) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};
