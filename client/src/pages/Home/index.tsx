import React, { useContext } from "react";

import { Product, HomeProps } from "../../typings";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/ProductCard";
import { ThemeContext } from "../../context";
import styles from "./Home.module.css";

export const Home = ({ query }: HomeProps) => {
    const [products] = useProduct(query);
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    return (
        <div className={styles.container} style={bg}>
            {products === null ? (
                <p>No Product</p>
            ) : (
                <>
                    {products.map((product: Product) => (
                        <ProductCard
                            product={product}
                            key={product._id}
                        ></ProductCard>
                    ))}
                </>
            )}
        </div>
    );
};
