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
	nnCartoonEvents: file(relativePath: { eq: "nearest-neighbour/cartoon-events.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnCartoonSummaryCentroid: file(relativePath: { eq: "nearest-neighbour/cartoon-summary-centroid.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnCartoonSummaryNN: file(relativePath: { eq: "nearest-neighbour/cartoon-summary-nn.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSyntheticEx: file(relativePath: { eq: "nearest-neighbour/synthetic-ex.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnVSUMMEvents: file(relativePath: { eq: "nearest-neighbour/vsumm-events.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnVSUMMSummary: file(relativePath: { eq: "nearest-neighbour/vsumm-summary.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnVSUMMClassCC: file(relativePath: { eq: "nearest-neighbour/vsumm-class-cc.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnVSUMMClassGTS: file(relativePath: { eq: "nearest-neighbour/vsumm-class-gts.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSUMMEEvents: file(relativePath: { eq: "nearest-neighbour/summe-events.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSUMMESummary: file(relativePath: { eq: "nearest-neighbour/summe-summary.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSUMMEClassCC: file(relativePath: { eq: "nearest-neighbour/summe-class-cc.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSUMMEClassGTS: file(relativePath: { eq: "nearest-neighbour/summe-class-gts.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnUTEEvents: file(relativePath: { eq: "nearest-neighbour/ute-events.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnUTESummary: file(relativePath: { eq: "nearest-neighbour/ute-summary.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnUTEClassCC: file(relativePath: { eq: "nearest-neighbour/ute-class-cc.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnUTEClassGTS: file(relativePath: { eq: "nearest-neighbour/ute-class-gts.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnRGB1: file(relativePath: { eq: "nearest-neighbour/rgb1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnRGB2: file(relativePath: { eq: "nearest-neighbour/rgb2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnRGB3: file(relativePath: { eq: "nearest-neighbour/rgb3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHSV1: file(relativePath: { eq: "nearest-neighbour/hsv1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHSV2: file(relativePath: { eq: "nearest-neighbour/hsv2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHSV3: file(relativePath: { eq: "nearest-neighbour/hsv3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnLBP1: file(relativePath: { eq: "nearest-neighbour/lbp1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnLBP2: file(relativePath: { eq: "nearest-neighbour/lbp2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnLBP3: file(relativePath: { eq: "nearest-neighbour/lbp3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHOG1: file(relativePath: { eq: "nearest-neighbour/hog1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHOG2: file(relativePath: { eq: "nearest-neighbour/hog2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnHOG3: file(relativePath: { eq: "nearest-neighbour/hog3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnCNN1: file(relativePath: { eq: "nearest-neighbour/cnn1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnCNN2: file(relativePath: { eq: "nearest-neighbour/cnn2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnCNN3: file(relativePath: { eq: "nearest-neighbour/cnn3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnPCA1: file(relativePath: { eq: "nearest-neighbour/pca1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnPCA2: file(relativePath: { eq: "nearest-neighbour/pca2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnPCA3: file(relativePath: { eq: "nearest-neighbour/pca3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSEM1: file(relativePath: { eq: "nearest-neighbour/sem1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSEM2: file(relativePath: { eq: "nearest-neighbour/sem2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnSEM3: file(relativePath: { eq: "nearest-neighbour/sem3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP01SummaryGT: file(relativePath: { eq: "nearest-neighbour/p01-summary-gt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP01SummaryCC: file(relativePath: { eq: "nearest-neighbour/p01-summary-cc.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP01SummaryGTS: file(relativePath: { eq: "nearest-neighbour/p01-summary-gts.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP02SummaryGT: file(relativePath: { eq: "nearest-neighbour/p02-summary-gt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP02SummaryCC: file(relativePath: { eq: "nearest-neighbour/p02-summary-cc.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP02SummaryGTS: file(relativePath: { eq: "nearest-neighbour/p02-summary-gts.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP03SummaryGT: file(relativePath: { eq: "nearest-neighbour/p03-summary-gt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP03SummaryCC: file(relativePath: { eq: "nearest-neighbour/p03-summary-cc.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP03SummaryGTS: file(relativePath: { eq: "nearest-neighbour/p03-summary-gts.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP04SummaryGT: file(relativePath: { eq: "nearest-neighbour/p04-summary-gt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP04SummaryCC: file(relativePath: { eq: "nearest-neighbour/p04-summary-cc.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	nnP04SummaryGTS: file(relativePath: { eq: "nearest-neighbour/p04-summary-gts.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	baselineMatches: file(relativePath: { eq: "baseline/matches.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	baselineFMeasure: file(relativePath: { eq: "baseline/f-measure.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolEvaluationApproaches: file(relativePath: { eq: "protocol/evaluation-approaches.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolDiscriminationCapacity: file(relativePath: { eq: "protocol/discrimination-capacity.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuThreshEuclidean: file(relativePath: { eq: "protocol/cu-thresh-euclidean.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuThreshManhattan: file(relativePath: { eq: "protocol/cu-thresh-manhattan.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuThreshSURF: file(relativePath: { eq: "protocol/cu-thresh-surf.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuMatchingEuclidean: file(relativePath: { eq: "protocol/cu-matching-euclidean.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuMatchingManhattan: file(relativePath: { eq: "protocol/cu-matching-manhattan.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuMatchingSURF: file(relativePath: { eq: "protocol/cu-matching-surf.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolCuFeatures: file(relativePath: { eq: "protocol/cu-features.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryDT: file(relativePath: { eq: "protocol/summary-dt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryOV: file(relativePath: { eq: "protocol/summary-ov.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummarySTIMO: file(relativePath: { eq: "protocol/summary-stimo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryVSUMM1: file(relativePath: { eq: "protocol/summary-vsumm1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryVSUMM2: file(relativePath: { eq: "protocol/summary-vsumm2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryU4: file(relativePath: { eq: "protocol/summary-u4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryU5: file(relativePath: { eq: "protocol/summary-u5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	protocolSummaryU7: file(relativePath: { eq: "protocol/summary-u7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV28Greedy3: file(relativePath: { eq: "graph-matching/match-v28-greedy3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV28Greedy5: file(relativePath: { eq: "graph-matching/match-v28-greedy5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV28Kannappan5: file(relativePath: { eq: "graph-matching/match-v28-kannappan5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV39Greedy5: file(relativePath: { eq: "graph-matching/match-v39-greedy5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV39Maximal5: file(relativePath: { eq: "graph-matching/match-v39-maximal5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV39Kannappan5: file(relativePath: { eq: "graph-matching/match-v39-kannappan5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV34Greedy5: file(relativePath: { eq: "graph-matching/match-v34-greedy5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV34Mahmoud5: file(relativePath: { eq: "graph-matching/match-v34-mahmoud5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
	graphMatchingV34Kannappan5: file(relativePath: { eq: "graph-matching/match-v34-kannappan5.jpg" }) {
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
