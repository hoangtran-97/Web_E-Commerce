import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authorizeUserDB } from "../../redux/actions";
import { ThemeContext } from "../../context";
import { AdminUserItemProps, AppState } from "../../typings";
import styles from "./AdminUserItem.module.css";

export const AdminUserItem = ({ user }: AdminUserItemProps) => {
    const { token } = useSelector((state: AppState) => state.user);
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const tx = { color: theme.text };
    const fg = { backgroundColor: theme.foreground };
    const { _id, userName, email, isAdmin, isBanned } = user;
    return (
        <div className={styles.container} style={{ ...fg, ...tx }}>
            <div>
                <p>
                    User Name: {userName} {isAdmin && <span> - Admin</span>}
                </p>
                <p>Id: {_id}</p>
                <p>Email: {email}</p>
            </div>
            {!isAdmin && (
                <>
                    {!isBanned ? (
                        <button
                            onClick={() => {
                                dispatch(
                                    authorizeUserDB(user, true, _id, token)
                                );
                            }}
                        >
                            Ban
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(
                                    authorizeUserDB(user, false, _id, token)
                                );
                            }}
                        >
                            Unban
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
