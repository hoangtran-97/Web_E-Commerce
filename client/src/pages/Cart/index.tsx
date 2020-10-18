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
            <p className={styles.title}>Your shopping cart</p>
            <div className={styles.container__cart}>
                {cart.length === 0 ? (
                    <p>is empty!</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <CartItem key={item._id} item={item}></CartItem>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
