import { TOGGLE_DIALOG, ToggleDialogAction, DialogType } from "../../typings";

export function toggleDialog(dialog: DialogType): ToggleDialogAction {
    return {
        type: TOGGLE_DIALOG,
        payload: {
            dialog,
        },
    };
}
