import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { AppState } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Profile.module.css";
import { AdminProductItem } from "../../components/AdminProductItem";
import { AdminAddProduct } from "../../components/AdminAddProduct";

export const Profile = () => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    const fg = { backgroundColor: theme.foreground };
    const tx = { color: theme.text };
    const { currentUser, token } = useSelector((state: AppState) => state.user);
    const { list } = useSelector((state: AppState) => state.product);
    const { userName, isAdmin } = currentUser;
    return (
        <div className={styles.container} style={bg}>
            <p>
                {userName} {isAdmin && <span>- ADMIN</span>}
            </p>
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
                    <h2>Add a product to the store</h2>
                    <AdminAddProduct token={token} />
                </TabPanel>
            </Tabs>
        </div>
    );
};
