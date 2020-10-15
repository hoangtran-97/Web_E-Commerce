import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/actions/";
import { AppState, Product } from "../typings";

export const useProduct = (query: string) => {
    const [data, setData] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const products = useSelector((state: AppState) => state.product.list);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    useEffect(() => {
        setData(products);
    }, [products]);
    useEffect(() => {
        const sorted = [...products].filter((product: any) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(sorted);
    }, [query]);
    return [data];
};
