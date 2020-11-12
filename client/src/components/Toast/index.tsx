import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { AppState, IntentType } from "../../typings";
export const Toast = () => {
    const toastState = useSelector((state: AppState) => state.ui.toast);
    const { message, intent } = toastState;
    useEffect(() => {
        if (message) {
            if (message.length > 0) {
                switch (intent) {
                    case IntentType.ERROR:
                        toast.error(message);
                        break;
                    case IntentType.SUCCESS:
                        toast.success(message);
                        break;
                    case IntentType.INFO:
                        toast.info(message);
                        break;
                    default:
                        toast(message);
                }
            }
        }
    }, [message]);
    return null;
};
