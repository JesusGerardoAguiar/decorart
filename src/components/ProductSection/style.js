import styled from "styled-components"

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
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transition: 1s;
    div {
      background-color: rgb(170, 92, 59, 0.5);
      justify-content: center;
      align-items: center;
      border-radius: 190px;
      display: flex !important;
      width: 100%;
      height: -webkit-fill-available;
    }
  }
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
