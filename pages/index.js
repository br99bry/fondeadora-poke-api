import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const App = () => {
  const [img, setImg] = useState("");
  const [generaciones, setGeneraciones] = useState([]);
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
          <Title>Bienvenido a mundo Pokémon !!</Title>
          <SubTitle>Elije una generación de pokémon</SubTitle>
          <GenerationsWrap>
            {generaciones.map((item) => (
              <Link href={`generation/${item.url.charAt(item.url.length-2)}`} >
                <a>
                  <Card key={item.name}>
                    <Text>{item.name}</Text>
                  </Card>
                </a>
              </Link>
            ))}
          </GenerationsWrap>
        </WelcomeCard>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  /* background-color: #121f3d; */
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
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SubTitle = styled.h2`
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

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-image: url("./img/blob.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 450ms ease;
  &:hover {
    transform: scale(1.05);
    filter: invert(1);
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: white;
`;

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  setInfo: setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
