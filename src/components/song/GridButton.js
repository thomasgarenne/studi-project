import React from 'react'
import { styled } from 'styled-components'

function gridButton({ isPlayed = false, soundPlay, id, handleSampleChange }) {
  return (
    <Wrapper $isPlayed={isPlayed} onClick={soundPlay}>
      <label htmlFor={id} onClick={(e)=>{e.stopPropagation()}}>🎵</label>
      <input type='file' id={id} onClick={(e)=>{e.stopPropagation()}} onChange={handleSampleChange}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border-radius: 5px;
    background: rgba(213, 236, 194,1);
    background: radial-gradient(circle, rgba(213, 236, 194, 1) 0%, rgba(152, 221, 202, 1) 100%);
    position: relative;
    overflow: hidden;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #e66465;
        background: radial-gradient(circle, rgba(255, 170, 167, 1) ${props => props.isPlayed ? "20%" : "0%"}, rgba(255, 230, 213, 1) 100%);
        opacity: ${props => props.$isPlayed ? "1" : "0"};
        transition: linear 0.25s;
    }
    &:hover::before {
        opacity: 1;
    }
    &:active::before {
        opacity: 1;
        background: radial-gradient(circle, rgba(255, 170, 167, 1) 30%, rgba(255, 230, 213, 1) 100%);
    }
    & input {
      display: none;
    }
    & label {
      position: absolute;
    }
`;

export default gridButton