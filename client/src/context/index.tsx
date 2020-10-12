import React, { useState } from "react";

import { ContextChildrenProps } from "../typings";

export const themes = {
    light: {
        foreground: "#8eed4d",
        background: "#dbfac5",
        icon: "#424242",
        text: "#000000",
        deg: "rotate(0deg)",
    },
    dark: {
        foreground: "#424242",
        background: "#6d6d6d",
        icon: "#8eed4d",
        text: "#ffffff",
        deg: "rotate(180deg)",
    },
};

const innitialState = {
    theme: themes.dark,
    switchTheme: () => {},
};
export const ThemeContext = React.createContext(innitialState);

export const ThemeProvider = ({ children }: ContextChildrenProps) => {
    const [theme, setTheme] = useState(themes.light);

    const switchTheme = () => {
        setTheme(prevState => {
            if (prevState === themes.light) {
                return themes.dark;
            } else {
                return themes.light;
            }
        });
    };
    const value = { theme, switchTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
