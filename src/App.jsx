import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import RecipeDetails from './pages/RecipeDetails'
import Recipes from './pages/Recipes'
import Header from './components/header/Header'

import { Routes, Route } from 'react-router'
function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/recipes/:category' element={<Recipes />}></Route>
        <Route path='/recipes/tag/:tag' element={<Recipes />}></Route>
        <Route path='/recipes/recipe/:id' element={<RecipeDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
