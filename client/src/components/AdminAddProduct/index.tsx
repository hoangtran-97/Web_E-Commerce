import React from "react";
import { useFormik, Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { AdminAddProductProps } from "../../typings";
import styles from "./AdminAddProduct.module.css";

const validationSchema = Yup.object().shape({
    sizes: Yup.string().required("  Required"),
    variants: Yup.string().required("  Required"),
});
export const AdminAddProduct = ({ token }: AdminAddProductProps) => {
    return (
        <div className={styles.container}>
            <h2>Add new product to the store</h2>
            <div>
                <h2>New Product</h2>
                <Formik
                    initialValues={{
                        name: "",
                        description: "",
                        categories: [],
                        variants: [],
                        sizes: [],
                        img: "",
                        price: "",
                        friends: ["jared", "ian", "brent"],
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ values }) => (
                        <Form className={styles.form}>
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
                            <FieldArray name="sizes">
                                {arrayHelpers => (
                                    <>
                                        {values.sizes &&
                                        values.sizes.length > 0 ? (
                                                values.sizes.map((size, index) => (
                                                    <div key={index}>
                                                        <Field
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
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
