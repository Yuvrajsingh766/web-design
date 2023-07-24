import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

// Lazy-loaded components
const Admin = lazy(() => import('./Admin'));
const User = lazy(() => import('./User'));

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <NavLink to="/admin">Admin</NavLink>
                    <NavLink to="/user">User</NavLink>
                </nav>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/admin" component={Admin} />
                        <Route path="/user" component={User} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
