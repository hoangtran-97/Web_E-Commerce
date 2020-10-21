import React, { useContext } from "react";

import { ThemeContext } from "../../context";
import { AdminUserItemProps } from "../../typings";
import styles from "./AdminUserItem.module.css";

export const AdminUserItem = ({ user }: AdminUserItemProps) => {
    const { theme } = useContext(ThemeContext);
    const tx = { color: theme.text };
    const fg = { backgroundColor: theme.foreground };
    const { _id, userName, email, isAdmin, isBanned } = user;
    return (
        <div className={styles.container} style={{ ...fg, ...tx }}>
            <p>User Name: {userName}</p>
            <p>Id: {_id}</p>
            <p>Email: {email}</p>
            {isAdmin && <p>Is an Admin</p>}
            <p>{isBanned}</p>
        </div>
    );
};
