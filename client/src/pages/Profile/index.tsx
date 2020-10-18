import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Profile.module.css";

export const Profile = () => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    const user = useSelector((state: AppState) => state.user.currentUser);
    const { userName, isAdmin } = user;
    return (
        <div className={styles.container} style={bg}>
            <p>
                {userName} {isAdmin && <span>- ADMIN</span>}
            </p>
        </div>
    );
};
