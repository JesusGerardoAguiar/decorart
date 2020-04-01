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
import SectionComponent from "../components/SectionComponent"
import ProductSection from "../components/ProductSection"
import SectionHeader from "../components/SectionHeader"
import Testimonies from "../components/Testimonies"
import Contact from "../components/EmailContainer"
import Prod1 from "../../content/assets/img/prod1.jpg"
import Prod2 from "../../content/assets/img/prod2.jpg"
import Prod3 from "../../content/assets/img/prod3.jpg"

import HistoryIcon from "../../content/assets/icons/historia.svg"
import TestimonyIcon from "../../content/assets/icons/testimoni.svg"
import ContactIcon from "../../content/assets/icons/contact.svg"

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

const historyTexts = [
  "Un agradable ambiente, se aprecia el paisaje y el arte, hay risas y diversión. Experiencias que nos hacen sentir vivos. Nos imaginamos un cambio del rol del adulto mayor en nuestra sociedad. Nuestra inspiración es dignificar la vida.",
  "Buscamos cuidar a nuestros residentes y apoyar a sus familias para que se sientan queridos, valorados, respetados e integrados a nuestra sociedad.",
  "Nuestro equipo de trabajo reúne las capacidades humanas y técnicas necesarias para asegurar nuestra excelencia, brindando experiencias únicas de bienestar y comodidad.",
  "Nuestras opciones de servicios generales y de estimulación sensorial permiten adecuar cada estadía a las necesidades específicas de cada uno de nuestros residentes, asegurando una experiencia única y plena.",
]

const products = [Prod1, Prod2, Prod3]

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
        <div id="History">
          <SectionComponent
            arrayTexts={historyTexts}
            title="Historia"
            hasIcon={true}
            icon={HistoryIcon}
          />
        </div>
        <div id="products">
          <ProductSection products={products} />
        </div>
        <div id="Testimonies">
          <SectionHeader
            title="Testimonios"
            hasIcon={true}
            icon={TestimonyIcon}
          />
          <Testimonies />
        </div>
        <div id="Contact">
          <SectionHeader title="Contacto" hasIcon={true}  icon={ContactIcon} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Contact />
          </div>
        </div>
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
