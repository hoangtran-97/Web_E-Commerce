import { TOAST_MESSAGE, UiActions, ToastMessage } from "../../typings";

// export function toggleDialog(dialog: DialogType): ToggleDialogAction {
//     return {
//         type: TOGGLE_DIALOG,
//         payload: {
//             dialog,
//         },
//     };
// }

export const addToast = (toast: ToastMessage): UiActions => {
    return {
        type: TOAST_MESSAGE,
        payload: {
            toast,
        },
    };
};
