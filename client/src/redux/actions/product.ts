import { Dispatch } from "redux";

import {
    User,
    ProductActions,
    Product,
    RECEIVE_PRODUCTS,
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    ADD_PRODUCT_LIST,
} from "../../typings";

export const addProduct = (product: Product): ProductActions => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
};

export function removeProduct(product: Product): ProductActions {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            product,
        },
    };
}

export const receiveProducts = (products: Product[]): ProductActions => {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
    };
};

export const addProductList = (product: Product): ProductActions => {
    return {
        type: ADD_PRODUCT_LIST,
        payload: {
            product,
        },
    };
};

//TODO: Fix API link after upload
//TODO: FIX addProductListDB using token both front and back-end
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
        return fetch(`http://localhost:3001/api/v1/users/${_id}`, {
            method: "PUT",
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

export const addProductListDB = (product: Product) => {
    console.log("in action", JSON.stringify(product));
    return (dispatch: Dispatch) => {
        return fetch("http://localhost:3001/api/v1/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log("response data", data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};

export const removeProductDB = (
    user: User,
    product: Product,
    _id: string,
    token: string
) => {
    return (dispatch: Dispatch) => {
        const index = user.cart.findIndex(p => p === product._id);
        if (index >= 0) {
            user.cart.splice(index, 1);
        }
        const updateUser = { ...user };
        console.log(updateUser);

        return fetch(`http://localhost:3001/api/v1/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(removeProduct(product));
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
