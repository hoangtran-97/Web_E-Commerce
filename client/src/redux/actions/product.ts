import { Dispatch } from "redux";

import {
    User,
    ProductActions,
    Product,
    RECEIVE_PRODUCTS,
    ADD_PRODUCT,
} from "../../typings";

export const addProduct = (product: Product): ProductActions => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
};

export const receiveProducts = (products: Product[]): ProductActions => {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
    };
};

//TODO: Fix API link after upload
export const fetchProducts = () => {
    return (dispatch: Dispatch) => {
        return fetch("http://localhost:3001/api/v1/products").then(res =>
            res.json().then(products => {
                dispatch(receiveProducts(products));
            })
        );
    };
};
export const addProductDB = (
    user: User,
    product: Product,
    _id: string,
    token: string
) => {
    return (dispatch: Dispatch) => {
        const result = Array.from(new Set([product._id].concat(user.cart)));
        const updateUser = { ...user, cart: [...result] };
        console.log(user.cart);
        console.log(product._id);
        console.log(result);
        console.log(updateUser);

        return fetch(`http://localhost:3001/api/v1/users/${_id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(addProduct(product));
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
