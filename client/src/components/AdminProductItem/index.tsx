import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";

import { removeProductListDB } from "../../redux/actions";
import { AdminProductItemProps } from "../../typings";
import { ThemeContext } from "../../context";

import styles from "./AdminProductItem.module.css";

export const AdminProductItem = ({ product }: AdminProductItemProps) => {
    const { _id, name, img } = product;
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const tx = { color: theme.text };

    //TODO: Add token to delete API
    const removeProduct = () => {
        _id && dispatch(removeProductListDB(_id, product));
    };
    return (
        <div
            className={styles.container}
            style={{ ...tx, backgroundImage: `url(${img})` }}
        >
            <div>
                <h3>{name}</h3>
                <h5>{_id}</h5>
            </div>
            <GiCancel className={styles.icon} onClick={removeProduct} />
        </div>
    );
};
