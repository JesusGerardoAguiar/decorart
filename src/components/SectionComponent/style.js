import styled from 'styled-components';

export const MainDiv = styled.div`
  flex-direction: column;
  display: flex;
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    font-family: DinRegular;
    line-height: 20px;
    font-size: 20px;
  }
`

export const TextContainer = styled.div`
  flex-direction: column;
  width: 50rem;
    text-align: justify;
    padding-left: 10rem;

    @media (max-width: 768px) {
      padding: 3rem;
      padding-top: 0px;
      text-align: center;
    }
`