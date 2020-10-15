import { UserState, UserActions, ADD_USER, ADD_TOKEN } from "../../typings";

export default function products(
    state: UserState = {
        currentUser: {},
        token: "",
    },
    action: UserActions
): UserState {
    switch (action.type) {
        case ADD_USER: {
            const { user } = action.payload;
            return { ...state, currentUser: { ...state.currentUser, user } };
        }
        case ADD_TOKEN: {
            const { token } = action.payload;
            return { ...state, token: token };
        }
        default:
            return state;
    }
}
