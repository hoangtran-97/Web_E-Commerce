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
    const sum = cart.reduce((a, b) => a + b.price * b.quantity, 0);

    return (
        <div className={styles.container} style={bg}>
            <h2 className={styles.title}>Your shopping cart</h2>
            {cart.length === 0 ? (
                <h3 className={styles.title}>is empty!</h3>
            ) : (
                <>
                    <h3 className={styles.title}>
                        Total cost: {sum.toFixed(2)} €
                    </h3>
                    <div className={styles.container__cart}>
                        {cart.map(item => (
                            <CartItem key={item._id} item={item}></CartItem>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
