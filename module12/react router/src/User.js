import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import UserHome from './Userhome';
import UserProfile from './Userprofile';

const User = () => {
    return (
        <div>
            <h2>Welcome to User Module!</h2>
            <nav>
                <NavLink to="/user" exact>
                    Home
                </NavLink>
                <NavLink to="/user/profile">Profile</NavLink>
            </nav>
            <Routes>
                <Route path="/user" exact component={UserHome} />
                <Route path="/user/profile" component={UserProfile} />
            </Routes>
        </div>
    );
};

export default User;
