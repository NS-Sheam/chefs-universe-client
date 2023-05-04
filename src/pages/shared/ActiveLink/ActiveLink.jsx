import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "me-lg-3 px-3 my-1 my-md-0 py-1 py-md-2 active-nav"
                : " me-lg-3 px-3 my-1 my-md-0 py-1 py-md-2"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;