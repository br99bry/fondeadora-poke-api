import {connect} from 'react-redux';
import {setPokemones,setPokemonSeleccionado} from '../redux/actions/main';
import { useEffect, useState, useRef } from 'react';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import styled from 'styled-components';
import Link from "next/link";

const Generation = (props) => {
  const confirm = useRef();
  const { pokemonSeleccionado,setPokemones,setPokemonSeleccionado,generacionSelecionada,pokemones } = props;
  const [ poke, setPoke ] = useState(null)
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
      console.log(main);
      const pokeUrls = await Promise.all(
        main.map( item => {
          return fetch(item.url)
          .then((response => response.json()))
          .then((data) => data.varieties[0].pokemon.url)
        })
      )
      console.log(pokeUrls);
      const pokemones = await Promise.all(
        pokeUrls.map( item => {
          return fetch(item)
          .then((response => response.json()))
          .then((data) => data)
        })
      )
      console.log(pokemones);
      setPokemones(pokemones);
    }
    getData();
  },[]);
  const handleModal = () => {
    const body = document.querySelector('body');
    body.style.overflow='hidden';
    console.log(confirm)
    confirm.current.style.display="flex";
  }

  const handleDesactiveModal = () => {
    const body = document.querySelector('body');
    body.style.overflowY='scroll';
    console.log(confirm)
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
          setPokemonSeleccionado(poke)
          handleDesactiveModal()}
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
          <TextSelected>Haz elegido a {pokemonSeleccionado.name} para tu aventura</TextSelected>
        }
      </Home>
      <MainPokemon>
        {
          pokemones.length>0 &&
          pokemones.map( item => (
            <Card key={item.id} onClick={() => {
              setPoke(item)
              handleModal()
            }} >
              <Text>Nombre: {item.name} </Text>
              <Text>Experiencia: {item.base_experience} </Text>
              <Text>Altura: {item.height} mts. </Text>
              <Text>Altura: {item.height} mts. </Text>
              <Text>Peso: {item.weight} kgs. </Text>
              <Text>Especie: {item.species.name} </Text>
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
  background: rgba(237,235,235,0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
`;

const Modal = styled.div`
  width: 300px;
  height: 200px;
  padding: 55px 20px;
  background: #1f286a;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;

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
`;

const Home = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
`;

const MainPokemon = styled.div`
  border-top: 2px solid white;
  padding: 20px 0px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  padding: 20px 20px 20px 50px;
  position: relative;
  margin: 30px;
  background-color: rgba(36, 56, 91, 1);
  cursor: pointer;
  transition: all 450ms ease-in;

  &:hover{
    transform: scale(1.05);
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

const TextSelected = styled.p`
  margin-left: 30px;
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
  color: white;
`;

const Divide = styled.div`
  display: inline-block;
  width: 2px;
  height: 30px;
  background: white;
`;

const ImgSelect = styled.img`
  width: 80px;
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