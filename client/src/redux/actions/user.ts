import { ADD_USER, UserActions, User, ADD_TOKEN } from "../../typings";

export function addUser(user: User): UserActions {
    return {
        type: ADD_USER,
        payload: {
            user,
        },
    };
}

export function addToken(token: string): UserActions {
    return {
        type: ADD_TOKEN,
        payload: {
            token,
        },
    };
}
