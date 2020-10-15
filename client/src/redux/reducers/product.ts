import {
    ProductState,
    ProductActions,
    RECEIVE_PRODUCTS,
    ADD_PRODUCT,
} from "../../typings";

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
        case ADD_PRODUCT: {
            const { product } = action.payload;
            if (state.inCart.find(p => p.name === product.name)) {
                return state;
            }
            // Always return new state (e.g, new object) if changed
            return { ...state, inCart: [...state.inCart, product] };
        }
        default:
            return state;
    }
}
