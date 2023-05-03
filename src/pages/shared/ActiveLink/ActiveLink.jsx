import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "text-black me-lg-3 py-2"
                : " me-lg-3 py-2"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;