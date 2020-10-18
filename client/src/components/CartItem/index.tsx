import React, { useContext } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { removeProduct } from "../../redux/actions";
import { CartItemProps, AppState, Product } from "../../typings";
import { ProductCard } from "../ProductCard";
import { ThemeContext } from "../../context";
import styles from "./CartItem.module.css";

const handleRemove = (dispatch: Dispatch, item: Product) => {
    dispatch(removeProduct(item));
};

export const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    return (
        <div className={styles.container}>
            <ProductCard product={item} key={item._id} noFlag></ProductCard>
            <button
                className={styles.button}
                style={{ ...fg, ...tx }}
                onClick={() => handleRemove(dispatch, item)}
            >
                Remove from cart
            </button>
        </div>
    );
};
