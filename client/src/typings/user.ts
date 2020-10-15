export const ADD_USER = "ADD_USER";

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

export type UserActions = AddUserAction;
