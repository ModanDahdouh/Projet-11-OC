import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </Provider>
);
