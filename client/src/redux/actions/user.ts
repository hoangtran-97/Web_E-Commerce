import { ADD_USER, UserActions, User } from "../../typings";

export function addUser(user: User): UserActions {
    return {
        type: ADD_USER,
        payload: {
            user,
        },
    };
}
