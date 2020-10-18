import React, { useContext } from "react";
import { GiCancel } from "react-icons/gi";

import { AdminProductItemProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./AdminProductItem.module.css";
import { icons } from "react-icons/lib";

export const AdminProductItem = ({ product }: AdminProductItemProps) => {
    const { _id, name } = product;
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const fg = { backgroundColor: theme.foreground };
    return (
        <div className={styles.container} style={{ ...fg, ...tx }}>
            <div>
                <h3>{name}</h3>
                <h5>{_id}</h5>
            </div>
            <GiCancel className={styles.icon}></GiCancel>
        </div>
    );
};
