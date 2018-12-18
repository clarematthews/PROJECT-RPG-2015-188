import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BaselinePage = () => (
  <Layout>
    <SEO title="Comparing keyframe summaries of egocentric videos" keywords={['summarisation', 'egocentric', 'comparison']} />
    <h1>Comparing keyframe summaries of egocentric videos: Closest-to-centroid baseline</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Evaluation of keyframe video summaries is a notoriously difficult problem. So far, there is no consensus on guidelines, protocols, benchmarks and baseline models. This study contributes in three ways: (1) We propose a new baseline model for creating a keyframe summary, called Closest-to-Centroid, and show that it is a better contestant compared to the two most popular baselines: uniform sampling and choosing the mid-event frame. (2) We also propose a method for matching the visual appearance of keyframes, suitable for comparing summaries of egocentric videos and lifelogging photostreams. (3) We examine 24 image feature spaces (different descriptors) including colour, texture, shape, motion and a feature space extracted by a pretrained convolutional neural network (CNN). Our results using the four egocentric videos in the UTE database favour low-level shape and colour feature spaces for use with CC.
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <hr />
    <div>
	    Figures.
    </div>
    <hr />
    <h3>Reference</h3>
    Kuncheva L.I., Yousefi P. and Almeida J., Comparing Keyframe Summaries of Egocentric Videos: Closest-to-Centroid Baseline. Proceedings of The 7th International Conference on Image Processing Theory, Tools and Applications (IPTA 2017), 2017, Montreal, Canada.
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/lkpyjaIPTA17.pdf">Paper</a>
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

export default BaselinePage
