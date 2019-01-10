import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = (props) => (
	<StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
	visualisation: file(relativePath: { eq: "budget/visualisation.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	classification: file(relativePath: { eq: "classification/classification.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	spider: file(relativePath: { eq: "classification/spider.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveMethod: file(relativePath: { eq: "selective-summary/method.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveSearch: file(relativePath: { eq: "selective-summary/search.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveFP: file(relativePath: { eq: "selective-summary/false-positive.jpg" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
	selectiveFN: file(relativePath: { eq: "selective-summary/false-negative.jpg" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
	selectivePhone: file(relativePath: { eq: "selective-summary/phone-summary.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveGT: file(relativePath: { eq: "selective-summary/food-ground-truth.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveFoodNoSemantic: file(relativePath: { eq: "selective-summary/food-summary-no-semantic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	selectiveFood: file(relativePath: { eq: "selective-summary/food-summary.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
	    if (props.fluid) {
        return <Img fluid={data[props.name].childImageSharp.fluid} />
      } else {
        return <Img fixed={data[props.name].childImageSharp.fixed} />
      }
    }}
  />
)
export default Image
