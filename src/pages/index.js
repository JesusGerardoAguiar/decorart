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
import OurProcess from "../components/OurProcess"
import HistoryIcon from "../../content/assets/icons/historia.svg"
import TestimonyIcon from "../../content/assets/icons/testimoni.svg"
import ContactIcon from "../../content/assets/icons/contact.svg"

import Esquinero from "../../content/assets/img/esquinero.jpg"
import Butaca from "../../content/assets/img/butaca.jpg"
import Comedor from "../../content/assets/img/comedor.jpg"

import Fundas from "../../content/assets/img/funda.jpg"
import Banquetas from "../../content/assets/img/banquetas.jpg"
import Almohadones from "../../content/assets/img/almohadones.jpg"

import Sofas from "../../content/assets/img/sofa.jpg"
import Sofacama from "../../content/assets/img/sofacama.jpg"
import Respaldos from "../../content/assets/img/respaldos.jpg"

import IconoUno from '../../content/assets/icons/iconoProd1.svg';
import Icono2 from '../../content/assets/icons/iconoProd2.svg';
import Icono3 from '../../content/assets/icons/iconoProd3.svg';

import Icono4 from '../../content/assets/icons/iconoProd4.svg';
import Icono5 from '../../content/assets/icons/iconoProd5.svg';
import Icono6 from '../../content/assets/icons/iconoProd6.svg';

import Icono7 from '../../content/assets/icons/iconoProd7.svg';
import Icono8 from '../../content/assets/icons/iconoProd8.svg';
import Icono9 from '../../content/assets/icons/iconoProd9.svg';

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

const products1 = [
  { prodImg: Butaca, text: "Butacas", icon: IconoUno },
  { prodImg: Esquinero, text: "Esquineros", icon: Icono2 },
  { prodImg: Comedor, text: "Juego de Comedor", icon: Icono3 },
]
const products2 = [
  { prodImg: Fundas, text: "Fundas", icon: Icono4 },
  { prodImg: Banquetas, text: "Banquetas", icon: Icono5 },
  { prodImg: Almohadones, text: "Almohadones", icon: Icono7 },
]

const products3 = [
  { prodImg: Sofas, text: "Sofas", icon: Icono8 },
  { prodImg: Sofacama, text: "Sofacama", icon:  Icono6},
  { prodImg: Respaldos, text: "Respaldos", icon: Icono9 },
]

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
          <ProductSection
            products1={products1}
            products2={products2}
            products3={products3}
          />
        </div>
        <div id="process">
          <OurProcess />
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
          <SectionHeader title="Contacto" hasIcon={true} icon={ContactIcon} />
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
