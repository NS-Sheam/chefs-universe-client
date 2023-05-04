import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "px-2 py-2 my-2 my-lg-0 text-center active-nav"
                : "px-2 py-2 my-2 my-lg-0 text-center"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;