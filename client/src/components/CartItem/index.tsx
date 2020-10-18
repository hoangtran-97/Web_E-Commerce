import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { removeProduct } from "../../redux/actions";
import { CartItemProps } from "../../typings";
import { ProductCard } from "../ProductCard";
import { ThemeContext } from "../../context";
import styles from "./CartItem.module.css";

export const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    return (
        <div className={styles.container}>
            <ProductCard product={item} key={item._id} noFlag></ProductCard>
            <button
                className={styles.button}
                style={{ ...fg, ...tx }}
                onClick={() => dispatch(removeProduct(item))}
            >
                Remove from cart
            </button>
        </div>
    );
};
