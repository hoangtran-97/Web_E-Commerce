// Enum
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";

export enum DialogType {
    SignIn = "signIn",
    SignUp = "signUp",
}

export type ToggleDialogAction = {
    type: typeof TOGGLE_DIALOG;
    payload: {
        dialog: DialogType;
    };
};

export type UiActions = ToggleDialogAction;

export type UiState = {
    dialogOpen: {
        [key in DialogType]?: boolean;
    };
};
