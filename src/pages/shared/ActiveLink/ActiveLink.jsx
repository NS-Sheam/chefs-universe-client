import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "ms-0 me-lg-3 ps-0 pe-3 mx-md-3  my-1 my-md-0 py-1 py-md-2 active-nav"
                : "ms-0 me-lg-3 ps-0 pe-3 mx-md-3  my-1 my-md-0 py-1 py-md-2"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;