import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import { CartItem } from "../../components/CartItem";
import styles from "./Cart.module.css";

export const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);
    const bg = { backgroundColor: theme.background };

    return (
        <div className={styles.container} style={bg}>
            <h2 className={styles.title}>Your shopping cart</h2>
            {cart.length === 0 ? (
                <h3 className={styles.title}>is empty!</h3>
            ) : (
                <div className={styles.container__cart}>
                    {cart.map(item => (
                        <CartItem key={item._id} item={item}></CartItem>
                    ))}
                </div>
            )}
        </div>
    );
};
