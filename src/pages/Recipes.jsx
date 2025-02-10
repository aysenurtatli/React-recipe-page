import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesAsync } from '../redux/app/features/recipesSlice';
import { Link, useParams } from 'react-router';
import Recipe from '../components/recipes/Recipe';
import Loading from '../components/Loading';
import RecipeFilter from '../components/recipes/RecipeFilter';
import Tags from '../components/recipes/Tags';
import Cuisine from '../components/recipes/Cuisine';
import NavigateToTop from '../components/recipes/NavigateToTop';

function Recipes() {
    const [searchRecipe, setSearchRecipe] = useState("");
    const [loading, setLoading] = useState(true)
    const [selectedTags, setSelectedTags] = useState([])
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [recipeDifficulty, setRecipeDifficulty] = useState("");
    const { category, tag } = useParams();
    const { recipes } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRecipesAsync());
            setLoading(false)
        }
        fetchData()
    }, [dispatch, category, tag])


    const filteredRecipes = recipes
        .filter((recipe) => {
            const mealTypes = Array.isArray(recipe.mealType) ? recipe.mealType : [recipe.mealType];
            return !category || mealTypes.some((type) => type.toLowerCase() === category.toLowerCase())
        })
        .filter((recipe) => recipe.name.toLowerCase().includes(searchRecipe))
        .filter((recipe) => (recipeDifficulty === "" || recipe.difficulty === recipeDifficulty))
        .filter((recipe) => {
            if (tag) {
                return recipe.tags && recipe.tags.includes(tag)
            }
            return true;
        })
        .filter((recipe) => {
            if (selectedCuisine) {
                return recipe.cuisine && recipe.cuisine.toLowerCase() === selectedCuisine.toLowerCase()
            }

            return true
        })



    return (
        <div className='container max-w-screen-xl mx-auto my-20 py-4 px-4 sm:py-3'>
            {loading && <Loading />}
            <div>
                <div>
                    <h2 className='text-5xl font-bold text-prairie-sand-900  my-5'>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes` : "All Recipes"}</h2>
                </div>
            </div>
            <RecipeFilter
                searchRecipe={searchRecipe}
                setSearchRecipe={setSearchRecipe}
                recipeDifficulty={recipeDifficulty}
                setRecipeDifficulty={setRecipeDifficulty}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                recipes={recipes}
                category={category}
            />
            <Cuisine
                recipes={recipes}
                selectedCuisine={selectedCuisine}
                setSelectedCuisine={setSelectedCuisine} />
            <div className='z-20'>
                <section>
                    <div className='py-4 px-2 sm:py-0'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
                            {filteredRecipes.length > 0 ? (
                                filteredRecipes.map((recipe, index) => (
                                    <Recipe key={index} recipe={recipe} />
                                ))
                            ) : <p>No Recipes Found</p>}
                        </div>
                    </div>
                </section>
                <div className='my-4'>
                    <Tags recipes={recipes} />
                </div>
            </div>

            <NavigateToTop />
        </div>
    )
}

export default Recipes