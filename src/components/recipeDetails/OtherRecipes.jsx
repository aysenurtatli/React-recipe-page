import React from 'react'
import { useDispatch, useSelector,} from 'react-redux'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

function OtherRecipes() {
    const [otherRecipes, setOtherRecipes] = useState([])
    const {id} = useParams()
    const dispatch = useDispatch();
    const {recipes} = useSelector((state) => state.recipes);

    useEffect(() => {
        const filterRecipes = recipes.filter((r) => r.id !== Number(id));
        const shuffle = filterRecipes.sort(() => 0.5 - Math.random());
        setOtherRecipes(shuffle.slice(0, 4))
    }, [recipes, id])



  return (
    <div className='flex flex-col gap-3 border-2 rounded-md p-3 border-prairie-sand-100 my-5'>
    <h3 className='text-prairie-sand-900 font-bold text-xl'>Other Recipes</h3>

    {otherRecipes.map((recipe) => (
        <Link to={`/recipes/recipe/${recipe.id}`}>
            <div className='inline-flex gap-3'>
                <img src={recipe.image} className='w-[100px]' />
                <h3 className='text-lg text-prairie-sand-900 my-auto'>{recipe.name}</h3>
            </div>
        </Link>

    ))}

</div>
  )
}

export default OtherRecipes