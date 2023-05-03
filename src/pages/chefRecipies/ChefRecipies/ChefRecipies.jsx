import React from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import Recipies from '../Recipies/Recipies';
import { Toaster } from 'react-hot-toast';


const ChefRecipies = () => {
    const { chefData, recipeData } = useLoaderData();
    // console.log(chefData, recipeData);
    return (
        <div>
            <ChefBanner chefData={chefData} />
            <Recipies recipeData={recipeData} />
            <Toaster />
        </div>
    );
};

export default ChefRecipies;