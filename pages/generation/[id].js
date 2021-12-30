import {connect} from 'react-redux';
import {setInfo} from '../../redux/actions/main';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from "next/link";

const Generation = (props) => {
  const { query: { id } } = useRouter();
  const { pokeInfo, setInfo } = props;
  return (
    <>
    <h1>esta es la generacion {id} y el pokemon es {pokeInfo.name}</h1>
    <button onClick={ () => { setInfo("Skitle") } } >
      Cambiar el nombre de pokemon
    </button>
    <br />
    <Link href={`/`} >
      <a>
        ir al home
      </a>
    </Link>
    </>
  )
}

const mapStateToProps = state => ({
  pokeInfo: state.main
});

const mapDispatchToProps = {
  setInfo: setInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Generation);