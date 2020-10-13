import React, { useContext } from "react";

import { ThemeContext } from "../../context";
import styles from "./ProductCard.module.css";

export const ProductCard = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    return (
        <button className={styles.container} style={fg}>
            <div className={styles.img__container}>
                <img
                    className={styles.img}
                    src="https://source.unsplash.com/400x400/?fashion"
                ></img>
            </div>
            <p>Title</p>
            <p>Price</p>
        </button>
    );
};
