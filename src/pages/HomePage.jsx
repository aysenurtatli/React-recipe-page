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
        <div className='container mx-auto my-10'>
            {loading && <Loading />}
            <div>
                <h2 className='text-5xl text-center font-bold text-prairie-sand-900 my-5'>Recipe Ideas</h2>
            </div>
            <section className="bg-white">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 h-full">
                        {first5Recipes.map((recipe, index) => (
                            <div key={index} className="bg-gray-50 h-auto flex flex-col">
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                    <img src={recipe.image} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <div className='bg-prairie-sand-200 absolute bottom-0
                                     left-0 w-full z-1'>
                                        <h3 className="z-10 text-2xl font-medium p-1 text-prairie-sand-900 xs:text-xl md:text-2xl">{recipe.name}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage