import React, { useContext } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Search } from "../Search";
import { ThemeContext } from "../../context";
import styles from "./Header.module.css";

export const Header = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    return (
        <div className={styles.container} style={fg}>
            <div className={styles.left}>
                <Player
                    autoplay
                    loop
                    src={require("./shoppin.json")}
                    speed={100000000}
                    style={{ height: "70px", width: "70px" }}
                ></Player>
                <p style={tx} className={styles.left__text}>
                    E-Commerce
                </p>
            </div>

            <Search></Search>
            <div className={styles.right}>
                <p style={tx}>Welcome guest</p>
                <p className={styles.login} style={tx}>
                    Login
                </p>
                <button
                    className={styles.button__cart}
                    // style={{ backgroundColor: theme.foreground }}
                >
                    <AiOutlineShoppingCart
                        className={styles.icon__cart}
                        style={{ color: theme.text }}
                    ></AiOutlineShoppingCart>
                    <div
                        className={styles.cart__counter}
                        style={{
                            color: theme.text,
                            backgroundColor: theme.background,
                        }}
                    >
                        5
                    </div>
                </button>
            </div>
        </div>
    );
};
