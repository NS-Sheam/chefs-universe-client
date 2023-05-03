import React from 'react';
import Banner from '../Banner/Banner';
import AllCards from '../chefCards/AllCards/AllCards';
import { useLoaderData } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';
import ChefTalk from '../ChefTalk/ChefTalk';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    return (
        <div>
            <Banner />
            <AllCards chefData={chefData} />
            <ChefTalk chefData={chefData}/>
            <Feedback />
        </div>
    );
};

export default Home;