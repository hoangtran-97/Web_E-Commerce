import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePalette } from "react-palette";

import { ProductCardProps, AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, noFlag }: ProductCardProps) => {
    const { theme } = useContext(ThemeContext);
    const cart = useSelector((state: AppState) => state.product.inCart);

    const { name, price, img, _id } = product;
    const isInCart = cart.find(p => p.name === name);
    const { data, loading } = usePalette(img);
    const fg = { backgroundColor: data.vibrant };
    const tx = { color: theme.text };

    return (
        <>
            {!loading ? (
                <Link
                    className={styles.container}
                    style={fg}
                    to={`/product/${_id}`}
                >
                    <div className={styles.img__container}>
                        <img
                            alt="product_image"
                            className={styles.img}
                            src={img}
                            draggable="false"
                        ></img>
                    </div>
                    <p className={styles.name} style={tx}>
                        {name}
                    </p>
                    <p className={styles.price} style={tx}>{`${price} EUR`}</p>
                    {isInCart && !noFlag && (
                        <div className={styles.indicator} style={fg}>
                            {isInCart.quantity}
                        </div>
                    )}
                </Link>
            ) : (
                <div className="spinner" />
            )}
        </>
    );
};
