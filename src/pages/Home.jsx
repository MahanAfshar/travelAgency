import Hero from "../components/Hero"
import styled from "styled-components"
import PopularPlaces from "../components/PopularPlaces";
import Benefits from "../components/Benefits";
import BestSellingTours from "../components/BestSellingTours";

const Main = styled.main`
  padding: 1rem;
  background-color: var(--background);
`;

const Home = () => {
  return (
    <Main className="container">
      <Hero />
      <PopularPlaces />
      <Benefits />
      <BestSellingTours />
    </Main>
  )
}

export default Home