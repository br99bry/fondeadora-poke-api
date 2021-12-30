import {connect} from 'react-redux';
import {setPokemones,setPokemonSeleccionado} from '../redux/actions/main';
import { useEffect, useState, useRef } from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import Link from "next/link";

const Generation = (props) => {
  const confirm = useRef();
  const { pokemonSeleccionado,setPokemones,setPokemonSeleccionado,generacionSelecionada,pokemones } = props;
  const [ poke, setPoke ] = useState(null);
  useEffect(() => {
    const getData = async() => {
      const main = await fetch(generacionSelecionada)
      .then((response)=>response.json())
      .then((data => {
        if(data.pokemon_species.length>=10){
          return data.pokemon_species.slice(0,20);
        }else{
          return data.slice(0,data.pokemon_species.length);
        }
      }))
      const pokeUrls = await Promise.all(
        main.map( item => {
          return fetch(item.url)
          .then((response => response.json()))
          .then((data) => data.varieties[0].pokemon.url)
        })
      )
      const pokemones = await Promise.all(
        pokeUrls.map( item => {
          return fetch(item)
          .then((response => response.json()))
          .then((data) => data)
        })
      )
      setPokemones(pokemones);
    }
    getData();
  },[]);

  const handleModal = () => {
    window.scroll(0,0);
    const body = document.querySelector('body');
    body.style.overflowY='hidden';
    confirm.current.style.display="flex";
  }

  const handleDesactiveModal = () => {
    window.scroll(0,0);
    const body = document.querySelector('body');
    body.style.overflowY='scroll';
    confirm.current.style.display="none";
  }

  return (
    <>
    <ModalWrap ref={confirm}>
      <Modal  >
        {
          poke!=null &&
          <Text>Elegiste a {poke.name}</Text>
        }
        <Button onClick={() => {
          setPokemonSeleccionado(poke);
          setPoke(poke);
          handleDesactiveModal();
        }
        } >Confirmar</Button>
        <Button onClick={() => {handleDesactiveModal()}} >Cancelar</Button>
      </Modal>
    </ModalWrap>
    <Wrapper>
      <Home>
        <Link href={`/`} >
        <a>
          <HomeIcon onClick={() => { 
            setPokemones([]) 
            setPokemonSeleccionado(null) 
          } } />
        </a>
        </Link>
        <Divide></Divide>
        {
          pokemonSeleccionado &&
          <TextSelected  size={pokemonSeleccionado.name.length} >
            Haz elegido a {pokemonSeleccionado.name} para tu aventura
          </TextSelected>
        }
      </Home>
      <MainPokemon>
        {
          pokemones.length>0 &&
          pokemones.map( item => (
            <Card key={item.id}  >
              <Text>Nombre: {item.name} </Text>
              <Text>Experiencia: {item.base_experience} </Text>
              <Text>Altura: {item.height} mts. </Text>
              <Text>Peso: {item.weight} kgs. </Text>
              <Text>Especie: {item.species.name} </Text>
              <Button onClick={() => {
                setPoke(item)
                handleModal()
                }} 
                center 
              >
                Elegir Pokémon
              </Button>
              <Img src={item.sprites.front_default} />
            </Card>
          ) )
        }
      </MainPokemon>
    </Wrapper>
    </>
  )
}

const ModalWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
  background: rgba(0,0,0,0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
`;

const Modal = styled.div`
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
  width: 300px;
  height: 200px;
  padding: 55px 20px;
  border-radius: 10px;
  @media (max-width: 650px){
    height: 300px;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid white;
  background-color: black;
  color: white;
  font-family: 'Roboto Mono', monospace;
  margin: ${props => props.center ? "15px 0px" : "15px"};
  cursor: pointer;
  &:hover{
    background-color: white;
    border-color: black;
    color: black;
  }
  &:active{
    transform: scale(0.9);
  }
`;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px 50px;
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
  @media (max-width: 650px){
    padding: 10px;
  }
`;

const Home = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 650px){
    flex-wrap: wrap ;
    justify-content: center;
  }
`;

const HomeIcon = styled(MdOutlineCatchingPokemon)`
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  transition: all 450ms ease;
  margin-right: 20px;
  &:hover{
    color: red;
    transform: scale(1.05);
  }
  @media (max-width: 650px){
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const MainPokemon = styled.div`
  border-top: 2px solid white;
  padding: 20px 0px;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  padding: 20px 20px 20px 20px;
  text-align: center;
  position: relative;
  margin: 30px;
  background-color: rgba(36, 56, 91, 1);
  transition: all 450ms ease-in;
  cursor: default;
  &:hover{
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  width: 100px;
  position: absolute;
  bottom: -40px;
  left: -40px;
`;

const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: white;
`;

const typing = keyframes`
  from {
    width: 0
  }
`;

const blink  = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TextSelected = styled.p`
  width: ${(props) => props.size ? `${props.size+32}ch` : "32ch" };
  white-space: nowrap;
  border-right: 4px solid white;
  margin-left: 30px;
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
  color: white;
  animation: ${typing} 2s steps(${props => props.size ? props.size+32 : 32}), ${blink} .5s infinite step-end alternate;
  overflow: hidden;
  @media (max-width: 1080px){
    font-size: 1rem;
  }
  @media (max-width: 650px){
    margin-left: 0px;
    font-size: 0.8rem;
  }
`;

const Divide = styled.div`
  display: inline-block;
  width: 2px;
  height: 30px;
  background: white;
  @media (max-width: 650px){
    display: none;
  }
`;


const mapStateToProps = state => ({
  pokemones: state.main.pokemones,
  pokemonSeleccionado: state.main.pokemonSeleccionado,
  generacionSelecionada: state.main.generacionSelecionada
});

const mapDispatchToProps = {
  setPokemones: setPokemones,
  setPokemonSeleccionado: setPokemonSeleccionado
};

export default connect(mapStateToProps, mapDispatchToProps)(Generation);