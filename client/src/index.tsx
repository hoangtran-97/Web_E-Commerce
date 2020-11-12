import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import App from "./App";
import makeStore from "./redux/store";
import ScrollToTop from "./hooks/useToTop";
import "./index.css";

const store = makeStore();

const WithProvider = () => (
    <Provider store={store}>
        <ToastContainer />
        <Router>
            <ScrollToTop></ScrollToTop>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<WithProvider />, document.getElementById("root"));
