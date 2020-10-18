import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Cart.module.css";
import { CartItem } from "../../components/CartItem";

export const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);
    const bg = { backgroundColor: theme.background };

    return (
        <div className={styles.container} style={bg}>
            {cart.length === 0 ? (
                <p>No Product In Cart.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <CartItem key={item._id} item={item}></CartItem>
                    ))}
                </>
            )}
        </div>
    );
};
