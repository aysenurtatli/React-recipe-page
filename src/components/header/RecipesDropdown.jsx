import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function RecipesDropdown({ isDropdownOpen }) {

    const { recipes } = useSelector((state) => state.recipes)

    const categories = [...new Set(recipes.flatMap((recipe) => recipe.mealType))]

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }


    return (
        <div id='dropdownNavbar' className={` ${isDropdownOpen ? 'block' : 'hidden'} z-20  divide-y divide-gray-100 static md:absolute bg-prairie-sand-100 border border-prairie-sand-400 rounded-md p-4 my-2`}>
            <ul aria-labelledby='dropdownLargeButton' className='py-2 text-base'>
                {categories.map((category, index) => (
                    <li key={index} className='block py-2 px-4 hover:bg-prairie-sand-50 duration-100 rounded-md'>
                        <Link>{category}</Link>
                    </li>
                ))}
                <li className='block py-2 px-4 hover:bg-prairie-sand-50 duration-100 rounded-md border border-prairie-sand-400'>
                    <Link>All Recipes</Link>
                </li>
            </ul>
        </div>
    )
}

export default RecipesDropdown