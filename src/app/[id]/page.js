'use client'
import Recipe from '@/components/Recipe'
import { useRecipeStore } from '../../../store'

export default function RecipeDetails({ params }) {
  const getItem = useRecipeStore(state => state.getRecipe(params.id))

  console.log(getItem)
  return (
    <>
      <Recipe {...getItem} />
    </>
    // <li className="recipe__card card">
    //   <div className="card--img">
    //     <img src={image_url} />
    //   </div>
    //   <div className="card--text">
    //     <div className="card--title">{name}</div>
    //     <div className="card--sub">{tagline}</div>
    //   </div>
    //   <button type="button" className="card--button">
    //     View Recipe
    //   </button>
    // </li>
  )
}
