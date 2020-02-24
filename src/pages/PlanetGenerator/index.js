import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/loading.json";
import { Container, Planet, Info, Next, Box } from "./style";

function App() {
  const [planet, setPlanet] = useState({});
  const [animation, setAnimation] = useState({ animation: false });

  //componentDidMount
  useEffect(() => {
    generatePlanet();
  }, []);

  async function generatePlanet() {
    setAnimation(true);
    // Math.random() * 61, because the max length of Planets is 61
    const random = Math.random();
    const number = parseInt(random > 0 ? random * 61 : 1);
    const resp = await fetch(`${api}/planets/${number}/`);
    const response = await resp.json();
    setPlanet(response);
    setAnimation(false);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="App">
      <Container>
        {animation ? (
          <Lottie
            style={{
              alignSelf: "center",
              maxWidth: 150,
              maxHeight: 150
            }}
            options={defaultOptions}
          />
        ) : (
          <>
            <Box>
              <Planet>{planet.name}</Planet>
              <Info>Population: {planet.population}</Info>
              <Info>Climate: {planet.climate}</Info>
              <Info>Terrain: {planet.terrain}</Info>
              <Info>Featured in {planet.films.length} films</Info>
            </Box>
            <Next onClick={() => generatePlanet()}>NEXT</Next>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
