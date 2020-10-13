import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Search } from "../Search";
import { ThemeContext } from "../../context";
import styles from "./Header.module.css";

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    const { pathname } = location;
    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const regex = RegExp("/product");
    const result = regex.test(pathname);

    return (
        <div className={styles.container} style={fg}>
            <div className={styles.left}>
                <Player
                    autoplay
                    loop
                    src={require("./shoppin.json")}
                    style={{ height: "90px", width: "90px" }}
                ></Player>
                <p style={tx} className={styles.left__text}>
                    E-Commerce
                </p>
            </div>
            {!result && <Search />}
            <div className={styles.right}>
                <p style={tx}>Welcome guest</p>
                <p className={styles.login} style={tx}>
                    Login
                </p>
                <button className={styles.button__cart}>
                    <AiOutlineShoppingCart
                        className={styles.icon__cart}
                        style={tx}
                    ></AiOutlineShoppingCart>
                    <div
                        className={styles.cart__counter}
                        style={{ ...tx, ...bg }}
                    >
                        5
                    </div>
                </button>
            </div>
        </div>
    );
};
