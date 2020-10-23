export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const ADD_TOKEN = "ADD_TOKEN";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const AUTHORIZE_USERS = "AUTHORIZE_USERS";

export type User = {
    _id: string;
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

export type ReceiveUsersAction = {
    type: typeof RECEIVE_USERS;
    payload: {
        users: User[];
    };
};

export type AddUserAction = {
    type: typeof ADD_USER;
    payload: {
        user: User;
    };
};

export type RemoveUserAction = {
    type: typeof REMOVE_USER;
    payload: {
        user: User;
    };
};

export type AuthorizeUserAction = {
    type: typeof AUTHORIZE_USERS;
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
    list: User[];
    currentUser: User;
    token: string;
};

export type UserActions =
    | AddUserAction
    | AddTokenAction
    | RemoveUserAction
    | AuthorizeUserAction
    | ReceiveUsersAction;
