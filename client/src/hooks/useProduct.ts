import { useState, useEffect } from "react";

export const useProduct = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const URL = "http://localhost:3001/api/v1/products/";
            try {
                const res = await fetch(URL);
                const json = await res.json();
                setData(json);
            } catch (error) {}
        };
        loadData();
    }, []);
    return [data];
};
