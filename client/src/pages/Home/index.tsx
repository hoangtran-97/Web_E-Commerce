import React, { useContext } from "react";

import { ThemeContext } from "../../context";
import styles from "./Home.module.css";

export const Home = () => {
    const { theme } = useContext(ThemeContext);
    const fg = { backgroundColor: theme.foreground };
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    return (
        <div className={styles.container} style={bg}>
            <p>Home page</p>
        </div>
    );
};
