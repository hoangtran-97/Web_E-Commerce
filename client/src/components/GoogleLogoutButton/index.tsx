import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeUser, addToast } from "../../redux/actions";
import { AppState, IntentType } from "../../typings";

export const GoogleLogoutButton = () => {
    const { currentUser } = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = async () => {
        history.push("/");
        dispatch(removeUser(currentUser));
        dispatch(
            addToast({
                message: "Logged out",
                intent: IntentType.INFO,
            })
        );
    };
    return (
        <GoogleLogout
            clientId="676751270206-bih2psso6vca65bg6ecicj7i4o42h940.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
        ></GoogleLogout>
    );
};
