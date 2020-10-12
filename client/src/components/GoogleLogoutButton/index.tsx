import React from "react";
import { GoogleLogout } from "react-google-login";

const logout = () => {
    console.log("outed");
};

export const GoogleLogoutButton = () => (
    <GoogleLogout
        clientId="676751270206-bih2psso6vca65bg6ecicj7i4o42h940.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
    ></GoogleLogout>
);
