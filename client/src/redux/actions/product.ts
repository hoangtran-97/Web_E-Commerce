import { Dispatch } from "redux";

import { ProductActions, Product, RECEIVE_PRODUCTS } from "../../typings";

export function receiveProducts(products: Product[]): ProductActions {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
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
