import React from "react"
import { Link, graphql } from "gatsby"
import ImagenFondo1 from "../../content/assets/img/imagenFondo1.jpg"
import ImagenFondo2 from "../../content/assets/img/imagenFondo2.jpg"
import Carousel from "../components/Carousel"
import { CarouselProvider, Slide, Slider } from "pure-react-carousel"
import styled from "styled-components"
import Layout from "../components/layout"
import { createGlobalStyle } from "styled-components"
import DecoArtLogo from "../../content/assets/icons/decorart.png"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: MontserratL;
    src: url(${require("../../content/assets/fonts/Montserrat-Light.ttf")});
  }
  @font-face {
    font-family: MonteserratR;
    src: url(${require("../../content/assets/fonts/Montserrat-Regular.otf")});
  }
  @font-face {
    font-family: MonteserratB;
    src: url(${require("../../content/assets/fonts/Montserrat-Bold.otf")});
  }
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />

        <Carousel
          totalSlides={2}
          StyledCarousel={StyledCarousel}
          StyledSlider={StyledSlider}
          StyledSlide={StyledSlide}
        >
          <LogoContainer backgroundImg={ImagenFondo1}>
            <img
              src={DecoArtLogo}
              style={{ width: "20rem", marginBottom: "14rem" }}
            />
          </LogoContainer>
          <LogoContainer backgroundImg={ImagenFondo2}>
            <img
              src={DecoArtLogo}
              style={{ width: "20rem", marginBottom: "11rem" }}
            />
          </LogoContainer>
        </Carousel>
      </Layout>
    )
  }
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledCarousel = styled(CarouselProvider)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40rem !important;

  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 40rem;
  justify-content: flex-start;
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
`

export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }
  padding-bottom: 40rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
