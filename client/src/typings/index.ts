// Action types
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";
export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES";

export type Product = {
    _id: string;
    name: string;
    description: string;
    categories: string[];
    variants: string[];
    sizes: number[];
    img: string;
    imgLarge: string;
    price: number;
};

export type ProductCardProps = {
    product: Product;
};

export type RouteParam = {
    id: string;
};

export type ContextChildrenProps = {
    children: React.ReactNode;
};

export type CountryListProps = {
    countries: any;
    width: number;
};
export type CountryListItemProps = {
    country: any;
    key: string;
    width: number;
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
//Country
export type ReceiveCountriesAction = {
    type: typeof RECEIVE_COUNTRIES;
    payload: {
        countries: any;
    };
};
export type CountriesActions = ReceiveCountriesAction;
export type CountriesState = {
    list: any[];
};
export type Country = any;

export type UiActions = ToggleDialogAction;

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction;

export type ProductState = {
    inCart: any[];
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
    countries: CountriesState;
};
