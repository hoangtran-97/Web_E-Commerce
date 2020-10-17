import { Dispatch } from "redux";

import {
    User,
    ProductActions,
    Product,
    RECEIVE_PRODUCTS,
    ADD_PRODUCT,
} from "../../typings";

export function addProduct(product: Product): ProductActions {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
}

export function receiveProducts(products: Product[]): ProductActions {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
    };
}

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
        user.cart.push(product._id);
        return fetch(`http://localhost:3001/api/v1/users/${_id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                dispatch(addProduct(product));
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
