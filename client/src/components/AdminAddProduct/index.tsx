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
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            categories: [],
            variants: [],
            sizes: [],
            img: "",
            price: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={styles.container}>
            <h2>Add new product to the store</h2>
            {/* <form onSubmit={formik.handleSubmit} className={styles.form} >
                <label htmlFor="name">Product name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="description">Product description:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <label htmlFor="name">Product category:</label>
                <input
                    id="categories"
                    name="categories"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.categories}
                />
                <label htmlFor="description">Product description:</label>
                <button type="submit">Submit</button>
            </form> */}
            <div>
                <h1>Friend List</h1>
                <Formik
                    initialValues={{ friends: ["jared", "ian", "brent"] }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    render={({ values }) => (
                        <Form>
                            <FieldArray
                                name="friends"
                                render={arrayHelpers => (
                                    <div>
                                        {values.friends &&
                                        values.friends.length > 0 ? (
                                                values.friends.map(
                                                    (friend, index) => (
                                                        <div key={index}>
                                                            <Field
                                                                name={`friends.${index}`}
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    arrayHelpers.remove(
                                                                        index
                                                                    )
                                                                } // remove a friend from the list
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
                                                                } // insert an empty string at a position
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
                                                    {/* show this when user has removed all friends from the list */}
                                                Add a friend
                                                </button>
                                            )}
                                        <div>
                                            <button type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                )}
                            />
                        </Form>
                    )}
                />
            </div>
        </div>
    );
};
