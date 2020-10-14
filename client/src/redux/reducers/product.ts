import { ProductState, ProductActions, RECEIVE_PRODUCTS } from "../../typings";

export default function products(
    state: ProductState = {
        list: [],
        inCart: [],
    },
    action: ProductActions
): ProductState {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            const { products } = action.payload;
            return {
                ...state,
                list: [...products],
                // list: [...state.list, countries],
            };
        default:
            return state;
    }
}
