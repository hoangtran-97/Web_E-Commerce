import React, { useContext } from "react";

import { Product } from "../../typings";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/ProductCard";
import { ThemeContext } from "../../context";
import styles from "./Home.module.css";
//Todo Store redux data in memory

export const Home = () => {
    const [products] = useProduct();
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };

    console.log(products);
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
