import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { AppState, IntentType } from "../../typings";
export const Toast = () => {
    const toastState = useSelector((state: AppState) => state.ui.toast);
    const { message, intent } = toastState;
    useEffect(() => {
        console.log(toastState);
        if (message) {
            if (message.length > 0) {
                console.log("toasted");
                switch (intent) {
                    case IntentType.ERROR:
                        toast.error(message);
                    case IntentType.SUCCESS:
                        toast.success(message);
                    case IntentType.INFO:
                        toast.info(message);
                    default:
                        toast(message);
                }
            }
        }
    }, [message]);
    return null;
};
