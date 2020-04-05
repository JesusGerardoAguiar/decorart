import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"

class ProductTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const identifier = pageContext.identifier;
    const products = data.allMdx.nodes;
    const productsByIdentifier = products.filter((product) => product.frontmatter.identifier === identifier);
    console.log(productsByIdentifier)
    return (
      <Layout location={this.props.location}>
        {productsByIdentifier.map((product) => <p>{product.frontmatter.title}</p>)}
      </Layout>
    )
  }
}

export default ProductTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    allMdx {
      nodes {
        frontmatter {
          identifier
          description
          Image
          title
        }
      }
    }
  }
`
