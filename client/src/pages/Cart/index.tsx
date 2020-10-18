import React, { useContext } from "react";

import { ThemeContext } from "../../context";
import styles from "./Cart.module.css";

export const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    return (
        <div className={styles.container} style={bg}>
            Cart
        </div>
    );
};
