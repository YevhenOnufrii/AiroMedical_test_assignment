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
  const deleteAllSelected = useRecipeStore(state => state.deleteAllSelected)

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

  const isVisibleBtnDeleteAll = () => {
    const totalSelected = renderList.reduce((acc, el) => (el.isSelected ? (acc += 1) : acc), 0)
    return totalSelected > 1
  }

  // select item[s]
  const handleClick = (event, prodID) => {
    event.preventDefault()
    selectItemToggle(prodID)
  }

  const handleDeleteAll = event => {
    event.preventDefault()
    event.stopPropagation()
    deleteAllSelected()
  }

  return (
    <div className="recipes">
      <h2 className="recipes__title">Right-click to select item or left-click for detailed view</h2>
      {isVisibleBtnDeleteAll() && (
        <button
          onClick={e => handleDeleteAll(e)}
          id="delete-btn"
          type="button"
          className="card--button button-delete delete-all"
        >
          DELETE ALL
        </button>
      )}
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
