'use client'
import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
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

function Recipe({ name, tagline, image_url }) {
  return (
    <li className="recipe__card card">
      <div className="card--img">
        <img src={image_url} />
      </div>
      <div className="card--text">
        <div className="card--title">{name}</div>
        <div className="card--sub">{tagline}</div>
      </div>
      <a href="#" className="card--button">
        View Recipe
      </a>
    </li>
  )
}

function RecipesList() {
  const recipesList = useRecipeStore(state => state.recipesList)

  console.log(recipesList)

  return (
    <div className="recipes">
      <ul className="recipes__list">
        {recipesList.map(el => (
          <Recipe key={el.id} {...el} />
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const getRecipesList = useRecipeStore(state => state.fetchRecipes)

  useEffect(() => {
    getRecipesList('https://api.punkapi.com/v2/beers?page=1')
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
