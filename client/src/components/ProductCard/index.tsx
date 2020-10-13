import React, { useContext } from "react";

import { ProductCardProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }: ProductCardProps) => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const { name, price, img } = product;
    return (
        <button className={styles.container} style={fg}>
            <div className={styles.img__container}>
                <img alt="product_image" className={styles.img} src={img}></img>
            </div>
            <p>{name}</p>
            <p>{`${price} EUR`}</p>
        </button>
    );
};
