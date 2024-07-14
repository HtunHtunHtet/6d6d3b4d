import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {

    const location = useLocation();

    return (
        <nav>
            <ul>
                <li className={location.pathname === '/' ? 'active-link' : ''}>
                    <Link to="/">All Calls</Link>
                </li>
                <li className={location.pathname === '/archived-call' ? 'active-link' : ''}>
                    <Link to="/archived-call">Archived Calls</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;