import React from 'react';
import './NavItem.css';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
    title: string;
}

function NavItem({ title }: NavItemProps) {
    return (
        <NavLink
            className="navItem"
            to={`/${title.toLowerCase()}`}
            activeStyle={{ color: 'white', borderBottom: '3px solid #FF4655' }}
        >
            {title}
        </NavLink>
    );
}

export default NavItem;
