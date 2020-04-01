import React from 'react';
import {
    MainDiv,
    TextDiv,
    TextContainer
} from './style';
import SectionHeader from '../SectionHeader';

const SectionComponent = ({ arrayTexts }) => {
    return (
        <MainDiv>
           <SectionHeader title="Historia" />
            <TextDiv>
              <TextContainer>
                {arrayTexts.map((text) => <p>{text}</p>)}
              </TextContainer>
            </TextDiv>
          </MainDiv>
    )
}

export default SectionComponent;