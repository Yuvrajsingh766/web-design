import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import AdminHome from './Adminhome';
import AdminDashboard from './AdminDashboard';
import AdminProfile from './Adminprofile';

const Admin = () => {
    return (
        <div>
            <h2>Welcome to Admin Module!</h2>
            <nav>
                <NavLink to="/admin" exact>
                    Home
                </NavLink>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
                <NavLink to="/admin/profile">Profile</NavLink>
            </nav>
            <Routes>
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/profile" element={<AdminProfile />} />
            </Routes>
        </div>
    );
};

export default Admin;
