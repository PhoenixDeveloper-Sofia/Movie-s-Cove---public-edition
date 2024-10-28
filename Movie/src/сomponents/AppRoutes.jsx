import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { notNavigationMunuRoutes, routes } from '../router/index'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
            {notNavigationMunuRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
    );
};

export default AppRoutes;