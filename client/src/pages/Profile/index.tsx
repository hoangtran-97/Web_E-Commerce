import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useHistory } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import { AdminProductItem } from "../../components/AdminProductItem";
import { AdminAddProduct } from "../../components/AdminAddProduct";
import { useUser } from "../../hooks/useUser";
import { AdminUserItem } from "../../components/AdminUserItem";
import { removeUser } from "../../redux/actions";
import styles from "./Profile.module.css";

export const Profile = () => {
    const { theme } = useContext(ThemeContext);
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    const { list } = useSelector((state: AppState) => state.product);
    const dispatch = useDispatch();
    const [users] = useUser();
    const history = useHistory();
    const goHome = () => {
        history.push("/");
    };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    const { userName, isAdmin } = currentUser;
    return (
        <div className={styles.container} style={bg}>
            <p>
                {userName} {isAdmin && <span>- ADMIN</span>}
            </p>
            <button
                onClick={() => {
                    dispatch(removeUser(currentUser));
                    goHome();
                }}
            >
                Logout
            </button>
            {isAdmin && (
                <Tabs className={styles.tab}>
                    <TabList className={styles.tab__list}>
                        <Tab
                            style={tx}
                            selectedClassName={styles.tab__list__selected}
                        >
                            Users
                        </Tab>
                        <Tab
                            style={tx}
                            selectedClassName={styles.tab__list__selected}
                        >
                            Products
                        </Tab>
                        <Tab
                            style={tx}
                            selectedClassName={styles.tab__list__selected}
                        >
                            Add Product
                        </Tab>
                    </TabList>
                    <TabPanel className={styles.tab__panel}>
                        <h2>User managements here</h2>
                        <div className={styles.tab__panel__grid}>
                            {users.map(item => (
                                <AdminUserItem
                                    key={item._id}
                                    user={item}
                                ></AdminUserItem>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className={styles.tab__panel}>
                        <h2>Remove products from the store</h2>
                        <div className={styles.tab__panel__grid}>
                            {list.map(item => (
                                <AdminProductItem
                                    key={item._id}
                                    product={item}
                                ></AdminProductItem>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel className={styles.tab__panel}>
                        <AdminAddProduct token={token} />
                    </TabPanel>
                </Tabs>
            )}
        </div>
    );
};
