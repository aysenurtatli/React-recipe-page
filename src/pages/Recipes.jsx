import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice';
import { Link } from 'react-router';
import Recipe from '../components/Recipe';
import Loading from '../components/Loading';
import Categories from '../components/Categories';

function Recipes() {
    const [searchRecipe, setSearchRecipe] = useState("");
    const [loading, setLoading] = useState(true)
    const [recipeDifficulty, setRecipeDifficulty] = useState("");
    const { recipes } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRecipesAsync());
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    const handleRecipeSearch = (e) => {
        setSearchRecipe(e.target.value.toLowerCase())
    }

    const handleDifficulty = (e) => {
        setRecipeDifficulty(e.target.value)
    }

    const difficulties = [...new Set(recipes.map((recipe) => recipe.difficulty))]


    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipe) &&
            (recipeDifficulty === "" || recipe.difficulty === recipeDifficulty)
    })


    return (
        <div className='container max-w-screen-xl mx-auto'>
            {loading && <Loading/>}
            <div>
                <h2 className='text-5xl text-center font-bold text-prairie-sand-900 my-5'>Recipes</h2>
            </div>
            <div className='flex my-3 '>
                <input
                    type="text"
                    placeholder='Search Recipe...'
                    value={searchRecipe}
                    onChange={handleRecipeSearch}
                    className='bg-gray-100 w-full rounded-full py-3 px-4 focus:outline-none text-gray-500' />
                <select
                    value={recipeDifficulty}
                    className='bg-gray-100 rounded-full focus:outline-none cursor-pointer p-2'
                    onChange={handleDifficulty}>
                    <option value="">Difficulty</option>
                    {difficulties.map((diff) => (
                        <option value={diff} key={diff}>{diff}</option>
                    ))}
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr]'>
                <section>
                    <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full gap-4'>
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map((recipe, index) => (
                                    <Recipe key={index} recipe={recipe} />
                                ))
                            ) : <p>No Recipes Found</p>}

                        </div>
                    </div>
                </section>
                <Categories/>
            </div>
        </div>
    )
}

export default Recipes