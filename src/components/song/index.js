import React from 'react'
import { styled } from 'styled-components';

import GridButton from './GridButton';
import useSounds from 'hooks/useSounds';

function Home() {
  const { buttonList } = useSounds();

  return (
    <Wrapper>
      <Grid>
        {buttonList.map(({ soundPlay, isPlayed, id, handleSampleChange }, index) => {
          return <GridButton key={index} soundPlay={soundPlay} isPlayed={isPlayed} id={id} handleSampleChange={handleSampleChange}/>
        })}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 10px;
  width: 400px;
  height: 400px;
  margin: auto;
  border: 1px solid;
`;

export default Home