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
  const recipesList = useRecipeStore(state => state.recipesList)

  return (
    <div className="recipes">
      <ul className="recipes__list">
        {recipesList.map(product => (
          <Link
            className="LINK"
            key={product.id}
            href={{ pathname: `${product.id}`, query: JSON.stringify(product) }}
          >
            <Recipe {...product} />
          </Link>
        ))}
        {/* <RecipeDetails /> */}
      </ul>
    </div>
  )
}

export default function App() {
  const getRecipesList = useRecipeStore(state => state.fetchRecipes)

  useEffect(() => {
    getRecipesList()
  }, [])

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
