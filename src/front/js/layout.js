import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Enter } from "./pages/enter";
import { Room } from "./pages/room";
import { Shop } from "./pages/shop";
import { Personal } from "./pages/personal";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Enter />} path="/enter" />
                        <Route element={<Room />} path="/room" />
                        <Route element={<Shop />} path="/shop" />
                        <Route element={<Personal />} path="/personal" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
