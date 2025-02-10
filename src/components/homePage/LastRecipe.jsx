import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'

function LastRecipe({ recipe }) {
    const { recipes } = useSelector((state) => state.recipes)
    const lastRecipe = recipes[recipes.length - 1]
    if (!recipes.length) return null;


    console.log(lastRecipe)
    return (
        <div className="relative bg-white  rounded-lg overflow-hidden md:row-span-2 h-[500px]">
            <Link to={`/recipes/recipe/${lastRecipe.id}`} className="group relative block h-full">
                <img
                    src={lastRecipe.image}
                    alt={lastRecipe.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-2 right-3 text-2xl bg-green-300 text-green-900 rounded-md px-2 py-1 font-bold">
                    New Recipe
                </div>
                <div className="absolute bottom-0 bg-prairie-sand-100 p-6 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-prairie-sand-900">{lastRecipe.name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default LastRecipe