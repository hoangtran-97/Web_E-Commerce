import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux/actions/";
import { AppState, User } from "../typings";

export const useUser = () => {
    const [data, setData] = useState<User[]>([]);
    const dispatch = useDispatch();
    const users = useSelector((state: AppState) => state.user.list);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    useEffect(() => {
        setData(users);
    }, [users]);
    return [data];
};
