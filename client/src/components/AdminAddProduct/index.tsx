import React from "react";
import { useFormik, Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { AdminAddProductProps } from "../../typings";
import styles from "./AdminAddProduct.module.css";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required(),
    description: Yup.string()
        .min(10, "Too Short!")
        .max(60, "Too Long!")
        .required(),
    categories: Yup.string().required(),
    sizes: Yup.number()
        .required()
        .integer(),
    variants: Yup.string().required(),
    price: Yup.number()
        .required()
        .positive()
        .integer(),
});
export const AdminAddProduct = ({ token }: AdminAddProductProps) => {
    return (
        <div className={styles.container}>
            <h2>Add new product to the store</h2>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    categories: [],
                    variants: [],
                    sizes: [],
                    img: "",
                    price: 0,
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ values, errors, touched }) => (
                    <Form className={styles.form}>
                        <label htmlFor="name">Product name:</label>
                        <Field id="name" name="name" placeholder="Red Shirt" />
                        {errors.name && touched.name ? (
                            <div className={styles.error}>{errors.name}</div>
                        ) : null}
                        <label htmlFor="description">
                            Product description:
                        </label>
                        <Field
                            as="textarea"
                            id="description"
                            name="description"
                            placeholder="This product is..."
                        />
                        {errors.description && touched.description ? (
                            <div className={styles.error}>
                                {errors.description}
                            </div>
                        ) : null}
                        <label htmlFor="img">Product image:</label>
                        <Field
                            id="img"
                            name="img"
                            placeholder="source from unsplash.com"
                        />
                        <label htmlFor="img">Product price:</label>
                        <Field
                            type="number"
                            id="price"
                            name="price"
                            placeholder="in EUR"
                        />
                        {errors.price && touched.price ? (
                            <div className={styles.error}>{errors.price}</div>
                        ) : null}
                        <label htmlFor="categories">Categories:</label>
                        <FieldArray name="categories">
                            {arrayHelpers => (
                                <>
                                    {values.categories &&
                                    values.categories.length > 0 ? (
                                            values.categories.map(
                                                (category, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`categories.${index}`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                arrayHelpers.remove(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                        -
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                arrayHelpers.insert(
                                                                    index,
                                                                    ""
                                                                )
                                                            }
                                                        >
                                                        +
                                                        </button>
                                                    </div>
                                                )
                                            )
                                        ) : (
                                            <button
                                                className={styles.button__add}
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.push("")
                                                }
                                            >
                                            Add a category
                                            </button>
                                        )}
                                </>
                            )}
                        </FieldArray>
                        {errors.categories && touched.categories ? (
                            <div className={styles.error}>
                                {errors.categories}
                            </div>
                        ) : null}
                        <label htmlFor="variants">Variants:</label>
                        <FieldArray name="variants">
                            {arrayHelpers => (
                                <>
                                    {values.variants &&
                                    values.variants.length > 0 ? (
                                            values.variants.map(
                                                (variant, index) => (
                                                    <div key={index}>
                                                        <Field
                                                            name={`variants.${index}`}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                arrayHelpers.remove(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                        -
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                arrayHelpers.insert(
                                                                    index,
                                                                    ""
                                                                )
                                                            }
                                                        >
                                                        +
                                                        </button>
                                                    </div>
                                                )
                                            )
                                        ) : (
                                            <button
                                                className={styles.button__add}
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.push("")
                                                }
                                            >
                                            Add a variant
                                            </button>
                                        )}
                                </>
                            )}
                        </FieldArray>
                        {errors.variants && touched.variants ? (
                            <div className={styles.error}>
                                {errors.variants}
                            </div>
                        ) : null}
                        <label htmlFor="sizes">Sizes:</label>
                        <FieldArray name="sizes">
                            {arrayHelpers => (
                                <>
                                    {values.sizes && values.sizes.length > 0 ? (
                                        values.sizes.map((size, index) => (
                                            <div key={index}>
                                                <Field
                                                    type="number"
                                                    name={`sizes.${index}`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        arrayHelpers.remove(
                                                            index
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        arrayHelpers.insert(
                                                            index,
                                                            ""
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <button
                                            className={styles.button__add}
                                            type="button"
                                            onClick={() =>
                                                arrayHelpers.push("")
                                            }
                                        >
                                            Add a size
                                        </button>
                                    )}
                                </>
                            )}
                        </FieldArray>
                        {errors.sizes && touched.sizes ? (
                            <div className={styles.error}>{errors.sizes}</div>
                        ) : null}
                        <div>
                            <button
                                className={styles.button__submit}
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
