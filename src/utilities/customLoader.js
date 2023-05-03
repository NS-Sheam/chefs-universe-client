const getChefData = async (recipeId) => {
    const res = await fetch(`https://chef-recipe-hunting-server-ns-sheam.vercel.app/chef/${recipeId}`)
    const chefData = await res.json();
    const res2 = await fetch(`https://chef-recipe-hunting-server-ns-sheam.vercel.app/recipies/${recipeId}`)
    const recipeData = await res2.json();
    return { chefData, recipeData };

}

export { getChefData };