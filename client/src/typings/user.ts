export const ADD_USER = "ADD_USER";
export const ADD_TOKEN = "ADD_TOKEN";

export type User = {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    isBanned: boolean;
    password: string;
    googleId: string;
    cart: string[];
};

export type AddUserAction = {
    type: typeof ADD_USER;
    payload: {
        user: User;
    };
};
export type AddTokenAction = {
    type: typeof ADD_TOKEN;
    payload: {
        token: string;
    };
};
export type UserState = {
    currentUser: User;
    token: string;
};

export type UserActions = AddUserAction | AddTokenAction;
