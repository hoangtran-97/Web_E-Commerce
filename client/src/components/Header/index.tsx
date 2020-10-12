import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.container}>
            <p>E-Commerce</p>
            <p>Search</p>
            <div>
                <p>Login</p>
                <p>Cart</p>
            </div>
        </div>
    );
};
