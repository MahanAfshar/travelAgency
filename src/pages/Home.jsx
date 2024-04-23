import Header from "../components/Header"
import Hero from "../components/Hero"
import styled from "styled-components"

const Main = styled.main`
  padding: 1rem;
  background-color: var(--background);
`;

const Home = () => {
  return (
    <>
      <Header />
      <Main className="container">
        <Hero />
      </Main>
    </>
  )
}

export default Home