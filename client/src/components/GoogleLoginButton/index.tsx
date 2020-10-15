import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addUser, addToken } from "../../redux/actions";

export const GoogleLoginButton = () => {
    const dispatch = useDispatch();
    const responseGoogle = async (response: any) => {
        const res = await axios.post(
            "http://localhost:3001/api/v1/auth/googleTokenId",
            {
                id_token: response.tokenId,
            }
        );
        dispatch(addUser(res.data.user));
        dispatch(addToken(res.data.token));
        console.log("_______RES_______", res.data);
    };
    return (
        <GoogleLogin
            clientId="676751270206-bih2psso6vca65bg6ecicj7i4o42h940.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
};
