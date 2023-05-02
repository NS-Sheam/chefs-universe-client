const getChefData = async (recipeId) => {
    const res = await fetch(`http://localhost:5000/chef/${recipeId}`)
    const chefData = await res.json();
    const res2 = await fetch(`http://localhost:5000/recipies/${recipeId}`)
    const recipeData = await res2.json();
    return { chefData, recipeData };

}

export { getChefData };