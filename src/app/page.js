import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'

function Header() {
  return (
    <div className="header">
      <h1>
        AiroMedical <span>test assignment</span>
      </h1>
    </div>
  )
}

function Recipe() {
  return (
    <li className="recipe__card card">
      <div className="card--img">
        <img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg?w=1155&h=1528" />
      </div>
      <div className="card--text">
        <div className="card--title">Recipe Title</div>
        <div className="card--sub">
          A short description of the recipe will go here. Lorem Ipsum dolor sit amet amet consecteur
          A short description of the recipe will go here. Lorem Ipsum dolor sit amet consecteur.
        </div>
        <a href="#" className="cta">
          View Recipe
        </a>
      </div>
    </li>
  )
}

function RecipesList() {
  return (
    <div className="recipes">
      <ul className="recipes__list">
        <Recipe />
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
