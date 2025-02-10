import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
function Cuisine({ recipes }) {
    const [cuisine, setCuisine] = useState([])

    useEffect(() => {
        const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))]
        setCuisine(cuisines)
    }, [recipes])

    return (
        <div className='w-full  h-auto bg-prairie-sand-50 rounded-md p-3 my-4 mx-auto' >
            <h3 className='font-bold text-2xl text-prairie-sand-800'>Cuisines</h3>
            <ul className='flex flex-wrap gap-4 my-2'>
                {cuisine.map((c) => (
                    <li className='bg-white rounded-md p-1 font-semibold hover:outline outline-1 prairie-sand-500 text-prairie-sand-600 '>
                        <Link>{c}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cuisine