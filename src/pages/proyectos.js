import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import Modal from "../components/Modal"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Medium.ttf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
  @font-face {
    font-family: DinRegular;
    src: url(${require("../../content/assets/fonts/DIN-Regular.ttf")});
  }
`

const Proyectos = props => {
  return (
    <Layout location={props.location}>
      <GlobalStyles />
      <MainDiv>
        <h1>Proyectos</h1>
        <RowProductsDiv>
          {/* {productsByIdentifier.map(product => (
            <ProdCircle
              backgroundImg={product.frontmatter.Image}
              onClick={() => {
                setOpen(true)
                setProduct(product.frontmatter)
                return
              }}
            >
              <div style={{ display: "none" }} id="ProdCircle">
                <p>Ver más</p>
              </div>
            </ProdCircle>
          ))} */}
        </RowProductsDiv>
      </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-family: "MonteserratR";
    color: #aa5c3b;
    text-transform: uppercase;
  }
`

const RowProductsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 1rem;

  div {
    margin: 1rem;
  }
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
    #ProdCircle {
      cursor: pointer;
      background-color: rgb(170, 92, 59, 0.5);
      justify-content: center;
      align-items: center;
      border-radius: 190px;
      display: flex !important;
      flex-direction: column;
      width: 100%;
      height: -webkit-fill-available;
      margin 0px!important;
      p {
        font-family: MonteserratR;
        color: white;
        font-size: 25px;
        margin-bottom: 0px;
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export default Proyectos

// export const pageQuery = graphql`
//   query BlogPostBySlug {
//     allMdx {
//       nodes {
//         frontmatter {
//           proyectImg
//         }
//       }
//     }
//   }
// `