// Action types
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";
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
        products: [];
    };
};
export type ProductActions =
    | AddProductAction
    | RemoveProductAction
    | ReceiveProductsAction;

export type ProductCardProps = {
    product: Product;
};

export type RouteParam = {
    id: string;
};

export type ContextChildrenProps = {
    children: React.ReactNode;
};

export type FilterProps = {
    width: number;
    activeFilter: string | null;
    setActiveFilter: Function;
};
export type FilterItemProps = {
    filterCat: string;
    activeFilter: string | null;
    setActiveFilter: Function;
};
export type SearchProps = {
    placeholder: string;
    query: string;
    setQuery: Function;
    setModal: Function;
};
export type CartModalProps = {
    modal: boolean;
    setModal: Function;
};

export type CartItemProps = {
    cart: any;
};
// Enum
export enum DialogType {
    SignIn = "signIn",
    SignUp = "signUp",
}

// A product
// export type Product = {
//     id: string;
//     name: string;
//     price: number;
// };

export type AddProductAction = {
    type: typeof ADD_PRODUCT;
    payload: {
        product: any;
    };
};

export type RemoveProductAction = {
    type: typeof REMOVE_PRODUCT;
    payload: {
        product: any;
    };
};

export type ToggleDialogAction = {
    type: typeof TOGGLE_DIALOG;
    payload: {
        dialog: DialogType;
    };
};

export type UiActions = ToggleDialogAction;

// Use this union in reducer

export type ProductState = {
    inCart: Product[];
    list: Product[];
};

// Using dynamic keys from an enum
export type UiState = {
    dialogOpen: {
        [key in DialogType]?: boolean;
    };
};

export type AppState = {
    product: ProductState;
    ui: UiState;
};
