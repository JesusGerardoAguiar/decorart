const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productPost = path.resolve(`./src/templates/product-template.js`)
  return graphql(
    `
      {
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result)
    // Create blog posts pages.
    const products = result.data.allMdx.nodes

    products.forEach((product, index) => {
      createPage({
        path: `${product.frontmatter.identifier}`,
        component: productPost,
        context: {
          identifier: product.frontmatter.identifier,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `identifier`,
      node,
      value,
    })
  }
}
