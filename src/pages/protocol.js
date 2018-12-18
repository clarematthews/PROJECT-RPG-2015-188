import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProtocolPage = () => (
  <Layout>
    <SEO title="Evaluating summaries" keywords={['summarisation', 'evaluation', 'ground-truth']} />
    <h1>On the evaluation of video keyframe summaries using user ground truth</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Given the great interest in creating keyframe summaries from video, it is surprising how little has been done to formalise their evaluation and comparison. User studies are often carried out to demonstrate that a proposed method generates a more appealing summary than one or two rival methods. But larger comparison studies cannot feasibly use such user surveys. Here we propose a discrimination capacity measure as a formal way to quantify the improvement over the uniform baseline, assuming that one or more ground truth summaries are available. Using the VSUMM video collection, we examine 10 video feature types, including CNN and SURF, and 6 methods for matching frames from two summaries. Our results indicate that a simple frame representation through hue histograms suffices for the purposes of comparing keyframe summaries. We subsequently propose a formal protocol for comparing summaries when ground truth is available.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    Figures.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    Kuncheva L.I., Gunn I.A.D. and Yousefi P., On the Evaluation of Video Keyframe Summaries using User Ground Truth. arXiv:1712.06899, 2017.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/lkpyigArXiv17.pdf">Paper</a>
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

export default ProtocolPage
