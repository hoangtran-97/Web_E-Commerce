export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export type Product = {
    _id: string;
    name: string;
    description: string;
    categories: string[];
    variants: string[];
    sizes: number[];
    img: string;
    price: number;
};

export type ReceiveProductsAction = {
    type: typeof RECEIVE_PRODUCTS;
    payload: {
        products: Product[];
    };
};
export type AddProductAction = {
    type: typeof ADD_PRODUCT;
    payload: {
        product: Product;
    };
};

export type RemoveProductAction = {
    type: typeof REMOVE_PRODUCT;
    payload: {
        product: Product;
    };
};

export type ProductActions =
    | AddProductAction
    | RemoveProductAction
    | ReceiveProductsAction;

export type ProductCardProps = {
    product: Product;
    noFlag?: boolean;
};
export type ProductState = {
    inCart: Product[];
    list: Product[];
};
