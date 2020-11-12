import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { AppState } from "../../typings";
export const Toast = () => {
    const toastState = useSelector((state: AppState) => state.ui.toast);
    const { message, intent } = toastState;
    useEffect(() => {
        if (message) {
            if (message.length > 0) {
                console.log("toasted");
                toast(message);
            }
        }
    }, [message]);
    return null;
};
