import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
function Tags({ recipes }) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        const recipeTags = [...new Set(recipes.flatMap((recipe) => recipe.tags))]
        const randomTags = recipeTags.sort(() => 0.5 - Math.random());
        setTags(randomTags.slice(0, 10))
    }, [recipes])

    return (
        <div className='w-full sm:w-[500px] my-10 h-auto relative bg-prairie-sand-400 rounded-md p-2  mx-auto' >
            <h3 className='font-bold text-xl text-prairie-sand-50'>Try This Recipes</h3>
            <ul className='flex flex-wrap gap-4 my-2 mx-5'>
                {tags.map((tag) => (
                    <li className='bg-white rounded-md p-1 font-semibold text-prairie-sand-600 '>
                        <Link to={`/recipes/tag/${tag}`}>{tag}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tags