import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice';
import { Link, useParams } from 'react-router';
import Recipe from '../components/Recipe';
import Loading from '../components/Loading';
import Categories from '../components/Categories';
import RecipeFilter from '../components/recipes/RecipeFilter';

function Recipes() {
    const [searchRecipe, setSearchRecipe] = useState("");
    const [loading, setLoading] = useState(true)
    const [recipeDifficulty, setRecipeDifficulty] = useState("");
    const { category } = useParams();
    const { recipes } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRecipesAsync());
            setLoading(false)
        }
        fetchData()
    }, [dispatch, category])


    const filteredRecipes = recipes
        .filter((recipe) => {
            const mealTypes = Array.isArray(recipe.mealType) ? recipe.mealType : [recipe.mealType];
            return !category || mealTypes.some((type) => type.toLowerCase() === category.toLowerCase())
        })
        .filter((recipe) => recipe.name.toLowerCase().includes(searchRecipe))
        .filter((recipe) => (recipeDifficulty === "" || recipe.difficulty === recipeDifficulty))


    return (
        <div className='container max-w-screen-xl mx-auto my-20'>
            {loading && <Loading />}
            <div>
                <h2 className='text-5xl text-center font-bold text-prairie-sand-900 my-5'>{category ? `${category} Recipes` : "All Recipes"}</h2>
            </div>
            <RecipeFilter
                searchRecipe={searchRecipe}
                setSearchRecipe={setSearchRecipe}
                recipeDifficulty={recipeDifficulty}
                setRecipeDifficulty={setRecipeDifficulty}
                recipes={recipes}
                category={category} />
            <div className='sm:px-5 z-20'>
                <section>
                    <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-3'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map((recipe, index) => (
                                    <Recipe key={index} recipe={recipe} />
                                ))
                            ) : <p>No Recipes Found</p>}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Recipes