import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { AppState, RouteParam } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Product.module.css";

export const Product = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const txfg = { color: theme.foreground };
    const { id } = useParams<RouteParam>();
    const product = useSelector((state: AppState) =>
        state.product.list.find(p => p._id === id)
    );
    if (!product) {
        return (
            <div className={styles.container} style={{ ...bg, ...tx }}>
                <h2> Product not found</h2>
                <Link type="button" to="/">
                    <AiOutlineArrowLeft
                        className={styles.icon__back}
                        style={txfg}
                    ></AiOutlineArrowLeft>
                </Link>
            </div>
        );
    }
    const {
        img,
        name,
        description,
        sizes,
        variants,
        price,
        categories,
    } = product;
    return (
        <div className={styles.container} style={bg}>
            <div className={styles.container__inner} style={fg}>
                <div className={styles.img__container}>
                    <img
                        alt="product_image"
                        className={styles.img}
                        src={img}
                    ></img>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
