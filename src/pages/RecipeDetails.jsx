import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice'
import { PiCookingPotBold } from "react-icons/pi";
import { PiForkKnifeBold } from "react-icons/pi";
import { GiCook } from "react-icons/gi";
import OtherRecipes from '../components/recipeDetails/OtherRecipes';

function RecipeDetails() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { id } = useParams()
    const { recipes } = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(fetchRecipesAsync())
            .then(() => setLoading(false))
    }, [dispatch])

    const recipe = recipes.find((r) => r.id === Number(id))


   
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='container max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                <div>
                    <h1 className='text-4xl py-8 font-bold text-prairie-sand-700'>{recipe.name}</h1>
                    <img src={recipe.image} />
                    <div className='text-prairie-sand-900 my-4'>
                        <h3 className='font-bold text-2xl'>Instructions</h3>
                        <p className='font-medium'>{recipe.instructions}</p>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='bg-prairie-sand-100 rounded-md p-5 text-prairie-sand-900 font-medium mb-5'>

                        <div className='flex items-center gap-2'>
                            <GiCook />
                            <p>{recipe.prepTimeMinutes} Minutes Prep</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <PiCookingPotBold />
                            <p>{recipe.cookTimeMinutes} Minutes Cook</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <PiForkKnifeBold />
                            <p>{recipe.servings} Servings</p>
                        </div>

                    </div>
                    <div className='bg-prairie-sand-100 rounded-md text-prairie-sand-900 font-medium p-5'>
                        <h3 className='font-bold'>Ingredients</h3>
                        <ul className='list-disc px-5'>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <OtherRecipes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails