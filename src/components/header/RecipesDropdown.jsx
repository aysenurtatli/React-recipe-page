import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function RecipesDropdown({ isDropdownOpen, toggleDropdown }) {
    const { recipes } = useSelector((state) => state.recipes)

    const categories = [...new Set(recipes.flatMap((recipe) => recipe.mealType))]

    return (
        <div id='dropdownNavbar' className={` ${isDropdownOpen ? 'block' : 'hidden'} z-20 static md:absolute md:bg-prairie-sand-100 md:border text-white sm:text-prairie-sand-800 border-prairie-sand-400 rounded-md md:p-4 my-2 right-40`}>
            <ul aria-labelledby='dropdownLargeButton' className='py-2 text-base grid  grid-cols-2'>
                {categories.map((category, index) => (
                    <li key={index} className='block py-2 px-4 hover:bg-prairie-sand-50 duration-100 rounded-md'>
                        <Link to={`/recipes/${category.toLowerCase()}`} onClick={toggleDropdown}>{category}</Link>
                    </li>
                ))}
                <li className='block py-2 px-4 hover:bg-prairie-sand-50 duration-100 rounded-md border border-prairie-sand-400'>
                    <Link to="/recipes" onClick={toggleDropdown}>All Recipes</Link>
                </li>
            </ul>
        </div>
    )
}

export default RecipesDropdown