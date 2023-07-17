import Recipe from '@/app/components/Recipe'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRecipeStore } from '../../../store'
import './RecipesList.scss'

export default function RecipesList() {
  const getRecipes = useRecipeStore(state => state.getRecipes)
  const recipesList = useRecipeStore(state => state.recipesList)
  const getRenderList = useRecipeStore(state => state.getRenderList)
  const renderList = useRecipeStore(state => state.renderList)
  const selectItemToggle = useRecipeStore(state => state.selectItemToggle)
  const pageNum = useRecipeStore(state => state.pageNum)

  // initial fetching data
  useEffect(() => {
    getRecipes()
  }, [])

  // get render list
  useEffect(() => {
    getRenderList()
  }, [recipesList])

  // fetch new data if recipes list is empty
  useEffect(() => {
    if (recipesList.length === 0 && pageNum !== 1) getRecipes()
  }, [recipesList])

  // select item[s]
  const handleClick = (event, prodID) => {
    event.preventDefault()
    selectItemToggle(prodID)
  }
  return (
    <div className="recipes">
      <h2 className="recipes__title">Right-click to select item or left-click for detailed view</h2>
      <ul className="recipes__list">
        {renderList.map(product => (
          <Link
            className="LINK"
            key={product.id}
            href={{ pathname: `${product.id}`, query: { data: JSON.stringify(product) } }}
            onContextMenu={e => handleClick(e, product.id)}
          >
            <Recipe {...product} />
          </Link>
        ))}
      </ul>
    </div>
  )
}
