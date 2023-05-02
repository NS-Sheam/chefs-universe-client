import React from 'react';
import Banner from '../Banner/Banner';
import AllCards from '../chefCards/AllCards/AllCards';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    return (
        <div>
            <Banner />
            <AllCards chefData={chefData} />
        </div>
    );
};

export default Home;