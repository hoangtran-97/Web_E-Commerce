import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useFormik } from "formik";

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
    const formik = useFormik({
        initialValues: {
            sizes: "",
            variants: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
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
                <div className={styles.form}>
                    <form onSubmit={formik.handleSubmit} style={tx}>
                        <p>Product Name: {name}</p>
                        <p>Product Description: {description}</p>
                        <p>Product Category: {categories}</p>
                        <p>Price: {price} EUR</p>
                        <div className={styles.select}>
                            <label htmlFor="sizes">Sizes:</label>
                            <select
                                name="sizes"
                                id="sizes"
                                value={formik.values.sizes}
                                onChange={formik.handleChange}
                            >
                                <option
                                    value=""
                                    defaultValue=""
                                    disabled
                                    hidden
                                >
                                    Choose here
                                </option>
                                {sizes.map((size, index) => (
                                    <option value={size} key={index}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.select}>
                            <label htmlFor="variants">Variants:</label>
                            <select
                                name="variants"
                                id="variants"
                                value={formik.values.variants}
                                onChange={formik.handleChange}
                            >
                                <option
                                    value=""
                                    defaultValue=""
                                    disabled
                                    hidden
                                >
                                    Choose here
                                </option>
                                {variants.map((variant, index) => (
                                    <option value={variant} key={index}>
                                        {variant}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Add to cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};