import React from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import Recipies from '../Recipies/Recipies';

const ChefRecipies = () => {
    const {chefData, recipeData} = useLoaderData();
    console.log(chefData, recipeData);
    return (
        <div>
            <ChefBanner chefData={chefData}/>
            <Recipies recipeData={recipeData}/>
        </div>
    );
};

export default ChefRecipies;