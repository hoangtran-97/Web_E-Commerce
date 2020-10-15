import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
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
    const cart = useSelector((state: AppState) => state.product.inCart);
    return (
        <div className={styles.container} style={fg}>
            <Link className={styles.left} to="/">
                <Player
                    autoplay
                    loop
                    src={require("./shoppin.json")}
                    style={{ height: "90px", width: "90px" }}
                ></Player>
                <p style={tx} className={styles.left__text}>
                    E-Commerce
                </p>
            </Link>
            {!result && <Search />}
            <div className={styles.right}>
                <p style={tx}>Welcome guest</p>
                <Link className={styles.login} style={tx} to="/login">
                    Login
                </Link>
                <button className={styles.button__cart}>
                    <AiOutlineShoppingCart
                        className={styles.icon__cart}
                        style={tx}
                    ></AiOutlineShoppingCart>
                    <div
                        className={styles.cart__counter}
                        style={{ ...tx, ...bg }}
                    >
                        {cart.length}
                    </div>
                </button>
            </div>
        </div>
    );
};
