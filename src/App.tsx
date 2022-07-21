import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Profile } from "@components/Profile";
import { InputTodo } from "@components/input";
import { Home } from "@components/home";
export default function App(): JSX.Element {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}
