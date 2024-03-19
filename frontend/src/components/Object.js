import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../utils/utils';


function Object() {
    const { width, height } = useWindowSize();

    console.log(width, height);

    const moveObject = keyframes`
        0% {
            transform: translate(0, 0%);
        }
        50% {
            transform: translate(${width/1.2}px, ${height/2}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

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
    animation: ${moveObject} 15s alternate linear infinite;
`; 
  return (
    <ObjectStyled></ObjectStyled>
  );
}

export default Object;