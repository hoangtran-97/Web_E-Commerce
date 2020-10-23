import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { Product, HomeProps, AppState } from "../../typings";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/ProductCard";
import { ThemeContext } from "../../context";
import styles from "./Home.module.css";

export const Home = ({ query }: HomeProps) => {
    const [products] = useProduct(query);
    const { theme } = useContext(ThemeContext);
    const { currentUser } = useSelector((state: AppState) => state.user);
    const { isBanned } = currentUser;
    const bg = { backgroundColor: theme.background };
    if (isBanned) {
        return <div> YOU ARE BANNED</div>;
    }
    return (
        <div className={styles.container} style={bg}>
            {products.length === 0 ? (
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
