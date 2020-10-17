import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { AppState, RouteParam, Product } from "../../typings";
import { addToken, addUser, updateUser } from "../../redux/actions";

export const GoogleLoginButton = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: AppState) => state.product.inCart);
    const responseGoogle = async (response: any) => {
        const res = await axios.post(
            "http://localhost:3001/api/v1/auth/googleTokenId",
            {
                id_token: response.tokenId,
            }
        );
        dispatch(updateUser(res.data.user, res.data.token, cart));
        dispatch(addToken(res.data.token));
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
