import { Dispatch } from "redux";

import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ProductActions,
    Product,
    RECEIVE_PRODUCTS,
} from "../../typings";

export function addProduct(product: Product): ProductActions {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
}

export function removeProduct(product: Product): ProductActions {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            product,
        },
    };
}
export function receiveProducts(products: Product): ProductActions {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
    };
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
    return (dispatch: Dispatch) => {
        return fetch(`products/${productId}`)
            .then(resp => resp.json())
            .then(product => {
                dispatch(addProduct(product));
            });
    };
}
//TODO: Fix API link after upload
export function fetchProducts() {
    return (dispatch: Dispatch) => {
        return fetch("http://localhost:3001/api/v1/products").then(res =>
            res.json().then(products => {
                dispatch(receiveProducts(products));
            })
        );
    };
}
