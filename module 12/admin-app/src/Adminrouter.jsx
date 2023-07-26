import React from 'react'
import { NavLink } from 'react-router-dom';


function Adminrouter() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/settings" activeClassName="active">
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Adminrouter
