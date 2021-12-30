import { connect } from "react-redux";
import { setGeneraciones,setGeneracionSeleccionada } from "../redux/actions/main";
import { useEffect, useState } from "react";
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import CardGeneration from "../components/CardGeneration";

const App = (props) => {
  const [img, setImg] = useState("");
  const {generaciones, setGeneraciones, setGeneracionSeleccionada} = props;
  const handleClick = (url) => {
    setGeneracionSeleccionada(url);
  }
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((data) => setImg(data.sprites.front_default));

    fetch("https://pokeapi.co/api/v2/generation/")
      .then((response) => response.json())
      .then((data) => setGeneraciones(data.results));
  }, []);

  
  return (
    <>
    <Head>
      <title>Mundo Pokemon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Wrapper>
      <WelcomeCard>
        <PictureMain src={img} />
        <Title>
          Bienvenido a mundo Pokémon <MdOutlineCatchingPokemon/> 
        </Title>
        <SubTitle>Elije una generación de pokémon</SubTitle>
        <GenerationsWrap>
          {
          generaciones.length>0 &&
          generaciones.map((item) => (
            <Link key={item.name} href="generation" >
              <a onClick={ () => handleClick(item.url) }>
                <CardGeneration text={item.name} />
              </a>
            </Link>
          ))
          }
        </GenerationsWrap>
      </WelcomeCard>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  background-color: rgba(36, 56, 91, 1);
  opacity: 0.8;
  background-image: linear-gradient(
      30deg,
      #121f3d 12%,
      transparent 12.5%,
      transparent 87%,
      #121f3d 87.5%,
      #121f3d
    ),
    linear-gradient(
      150deg,
      #121f3d 12%,
      transparent 12.5%,
      transparent 87%,
      #121f3d 87.5%,
      #121f3d
    ),
    linear-gradient(
      30deg,
      #121f3d 12%,
      transparent 12.5%,
      transparent 87%,
      #121f3d 87.5%,
      #121f3d
    ),
    linear-gradient(
      150deg,
      #121f3d 12%,
      transparent 12.5%,
      transparent 87%,
      #121f3d 87.5%,
      #121f3d
    ),
    linear-gradient(
      60deg,
      #121f3d77 25%,
      transparent 25.5%,
      transparent 75%,
      #121f3d77 75%,
      #121f3d77
    ),
    linear-gradient(
      60deg,
      #121f3d77 25%,
      transparent 25.5%,
      transparent 75%,
      #121f3d77 75%,
      #121f3d77
    );
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeCard = styled.section`
  background-color: rgba(36, 56, 91, 1);
  width: 80%;
  padding: 50px;
  border-radius: 5px;
  position: relative;
`;

const PictureMain = styled.img`
  width: 140px;
  position: absolute;
  left: -50px;
  top: -50px;
`;

const Title = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2.5rem;
`;

const GenerationsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const mapStateToProps = (state) => ({
  generaciones: state.main.generaciones,
});

const mapDispatchToProps = {
  setGeneraciones: setGeneraciones,
  setGeneracionSeleccionada: setGeneracionSeleccionada
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
