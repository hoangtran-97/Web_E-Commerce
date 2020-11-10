import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AppState } from "../../typings";
import { addToken, updateUser } from "../../redux/actions";

export const GoogleLoginButton = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: AppState) => state.product.inCart);
    const list = useSelector((state: AppState) => state.product.list);
    const history = useHistory();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const responseGoogle = async (response: any) => {
        console.log("test", response);
        const res = await axios.post(
            "http://localhost:3001/api/v1/auth/googleTokenId",
            {
                id_token: response.tokenId,
            }
        );
        if (res.status === 200) {
            dispatch(updateUser(res.data.user, res.data.token, cart, list));
            dispatch(addToken(res.data.token));
            history.push("/");
        }
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
