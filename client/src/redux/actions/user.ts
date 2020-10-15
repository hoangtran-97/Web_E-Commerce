import { Dispatch } from "redux";

import { ADD_PRODUCT, REMOVE_PRODUCT, ProductActions } from "../../typings";

export function addProduct(product: any): ProductActions {
    return {
        type: ADD_PRODUCT,
        payload: {
            product,
        },
    };
}
