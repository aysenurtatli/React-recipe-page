import React, { useEffect, useState } from 'react'
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import Loading from '../components/Loading';
import LastRecipe from '../components/homePage/LastRecipe';
import { IoIosArrowForward } from "react-icons/io";



function HomePage() {
    const [loading, setLoading] = useState(true)
    const [meal, setMeal] = useState("")
    const [filteredRecipes, setFilteredRecipes] = useState([]);
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


    useEffect(() => {
        const mealTime = () => {
            const date = new Date();
            const hour = date.getHours();
            if (hour >= 6 && hour < 11) {
                return "breakfast";
            } else if (hour >= 11 && hour < 16) {
                return "lunch";
            } else if (hour >= 16 && hour < 22) {
                return "dinner";
            } else {
                return "snack"
            }
        };
        setMeal(mealTime())
    }, [])


    useEffect(() => {
        if (recipes.length > 0) {
            const filtered = recipes.filter((recipe) =>
                Array.isArray(recipe.mealType) && recipe.mealType.some(type => type.toLowerCase() === meal.toLowerCase())
            );
            setFilteredRecipes(filtered.slice(0, 4))
        }
    }, [recipes, meal])


    return (
        <div className='container max-w-screen-xl mx-auto my-20 py-4 px-4 sm:py-3'>
            {loading && <Loading />}
            <div className='mb-10'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-prairie-sand-900 my-5'>
                    Don't you know what to cook for {meal} ? <span className='block'>you are in the right place!</span></h2>
            </div>
            <section className="bg-white">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {filteredRecipes.map((recipe, index) => (
                                <div key={index} className="bg-gray-50 h-auto flex flex-col">
                                    <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src={recipe.image} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div className='bg-prairie-sand-100 absolute bottom-0 left-0 w-full z-1'>
                                            <h3 className="z-10 text-lg sm:text-xl font-medium p-1 text-prairie-sand-900">{recipe.name}</h3>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-1">
                            <LastRecipe />
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-fit bg-prairie-sand-500 p-3 rounded-full text-xl text-white my-4'>
                <Link to="/recipes" className='flex items-center'>See all Recipes <IoIosArrowForward /></Link>
            </div>
        </div >
    )
}

export default HomePage