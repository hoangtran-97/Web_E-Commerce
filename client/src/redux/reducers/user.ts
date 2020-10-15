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
            if (state.currentUser) {
                return state;
            }
            // Always return new state (e.g, new object) if changed
            return { ...state, currentUser: user };
        }
        default:
            return state;
    }
}
