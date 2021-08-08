import React from 'react';
import styled from 'styled-components';

function Viewer() {
  const images = [
    {
      img: '/images/viewers-marvel.png',
    },
    {
      img: '/images/viewers-pixar.png',
    },
    {
      img: '/images/favicon.svg',
    },
    {
      img: '/images/viewers-starwars.png',
    },
    {
      img: '/images/viewers-national.png',
    },
  ];

  return (
    <Container>
      {images.map((items) => (
        <Wrap>
          <img src={items.img} />
        </Wrap>
      ))}
    </Container>
  );
}

export default Viewer;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 23px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-style: solid;
  border-width: 2px;
  border-color: grey;
  border-radius: 10px;
  box- shadow: rgp(0 0 0 /69%) 0px 26px 30px -10px,
  rgp(0 0 0/ 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition :all 250ms cubic-bezier(0.1, 0.7, 1.0, 0.1);
  

  img {
    width: 40%;
    height: 80%;
    object-fit: cover;
    
  }
  &:hover{
    transform :scale(1.05);
    border-color: white;
    box-shadow: 10px 10px black;
    background-color: blue;
  }
`;
