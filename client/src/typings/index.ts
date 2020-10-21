import { ProductState, Product } from "./product";
import { UiState } from "./ui";
import { User, UserState } from "./user";

export * from "./user";
export * from "./product";
export * from "./ui";

// Action types

export type AdminAddProductProps = { token: string };

export type AdminProductItemProps = {
    product: Product;
};

export type AdminUserItemProps = {
    user: User;
};

export type HomeProps = {
    query: string;
};
export type HeaderProps = {
    query: string;
    setQuery: Function;
};
export type CartItemProps = {
    item: Product;
};
export type ContextChildrenProps = {
    children: React.ReactNode;
};

export type RouteParam = {
    id: string;
};

export type AppState = {
    product: ProductState;
    ui: UiState;
    user: UserState;
};
