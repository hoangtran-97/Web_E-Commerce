import React, { useContext } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import { HeaderProps } from "../../typings";
import { ThemeContext } from "../../context";
import styles from "./Search.module.css";

export const Search = ({ query, setQuery }: HeaderProps) => {
    const { theme } = useContext(ThemeContext);
    const bg = { backgroundColor: theme.background };
    const tx = { color: theme.text };
    return (
        <div className={styles.container__search} style={bg}>
            <AiOutlineSearch
                className={styles.icon__search}
                style={tx}
            ></AiOutlineSearch>
            <input
                style={{ ...bg, ...tx }}
                className={styles.search}
                value={query}
                onChange={event => setQuery(event.target.value)}
            ></input>
            <button
                style={bg}
                className={styles.button__close}
                onClick={() => setQuery("")}
            >
                <AiOutlineClose
                    style={tx}
                    className={styles.icon__close}
                ></AiOutlineClose>
            </button>
        </div>
    );
};
