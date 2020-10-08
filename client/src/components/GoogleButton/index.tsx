import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response: any) => {
    console.log(response);
};

export const GoogleButton = () => (
    <GoogleLogin
        clientId="676751270206-bih2psso6vca65bg6ecicj7i4o42h940.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
    />
);
