import {
    ProductState,
    ProductActions,
    RECEIVE_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
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
            };
        case ADD_PRODUCT: {
            const { product } = action.payload;
            if (state.inCart.find(p => p.name === product.name)) {
                return state;
            }
            return { ...state, inCart: [...state.inCart, product] };
        }
        case REMOVE_PRODUCT: {
            const { product } = action.payload;
            const index = state.inCart.findIndex(p => p.name === product.name);
            if (index >= 0) {
                state.inCart.splice(index, 1);
                return { ...state, inCart: [...state.inCart] };
            }
            return state;
        }
        default:
            return state;
    }
}
