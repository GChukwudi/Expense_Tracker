import React from 'react';
import styled from 'styled-components';


function Object() {

    const ObjectStyled = styled.div`
    height: 70vh;
    width: 70vw;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vw;
    margin-top: -35vh;
    background: linear-gradient(180deg,
                               #F56692 0%,
                               #F2994A 100%);
    filter: blur(400px);
`; 
  return (
    <ObjectStyled></ObjectStyled>
  );
}

export default Object;