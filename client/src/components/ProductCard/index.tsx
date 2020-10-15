import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppState } from "../../typings";
import { ProductCardProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }: ProductCardProps) => {
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);
    const bg = { backgroundColor: theme.background };
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    const { name, price, img, _id } = product;
    const isInCart = cart.find(p => p.name === name);
    console.log("isINCart", isInCart);

    return (
        <Link className={styles.container} style={fg} to={`/product/${_id}`}>
            <div className={styles.img__container}>
                <img alt="product_image" className={styles.img} src={img}></img>
            </div>
            <p className={styles.name} style={tx}>
                {name}
            </p>
            <p className={styles.price} style={tx}>{`${price} EUR`}</p>
            {isInCart && <div className={styles.indicator} style={fg}></div>}
        </Link>
    );
};
