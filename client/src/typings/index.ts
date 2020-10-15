import { ProductState } from "./product";
import { UiState } from "./ui";

export * from "./user";
export * from "./product";
export * from "./ui";

// Action types

export type HomeProps = {
    query: string;
};
export type HeaderProps = {
    query: string;
    setQuery: Function;
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
};
