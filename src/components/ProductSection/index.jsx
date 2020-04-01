import React from "react"
import { MainDiv, RowProducts, ProdCircle, Button, ButtonDiv } from "./style"
import SectionHeader from "../SectionHeader"

const ProductSection = ({ products }) => {
  return (
    <MainDiv>
      <SectionHeader title="Productos" hasIcon={false} />
      <RowProducts>
        {products.map(prod => (
          <ProdCircle backgroundImg={prod} />
        ))}
      </RowProducts>
      <ButtonDiv>
        <Button>Ver Mas</Button>
      </ButtonDiv>
    </MainDiv>
  )
}

export default ProductSection
