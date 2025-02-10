import React from 'react'
import { Link } from 'react-router'

function Recipe({ recipe }) {
    return (
        <div className='relative'>
            <Link to={`/recipes/recipe/${recipe.id}`}>
                <img src={recipe.image} className='rounded-t-lg' />
                {recipe.tags.includes('Vegetarian') && (
                    <div className='absolute top-2 right-3 bg-green-300 text-green-900 rounded-md p-1 font-bold'>
                        Vegetarian
                    </div>)}
                <div className=' bg-prairie-sand-100 rounded-b-lg p-2 h-32 flex flex-col justify-end'>
                    <h3 className='text-prairie-sand-900 font-medium text-lg'>{recipe.name}</h3>
                    <div>
                        <span className='text-prairie-sand-900 text-sm'>{recipe.prepTimeMinutes} Minutes Prep,</span>
                        <span className='text-prairie-sand-900 text-sm'>{recipe.cookTimeMinutes} Minutes Cook</span>
                        <div className='flex justify-between mt-4'>
                            <div className={`${recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                                recipe.difficulty === "Medium" ? "bg-prairie-sand-300 text-prairie-sand-900" :
                                    recipe.difficulty === "Hard" ? "bg-red-300" : ""
                                } rounded-md font-bold p-1  `}>
                                {recipe.difficulty}
                            </div>
                            <div className='bg-white flex items-center rounded-md font-bold p-1 text-prairie-sand-500'>{recipe.rating}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Recipe