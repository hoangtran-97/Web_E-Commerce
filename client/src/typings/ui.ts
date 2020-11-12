// Enum
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";
export const TOAST_MESSAGE = "TOAST_MESSAGE";

// export enum DialogType {
//     SignIn = "signIn",
//     SignUp = "signUp",
// }

// export type ToggleDialogAction = {
//     type: typeof TOGGLE_DIALOG;
//     payload: {
//         dialog: DialogType;
//     };
// };
export enum IntentType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    INFO = "INFO",
    WARNING = "WARNING",
}

export type ToastMessage = {
    message: string;
    intent?: IntentType;
};

// export type UiActions = ToggleDialogAction;
export type ChangeToastMessage = {
    type: typeof TOAST_MESSAGE;
    payload: {
        toast: ToastMessage;
    };
};
export type UiActions = ChangeToastMessage;
export type UiState = {
    // dialogOpen: {
    //     [key in DialogType]?: boolean;
    // };
    toast: ToastMessage;
};
