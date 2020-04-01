import styled from 'styled-components';

export const MainDiv = styled.div`
  flex-direction: column;
  display: flex;
`

export const RowProducts = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`

export const ProdCircle = styled.div`
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20rem;
  height: 20rem;
  border-radius: 190px;
`

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border: 3px solid #aa5c3b;
  font-family: MonteserratR;
  text-transform: uppercase;
  color: #aa5c3b;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`

export const ButtonDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 5rem;
`