import React, { useEffect, useState } from 'react'
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';



function HomePage() {
    const [loading, setLoading] = useState(true)
    const { recipes } = useSelector((state) => state.recipes)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRecipesAsync());
            setLoading(false)
        }
        fetchData()
    }, [dispatch])

    const first5Recipes = recipes.slice(0, 5);

 
    return (
            <div className='container mx-auto my-10 h-auto'>
                {loading && <Loading />}
                
                <div>
                    <h2 className='text-5xl text-center font-bold text-prairie-sand-900'>Recipe Ideas</h2>
                </div>
            </div>
    )
}

export default HomePage