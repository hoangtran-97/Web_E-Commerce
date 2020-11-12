import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    addProduct,
    addProductDB,
    addToast,
    removeProduct,
    removeProductDB,
} from "../../redux/actions";
import { AppState, RouteParam, ProductInCart, IntentType } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Product.module.css";

const validationSchema = Yup.object().shape({
    sizes: Yup.string().required("  Required"),
    variants: Yup.string().required("  Required"),
});

export const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const { theme } = useContext(ThemeContext);
    const { id } = useParams<RouteParam>();
    const product = useSelector((state: AppState) =>
        state.product.list.find(p => p._id === id)
    );
    const productIsInCart = useSelector((state: AppState) =>
        state.product.inCart.find(p => p._id === id)
    );
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            sizes: "",
            variants: "",
        },
        validationSchema,
        onSubmit: values => {
            if (product) {
                const cartItem: ProductInCart = { ...product, ...{ quantity } };
                cartItem.sizes = [];
                cartItem.sizes.push(parseInt(values.sizes));
                cartItem.variants = [];
                cartItem.variants.push(values.variants);
                const { _id } = currentUser;
                if (productIsInCart) {
                    const updateCartConfirmation = window.confirm(
                        "Product is already in cart, do you want to update your selection?"
                    );
                    if (updateCartConfirmation === true) {
                        if (_id) {
                            dispatch(
                                removeProductDB(
                                    currentUser,
                                    product,
                                    _id,
                                    token
                                )
                            );
                        } else {
                            dispatch(removeProduct(product));
                        }
                        dispatch(
                            addToast({
                                message: `Updated ${product.name} in cart.`,
                                intent: IntentType.INFO,
                            })
                        );
                    } else {
                        dispatch(
                            addToast({
                                message: "Your cart was not updated",
                                intent: IntentType.WARNING,
                            })
                        );
                    }
                }
                if (_id) {
                    console.log("this still runs API");
                    dispatch(addProductDB(currentUser, cartItem, _id, token));
                } else {
                    console.log("this still runs");
                    dispatch(addProduct({ ...cartItem }));
                }
                dispatch(
                    addToast({
                        message: `Added ${product.name} to cart.`,
                        intent: IntentType.SUCCESS,
                    })
                );
            }
        },
    });

    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const txfg = { color: theme.foreground };

    const addQuantity = () => {
        setQuantity(prev => (prev += 1));
    };
    const reduceQuantity = () => {
        if (quantity === 0) {
            return;
        }
        setQuantity(prev => (prev -= 1));
    };

    if (!product) {
        return (
            <div className={styles.container} style={{ ...bg, ...tx }}>
                <div className={styles.error__container}>
                    <h2 className={styles.error__text}> Product not found</h2>
                    <Link type="button" to="/">
                        <AiOutlineArrowLeft
                            className={styles.error__icon}
                            style={txfg}
                        ></AiOutlineArrowLeft>
                    </Link>
                </div>
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
                        <p>
                            <span className={styles.span}>Product Name:</span>{" "}
                            {name}
                        </p>
                        <p>
                            <span className={styles.span}>
                                Product Description:
                            </span>{" "}
                            {description}
                        </p>
                        <p>
                            <span className={styles.span}>
                                Product Category:
                            </span>{" "}
                            {categories}
                        </p>
                        <p>
                            <span className={styles.span}>Price:</span> {price}{" "}
                            EUR
                        </p>
                        <div className={styles.select}>
                            <label htmlFor="sizes" className={styles.span}>
                                Sizes:
                            </label>
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
                            {formik.errors.sizes ? formik.errors.sizes : null}
                        </div>
                        <div className={styles.select}>
                            <label htmlFor="variants" className={styles.span}>
                                Variants:
                            </label>
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
                            {formik.errors.variants
                                ? formik.errors.variants
                                : null}
                        </div>
                        <div className={styles.quantity__container}>
                            <p className={styles.span}>Quantity: </p>
                            <button
                                type="button"
                                className={styles.quantity__button}
                                style={{ ...bg, ...tx }}
                                onClick={reduceQuantity}
                            >
                                -
                            </button>
                            <p className={styles.span}>{quantity}</p>
                            <button
                                type="button"
                                className={styles.quantity__button}
                                style={{ ...bg, ...tx }}
                                onClick={addQuantity}
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="submit"
                            className={styles.button}
                            style={{ ...bg, ...tx }}
                        >
                            Add to cart
                        </button>
                    </form>
                </div>
            </div>
            <Link type="button" to="/">
                <AiOutlineArrowLeft
                    className={styles.error__icon}
                    style={txfg}
                ></AiOutlineArrowLeft>
            </Link>
        </div>
    );
};
