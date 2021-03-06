import React from 'react';
import styled from 'styled-components';

const CardGeneration = ({text}) => {
  return(
    <Card >
      <Text>{text}</Text>
    </Card>
  )
}

const Card = styled.div`
  width: 200px;
  height: 160px;
  background-image: url("./img/blob.svg");
  background-size: 100%;
  background-position: center;
  background-repeat:no-repeat ;
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

export default CardGeneration;