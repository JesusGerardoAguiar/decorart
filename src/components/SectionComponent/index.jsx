import React from 'react';
import {
    MainDiv,
    TextDiv,
    TextContainer
} from './style';
import SectionHeader from '../SectionHeader';

const SectionComponent = ({ arrayTexts, title, hasIcon }) => {
    const renderText = () => {
      if(arrayTexts && arrayTexts.length!==0){
        return arrayTexts.map((text) => <p>{text}</p>)
      }
    }
    return (
        <MainDiv>
           <SectionHeader title={title} hasIcon={hasIcon} />
            <TextDiv>
              <TextContainer>
                {renderText()}
              </TextContainer>
            </TextDiv>
          </MainDiv>
    )
}

export default SectionComponent;