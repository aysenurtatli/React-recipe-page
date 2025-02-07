import React from 'react'
import { useSelector } from 'react-redux'

function Categories() {
  const { recipes } = useSelector((state) => state.recipes);

  const categories = [...new Set(recipes.flatMap((recipe) => recipe.mealType))]
  console.log(categories)


  return (
    <div className=' bg-prairie-sand-100 sticky right-0 top-3 h-fit'>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories