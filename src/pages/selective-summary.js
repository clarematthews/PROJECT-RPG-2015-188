import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SelectiveSummaryPage = () => (
  <Layout>
    <SEO title="Selective summary" keywords={['selective', 'summarisation', 'egocentric', 'semantic']} />
    <h1>Selective keyframe summarisation for egocentric videos based on semantic concept search</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Large volumes of egocentric video data are being continually collected every day. While the standard video summarisation approach offers all-purpose summaries, here we propose a method for selective video summarisation. The user can query the video with an unlimited vocabulary of terms. The result is a time-tagged summary of keyframes related to the query concept. Our method uses a pre-trained Convolutional Neural Network (CNN) for the semantic search, and visualises the generated summary as a compass. Two commonly used datasets were chosen for the evaluation: UTEgo egocentric video and
EDUB lifelog.
    </div>
    <hr />
    <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '25px', height: '0' }}>
	    Video
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    Figures
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    Yousefi P. and Kuncheva L.I., Selective Keyframe Summarisation for Egocentric Videos Based on Semantic Concept Search. 3rd IEEE International Conference on Image Processing, Applications and Systems (IPAS 2018), 2018, Sophia Antipolis, France.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="https://research.bangor.ac.uk/portal/files/22033570/SelectiveVideoSummarisation.pdf">Paper</a>
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

export default SelectiveSummaryPage
