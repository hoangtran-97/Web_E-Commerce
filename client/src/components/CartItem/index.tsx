import React from "react";

import { CartItemProps } from "../../typings";
import { ProductCard } from "../ProductCard";

import styles from "./CartItem.module.css";

export const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className={styles.container}>
            <ProductCard product={item} key={item._id} noFlag></ProductCard>
            <button>Remove</button>
        </div>
    );
};
