import { UserState, UserActions, ADD_USER } from "../../typings";

export default function products(
    state: UserState = {
        currentUser: {},
    },
    action: UserActions
): UserState {
    switch (action.type) {
        case ADD_USER: {
            const { user } = action.payload;
            return { ...state, currentUser: { ...state.currentUser, user } };
        }
        default:
            return state;
    }
}
