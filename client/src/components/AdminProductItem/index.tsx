import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";

import { AdminProductItemProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./AdminProductItem.module.css";

export const AdminProductItem = ({ product }: AdminProductItemProps) => {
    const { _id, name, img } = product;
    const { theme } = useContext(ThemeContext);
    const tx = { color: theme.text };
    const fg = { backgroundColor: theme.foreground };
    return (
        <div
            className={styles.container}
            style={{ ...tx, backgroundImage: `url(${img})` }}
        >
            <div>
                <h3>{name}</h3>
                <h5>{_id}</h5>
            </div>
            <GiCancel className={styles.icon}></GiCancel>
        </div>
    );
};
