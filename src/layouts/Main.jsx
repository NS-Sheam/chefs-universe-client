import React, { useContext } from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const { loading } = useContext(AuthContext);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;