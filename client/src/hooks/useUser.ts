import { useState, useEffect } from "react";

import { User } from "../typings";

export const useUser = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/v1/users/"
                );
                const json = await response.json();
                setData(json);
            } catch (error) {
                // setError(error);
            }
        };
        loadData();
    }, []);

    return [data];
};
