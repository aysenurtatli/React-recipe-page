import React from 'react'

function RecipeFilter({ searchRecipe, setSearchRecipe, recipeDifficulty, setRecipeDifficulty, recipes, category }) {
    const difficulties = [...new Set(recipes.map((recipe) => recipe.difficulty))];

    const handleRecipeSearch = (e) => {
        setSearchRecipe(e.target.value.toLowerCase())
    }

    const handleDifficulty = (e) => {
        setRecipeDifficulty(e.target.value)
    }
    return (
        <div className='flex w-full mt-4 relative'>
            <input
                type="text"
                placeholder='Search Recipe...'
                value={searchRecipe}
                onChange={handleRecipeSearch}
                className='bg-gray-100 w-full rounded-full pr-20 py-3 px-4 focus:outline-none text-gray-500' />
            <select
                value={recipeDifficulty}
                className='bg-gray-100 text-prairie-sand-800 font-medium rounded-full h-full focus:outline-none absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer p-2'
                onChange={handleDifficulty}>
                <option value="">Difficulty</option>
                {difficulties.map((diff) => (
                    <option value={diff} key={diff}>{diff}</option>
                ))}
            </select>
        </div>
    )
}

export default RecipeFilter