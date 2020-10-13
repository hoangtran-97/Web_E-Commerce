import React, { useContext } from "react";

import { ThemeContext } from "../../context";
import styles from "./Product.module.css";

export const Product = () => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };

    return (
        <div className={styles.container} style={bg}>
            Product Page
        </div>
    );
};
