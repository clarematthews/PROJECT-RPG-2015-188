import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NearestNeighbourPage = () => (
  <Layout>
    <SEO title="Nearest-neighbour for selecting summary" keywords={['nearest-neighbour', 'summarisation', 'egocentric']} />
    <h1>Edited nearest neighbour for selecting keyframe summaries of egocentric videos</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    A keyframe summary of a video must be concise, comprehensive and diverse. Current video summarisation methods may not be able to enforce diversity of the summary if the events have highly similar visual content, as is the case of egocentric videos. We cast the problem of selecting a keyframe summary as a problem of prototype (instance) selection for the nearest neighbour classifier (1-nn). Assuming that the video is already segmented into events of interest (classes), and represented as a dataset in some feature space, we propose a Greedy Tabu Selector algorithm (GTS) which picks one frame to represent each class. An experiment with the UT (Egocentric) video database and seven feature representations illustrates the proposed keyframe summarisation method. GTS leads to improved match to the user ground truth compared to the closest-to-centroid baseline summarisation method. Best results were obtained with feature spaces obtained from a convolutional neural network (CNN).
    </div>
    <hr />
    <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '25px', height: '0' }}>
	    Video
    </div>
    <hr />
    <div style={{paddingBottom:'25px'}}>
	    Figures
    </div>
    <hr />
    <div style={{paddingBottom:'25px'}}>
    <h3>Reference</h3>
    Kuncheva L.I., Yousefi P. and Almeida J., Edited nearest neighbour for selecting keyframe summaries of egocentric videos. Journal of Visual Communication and Image Representation, 52, 2018, pp 118 - 130.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/lkpyjajvci18.pdf">Paper</a>
    </p>
    <p>
	    Code:
	    <a style={{paddingLeft: '5px'}}>GitHub?</a>
    </p>
    <p>
            Data:
            <a style={{paddingLeft: '5px'}} href="https://sites.google.com/site/vsummsite/download">VSUMM</a>
            <a style={{paddingLeft: '5px'}} href="https://gyglim.github.io/me/vsum/index.html#benchmark">SumMe</a>
            <a style={{paddingLeft: '5px'}} href="http://vision.cs.utexas.edu/projects/egocentric_data/UT_Egocentric_Dataset.html">UT Ego</a>
    </p>

    </div>
    <hr />
    <div>
    <Link style={{paddingRight: '15px'}} to="/">Video summarisation</Link>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
    </div>
  </Layout>
)

export default NearestNeighbourPage
