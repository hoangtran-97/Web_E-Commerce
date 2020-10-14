import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/actions/";
import { AppState, Product } from "../typings";

export const useProduct = () => {
    const [data, setData] = useState<Product[]>([]);
    const dispatch = useDispatch();
    const products = useSelector((state: AppState) => state.product.list);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    useEffect(() => {
        setData(products);
    }, [products]);
    return [data];
};
