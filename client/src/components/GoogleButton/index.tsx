import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const responseGoogle = async (response: any) => {
    console.log(response);
    console.log(response.tokenId);
    axios.get("http://localhost:3001/api/v1/auth/").then(response => {
        console.log(response);
    });

    const res = await axios.post(
        "http://localhost:3001/api/v1/auth/googleTokenId",
        {
            tokenId: response.tokenId,
        }
    );
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
