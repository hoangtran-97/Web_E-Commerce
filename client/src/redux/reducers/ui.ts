import { UiState, UiActions, ToastMessage, TOAST_MESSAGE } from "../../typings";

const defaultState: UiState = {
    // dialogOpen: {},
    toast: {} as ToastMessage,
};

export default function ui(
    state: UiState = defaultState,
    action: UiActions
): UiState {
    switch (action.type) {
        // case TOGGLE_DIALOG: {
        //     return {
        //         ...state,
        //         dialogOpen: {
        //             ...state.dialogOpen,
        //             [action.payload.dialog]: !state.dialogOpen[
        //                 action.payload.dialog
        //             ],
        //         },
        //     };
        // }
        case TOAST_MESSAGE: {
            const { toast } = action.payload;
            return { ...state, toast };
        }

        default:
            return state;
    }
}
