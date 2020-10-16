import { use } from "chai";
import {
    UserState,
    UserActions,
    ADD_USER,
    ADD_TOKEN,
    User,
} from "../../typings";

export default function products(
    state: UserState = {
        currentUser: {} as User,
        token: "",
    },
    action: UserActions
): UserState {
    switch (action.type) {
        case ADD_USER: {
            const { user } = action.payload;
            console.log("userPAYLOAD", user);

            return { ...state, currentUser: user };
        }
        case ADD_TOKEN: {
            const { token } = action.payload;
            return { ...state, token: token };
        }
        default:
            return state;
    }
}
