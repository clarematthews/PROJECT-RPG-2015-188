import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ClassificationPage = () => (
  <Layout>
    <SEO title="Classification of online summarisation methods" keywords={['online', 'summarisation', 'classification']} />
    <h1>Classification and comparison of online video summarisation methods</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Many methods exist for generating keyframe summaries of videos. However, relatively few methods consider online summarisation, where memory constraints mean it is not practical to wait for the full video to be available for processing. We propose a classification (taxonomy) for online video summarisation methods based upon their descriptive and distinguishing properties such as feature space for frame representation, strategies for grouping time-contiguous frames,and techniques for selecting representative frames. Nine existing online methods are presented within the terms of ourtaxonomy,  and  subsequently  compared  by  testing  on  two synthetic data sets and a collection of short videos. We find that success of the methods is largely independent of techniques for grouping time-contiguous frames and for measuring similarity between frames. On the other hand, decisions about the number of keyframes and the selection mechanism may substantially affect the quality of the summary. Finally we remark on the difficulty in tuning the parameters of the methods “on-the-fly”, without knowledge of the video duration, dynamic or content.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	Classification diagram. Results.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    Matthews C.E., Kuncheva L.I. and Yousefi P., Classification and Comparison of On-Line Video Summarisation Methods. Submitted to Machine Vision and Applications.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="">Paper</a>
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

export default ClassificationPage
