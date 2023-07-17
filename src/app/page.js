'use client'
import Container from '@/components/Container'
import Recipe from '@/components/Recipe'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRecipeStore } from '../../store'

function Header() {
  return (
    <div className="header">
      <h1>
        AiroMedical <span>test assignment</span>
      </h1>
    </div>
  )
}

function RecipesList() {
  const getRecipes = useRecipeStore(state => state.getRecipes)
  const recipesList = useRecipeStore(state => state.recipesList)
  const getRenderList = useRecipeStore(state => state.getRenderList)
  const renderList = useRecipeStore(state => state.renderList)
  const selectItemToggle = useRecipeStore(state => state.selectItemToggle)

  console.log(recipesList, 'recipesList')
  console.log(renderList, 'renderList')

  useEffect(() => {
    getRecipes()
  }, [])

  useEffect(() => {
    getRenderList()
  }, [recipesList])

  const handleClick = (event, prodID) => {
    event.preventDefault()
    // const [target] = recipesList.filter(el => el.id === prodID)
    // target.isClicked = true
    selectItemToggle(prodID)
  }
  return (
    <div className="recipes">
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

export default function App() {
  return (
    <div>
      <Wrapper>
        <Container>
          <Header />
          <RecipesList />
        </Container>
      </Wrapper>
    </div>
  )
}
