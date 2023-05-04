import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Spinner className='d-block mx-auto' size='lg' animation="border" />
        </div>
    }
    if (user) {
        return children;       
    }
    else {
        return <Navigate state={{form: location}} to={"/login"} replace></Navigate>
    }
};

export default PrivateRoutes;