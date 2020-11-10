import {
    ProductState,
    ProductActions,
    RECEIVE_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    ADD_PRODUCT_LIST,
    REMOVE_PRODUCT_LIST,
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
            const productExist = state.inCart.find(
                p => p.name === product.name
            );
            if (productExist) {
                return state;
            }
            return {
                ...state,
                inCart: [...state.inCart, { ...product, quantity: 1 }],
            };
        }
        case ADD_PRODUCT_LIST: {
            const { product } = action.payload;
            const productExist = state.inCart.find(
                p => p.name === product.name
            );
            if (productExist) {
                return state;
            }
            return { ...state, list: [...state.list, product] };
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
        case REMOVE_PRODUCT_LIST: {
            const { product } = action.payload;
            const index = state.list.findIndex(p => p.name === product.name);
            if (index >= 0) {
                state.list.splice(index, 1);
                return { ...state, list: [...state.list] };
            }
            return state;
        }
        default:
            return state;
    }
}
