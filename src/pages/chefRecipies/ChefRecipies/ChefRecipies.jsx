import React from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';

const ChefRecipies = () => {
    const {chefData, recipeData} = useLoaderData();
    console.log(chefData, recipeData);
    return (
        <div>
            <ChefBanner chefData={chefData}/>
        </div>
    );
};

export default ChefRecipies;