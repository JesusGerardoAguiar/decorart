import React from "react"
import {
  MainDiv,
  RowProducts,
  ProdCircle,
  Button,
  ButtonDiv,
  IconDiv,
} from "./style"
import { Link } from "gatsby"
import SectionHeader from "../SectionHeader"

const ProductSection = ({ products1, products2, products3 }) => {
  return (
    <MainDiv>
      <SectionHeader title="Productos" hasIcon={false} />
      <RowProducts>
        {products1.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
      <RowProducts>
        {products2.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
      <RowProducts>
        {products3.map(prod => (
          <ProdCircle backgroundImg={prod.prodImg}>
            <div style={{ display: "none" }} id="ProdCircle">
              <Link to={prod.link}>
                <IconDiv backgroundImg={prod.icon} />
                <p>{prod.text}</p>
              </Link>
            </div>
          </ProdCircle>
        ))}
      </RowProducts>
    </MainDiv>
  )
}

export default ProductSection
