'use client'
import Container from '@/app/components/Container'
import Wrapper from '@/app/components/Wrapper'
import Header from './components/Header'
import RecipesList from './components/RecipesList'

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
