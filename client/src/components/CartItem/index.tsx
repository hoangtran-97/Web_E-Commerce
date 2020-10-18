import React, { useContext } from "react";

import { CartItemProps } from "../../typings";
import { ProductCard } from "../ProductCard";
import { ThemeContext } from "../../context";
import styles from "./CartItem.module.css";

export const CartItem = ({ item }: CartItemProps) => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    return (
        <div className={styles.container}>
            <ProductCard product={item} key={item._id} noFlag></ProductCard>
            <button className={styles.button} style={{ ...fg, ...tx }}>
                Remove from cart
            </button>
        </div>
    );
};
