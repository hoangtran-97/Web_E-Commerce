import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeProduct, removeProductDB, addToast } from "../../redux/actions";
import { CartItemProps, AppState, IntentType } from "../../typings";
import { ProductCard } from "../ProductCard";
import { ThemeContext } from "../../context";
import styles from "./CartItem.module.css";

export const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    const { _id } = currentUser;
    const onClick = () => {
        if (_id) {
            dispatch(removeProductDB(currentUser, item, _id, token));
        } else {
            dispatch(removeProduct(item));
        }
        dispatch(
            addToast({
                message: "Item removed from cart",
                intent: IntentType.SUCCESS,
            })
        );
    };
    return (
        <div className={styles.container}>
            <ProductCard product={item} key={item._id} />
            <button
                className={styles.button}
                style={{ ...fg, ...tx }}
                onClick={onClick}
            >
                Remove from cart
            </button>
        </div>
    );
};
