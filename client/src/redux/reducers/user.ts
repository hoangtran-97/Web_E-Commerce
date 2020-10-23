import {
    UserState,
    UserActions,
    ADD_USER,
    ADD_TOKEN,
    REMOVE_USER,
    RECEIVE_USERS,
    User,
} from "../../typings";

export default function products(
    state: UserState = {
        list: [],
        currentUser: {} as User,
        token: "",
    },
    action: UserActions
): UserState {
    switch (action.type) {
        case RECEIVE_USERS:
            const { users } = action.payload;
            return {
                ...state,
                list: [...users],
            };
        case ADD_USER: {
            const { user } = action.payload;
            return { ...state, currentUser: user };
        }
        case REMOVE_USER: {
            return { ...state, currentUser: {} as User, token: "" };
        }
        case ADD_TOKEN: {
            const { token } = action.payload;
            return { ...state, token: token };
        }
        default:
            return state;
    }
}
