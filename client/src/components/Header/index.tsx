import React, { useContext } from "react";

import { Search } from "../Search";
import { ThemeContext } from "../../context";
import styles from "./Header.module.css";

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    return (
        <div className={styles.container} style={fg}>
            <p style={tx}>E-Commerce</p>
            <Search></Search>
            <div className={styles.right}>
                <p className={styles.login} style={tx}>
                    Login
                </p>
                <p className={styles.cart} style={tx}>
                    Cart
                </p>
            </div>
        </div>
    );
};
