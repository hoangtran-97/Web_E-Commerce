import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }: ProductCardProps) => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    const { name, price, img, _id } = product;
    return (
        <Link className={styles.container} style={fg} to={`/product/${_id}`}>
            <div className={styles.img__container}>
                <img alt="product_image" className={styles.img} src={img}></img>
            </div>
            <p className={styles.name} style={tx}>
                {name}
            </p>
            <p className={styles.price} style={tx}>{`${price} EUR`}</p>
        </Link>
    );
};
