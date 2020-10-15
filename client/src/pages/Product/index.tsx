import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

import { addProduct } from "../../redux/actions";
import { AppState, RouteParam, Product } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Product.module.css";

const validationSchema = Yup.object().shape({
    sizes: Yup.string().required("  Required"),
    variants: Yup.string().required("  Required"),
});

export const ProductPage = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const txfg = { color: theme.foreground };
    const { id } = useParams<RouteParam>();
    const product = useSelector((state: AppState) =>
        state.product.list.find(p => p._id === id)
    );
    const { currentUser } = useSelector((state: AppState) => state.user);
    console.log(currentUser);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            sizes: "",
            variants: "",
        },
        validationSchema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            if (product) {
                const cartItem: Product = { ...product };
                cartItem.sizes = [];
                cartItem.sizes.push(parseInt(values.sizes));
                cartItem.variants = [];
                cartItem.variants.push(values.variants);
                if (currentUser.hasOwnProperty("user")) {
                    dispatch(addProduct(cartItem));
                } else {
                    alert("Please Login to add products to cart");
                }
            }
        },
    });
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
