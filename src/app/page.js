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

function RecipesList() {
  return (
    <div className="recipes">
      <ul className="recipes__list">
        <li className="recipe card"></li>
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
        </Container>
      </Wrapper>
    </div>
  )
}
