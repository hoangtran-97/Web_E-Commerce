import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AdminAddProductProps } from "../../typings";
import styles from "./AdminAddProduct.module.css";

const validationSchema = Yup.object().shape({
    sizes: Yup.string().required("  Required"),
    variants: Yup.string().required("  Required"),
});
export const AdminAddProduct = ({ token }: AdminAddProductProps) => {
    return <div>Formik form here</div>;
};
