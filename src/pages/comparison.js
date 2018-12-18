import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ComparisonPage = () => (
  <Layout>
    <SEO title="Feature representation" keywords={['online', 'summarisation', 'features', 'egocentric']} />
    <h1>Selecting feature representation for online summarisation of egocentric videos</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Visualising the content of a video through a keyframe summary has been a long-standing quest in computer vision. Using real egocentric videos, this paper explores the suitability of seven feature representations of the video frames for the purpose of online summarisation. Computational speed is an essential requirement in this set-up. We found that simple feature spaces such as HSV histograms and RGB moments are a good compromise between speed and representativeness in comparison with semantically richer but computationally more cumbersome spaces obtained through convolutional neural networks.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
Table of results
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    Yousefi P., Kuncheva L.I. and Matthews C.E., Selecting Feature Representation for Online Summarisation of Egocentric Videos. Proceedings of EG UK Computer Graphics \& Visual Computing (CGVC 2018), 2018, Swansea, UK.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/pylkcmEG18.pdf">Paper</a>
    </p>
    <p>
	    Code:
	    <a style={{paddingLeft: '5px'}}>GitHub?</a>
    </p>

    </div>
    <hr />
    <div>
    <Link style={{paddingRight: '15px'}} to="/">Video summarisation</Link>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
    </div>
  </Layout>
)

export default ComparisonPage
