import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Cart.module.css";

export const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);
    const bg = { backgroundColor: theme.background };

    return (
        <div className={styles.container} style={bg}>
            Cart
        </div>
    );
};
