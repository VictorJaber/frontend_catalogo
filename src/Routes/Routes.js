import React from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import User from '../components/User';
import Login from '../components/Login';

function PrivateRoute({children}) {

    const user = true

    return user ? children : <Navigate to={'/'}/>
}

function RouteComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path="/ford" element={<Products/>}/>
                <Route path="/profile" element={<User/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteComponents;
