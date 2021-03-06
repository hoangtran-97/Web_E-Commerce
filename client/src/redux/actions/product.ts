import { Dispatch } from "redux";

import { addUser } from "./user";
import {
    User,
    ProductActions,
    Product,
    RECEIVE_PRODUCTS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_LIST,
    ADD_PRODUCT,
    ADD_PRODUCT_LIST,
    ProductInCart,
} from "../../typings";
import { BASE } from "../../api";

//Add product to LOCAL cart
export const addProduct = (product: ProductInCart): ProductActions => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
};
//Remove product from LOCAL cart
export function removeProduct(product: Product): ProductActions {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            product,
        },
    };
}
//Send all fetched products list items to LOCAL list
export const receiveProducts = (products: Product[]): ProductActions => {
    return {
        type: RECEIVE_PRODUCTS,
        payload: {
            products,
        },
    };
};
//Add to product list
export const addProductList = (product: Product): ProductActions => {
    return {
        type: ADD_PRODUCT_LIST,
        payload: {
            product,
        },
    };
};
//Remove from product list
export const removeProductList = (product: Product): ProductActions => {
    return {
        type: REMOVE_PRODUCT_LIST,
        payload: {
            product,
        },
    };
};

//TODO: Fix API link after upload
//TODO: FIX addProductListDB using token both front and back-end
//Fetch list items
export const fetchProducts = () => {
    return (dispatch: Dispatch) => {
        return fetch(`${BASE}/api/v1/products`).then(res =>
            res.json().then(products => {
                dispatch(receiveProducts(products));
            })
        );
    };
};
//Add product to REMOTE cart
export const addProductDB = (
    user: User,
    product: ProductInCart,
    _id: string,
    token: string
) => {
    return (dispatch: Dispatch) => {
        let updatedUser = {};
        const productExist = user.cart.find(p => p.product === product._id);
        if (productExist) {
            updatedUser = { ...user };
        } else {
            const result = Array.from(
                new Set(
                    [
                        { quantity: product.quantity, product: product._id },
                    ].concat(user.cart)
                )
            );
            updatedUser = { ...user, cart: [...result] };
        }

        return fetch(`${BASE}/api/v1/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token,
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(addProduct(product));
                if (data._id) {
                    dispatch(addUser(data));
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
//Add product to REMOTE list
export const addProductListDB = (product: Product) => {
    console.log("in action", JSON.stringify(product));
    return (dispatch: Dispatch) => {
        return fetch(`${BASE}/api/v1/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                dispatch(addProductList(data));
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
//Remove product from REMOVE cart
export const removeProductDB = (
    user: User,
    product: Product,
    _id: string,
    token: string
) => {
    return (dispatch: Dispatch) => {
        const index = user.cart.findIndex(p => p.product === product._id);
        if (index >= 0) {
            user.cart.splice(index, 1);
        }
        const updateUser = { ...user };
        console.log("redux/action", updateUser);

        return fetch(`${BASE}/api/v1/users/${_id}`, {
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
//Remoe product from remote list
export const removeProductListDB = (_id: string, product: Product) => {
    return (dispatch: Dispatch) => {
        return fetch(`${BASE}/api/v1/products/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => {
                console.log("response data", res);
                res.status === 204 && dispatch(removeProductList(product));
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
};
