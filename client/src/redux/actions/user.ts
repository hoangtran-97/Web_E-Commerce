import { Dispatch } from "redux";

import { ADD_USER, UserActions, User, ADD_TOKEN, Product } from "../../typings";
import { addProduct } from "../actions";

export const addUser = (user: User): UserActions => {
    return {
        type: ADD_USER,
        payload: {
            user,
        },
    };
};

export const addToken = (token: string): UserActions => {
    return {
        type: ADD_TOKEN,
        payload: {
            token,
        },
    };
};

export const updateUser = (
    user: User,
    token: string,
    cart: Product[],
    list: Product[]
) => {
    const { _id } = user;
    //Extracted IDs
    const cartResult = cart.map(a => a._id);
    //Unique Set
    const result = Array.from(new Set(cartResult.concat(user.cart)));
    const updateUser = { ...user, cart: [...result] };
    return (dispatch: Dispatch) => {
        fetch(`http://localhost:3001/api/v1/users/${_id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                dispatch(addUser(data));
                data.cart.forEach((item: string) => {
                    const result = list.find(p => p._id === item);
                    result && dispatch(addProduct(result));
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
