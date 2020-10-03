import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from "../../helpers/routes";
import './Header.css';
const Header = () => {
    return (
        <header>
            <nav className={'header_navigation'}>
                <ul>
                    <li><Link to={ROUTES.HOME}>Home</Link></li>
                    <li><Link to={ROUTES.VARIABLES}>Variables</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;