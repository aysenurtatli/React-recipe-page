import HomePage from './pages/HomePage'
import RecipeDetails from './pages/RecipeDetails'
import Recipes from './pages/Recipes'
import Header from './parts/Header'
import { Routes, Route } from 'react-router'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/recipes/recipe/:id' element={<RecipeDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
