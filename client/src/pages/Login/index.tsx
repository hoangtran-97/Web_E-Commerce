import React, { useContext } from "react";
import { GoogleLoginButton } from "../../components/GoogleLoginButton";

import { ThemeContext } from "../../context";
import styles from "./Login.module.css";

export const Login = () => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    return (
        <div className={styles.container} style={bg}>
            <GoogleLoginButton></GoogleLoginButton>
            <p>Normal registration comming soon</p>
        </div>
    );
};
