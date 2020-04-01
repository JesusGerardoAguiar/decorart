import React from "react"
import {
  HeaderSectionRow,
  IconRow,
  IconCircle,
  TitleContainer,
  Column,
} from "./style"

const SectionHeader = ({ title, hasIcon }) => {
  return (
    <HeaderSectionRow>
      {hasIcon ? (
        <IconRow>
          <IconCircle></IconCircle>
        </IconRow>
      ) : (
        <></>
      )}
      <TitleContainer>
        <Column style={{ width: "100%" }}>
          <h1>{title}</h1>
        </Column>
        <Column
          style={{ borderTop: "3px solid #AA5C3B", width: "100%" }}
        ></Column>
      </TitleContainer>
    </HeaderSectionRow>
  )
}

export default SectionHeader
