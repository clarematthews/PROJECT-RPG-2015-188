import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['summarisation', 'video', 'egocentric']} />
    <h1>Video summarisation</h1>
    <div style={{paddingBottom: '25px'}}>
	    <p>Video summaries aim to provide a set of frames that accurately represent the content of a video in a significantly condensed form. Applications arise in various disciplines, including security, entertainment, browsing, retrieval and lifelogging. Proposed algorithms and systems are often tailored to the specific domain. The complete pipeline for producing a video summary contains a number of different stages: 
		    <ul style={{paddingTop: '15px'}}>
			    <li><a href="#input"><b>Input</b></a>  The characteristics of the input videos themselves can vary widely. For example, entertainment videos are likely to have well-defined boundaries between shots, whereas videos from handheld devices are more likely to have gradual transitions between scenes.</li>
			    <li><a href="#data"><b>Data</b></a>  Frames within the video must be represented by some feature space, which can range from very simple colour descriptors to the much more complex, for example, convolutional neural networks.</li>
			    <li><a href="#processing"><b>Processing</b></a>  There then comes the task of generating the summary itself.</li>
			    <li><a href="#evaluation"><b>Evaluation</b></a>  Followed by the challenge of evaluating the quality of the summary.</li>
		    </ul>
	    </p>


	    <p>In this project we completed studies into each of these four stages, which are summarised together here.</p>
    </div>
    <hr />
    <div id="input" style={{paddingBottom: '25px'}}>
	    <h3>Input</h3>
	    <p>Our main area of interest is lifelogging, for applications such as health and behaviour monitoring. Therefore most of the studies included here have been developed using primarily egocentric videos; handheld devices capturing daily activities.</p>
	    <p>Egocentric videos present a particular challenge for summarisation. They tend to be of poorer quality than traditional videos, and have poorly defined boundaries between shots. The visual content of distinct shots may also be very similar.</p>
	    <p>The egocentric datasets used in the studies described here are:
	    <a style={{paddingLeft: '5px'}} href="http://vision.cs.utexas.edu/projects/egocentric_data/UT_Egocentric_Dataset.html">UT Ego,</a>
	    <a style={{paddingLeft: '5px'}} href="https://www.dropbox.com/s/py8xhalqxz15co3/EDUB%202015.zip?dl=0">EDUB,</a> and
	<a style={{paddingLeft: '5px'}} href="https://www.csee.umbc.edu/~hpirsiav/papers/ADLdataset/">Activities of Daily Living.</a></p>
    </div>
    <hr/>
    <div id="data" style={{paddingBottom: '25px'}}>
	    <h3>Data</h3>
	    <p>Video frames are described as n-dimensional vectors in some feature space. The choice of a feature space may be an integral element of a summarisation method, or the method may be independent of feature space. Considerations when selecting a feature space are the quality of the summary produced, and for some applications, the speed or memory requirements for processing.</p>
	    <p>In a <Link to='comparison'>comparison study</Link> we investigate the suitability of seven feature representations for the purpose of online video summarisation.</p>
    </div>
    <hr/>
    <div id="processing" style={{paddingBottom: '25px'}}>
	    <h3>Processing</h3>
	    <p>To produce keyframe summaries, processing takes place either offline or online.</p>
	    <div style={{paddingBottom: '15px'}}>
		    <h4>Offline summarisation</h4>
		    <p>Offline methods have access to the full set of frames before processing occurs, and can make numerous passes over the dataset. We propose the use of <Link to='nearest-neighbour'>edited nearest neighbour</Link> as an offline method for selecting keyframes. We also introduce a method for <Link to='selective-summary'>selective keyframe summarisation</Link>, where a user can query a video with an unlimited vocabulary of terms.</p>
	    </div>
	    <div>
		    <h4>Online summarisation</h4>
		    <p>Online methods must process frames as they are received, and do not have access to the full video prior ro processing. We propose a <Link to='classification'>classification for online summarisation methods</Link>, based on their descriptive and distinguishing properties, and compare nine existing methods that are presented in terms of the classification. The findings from this comparison are used to create an algorithm using <Link to='control-chart'>control-charts</Link> to identify shot boundaries in videos. The algorithm is further developed into a <Link to='budget'>budget-constrained online summarisation method</Link> for egocentric videos.</p>
	    </div>
    </div>
    <hr/>
    <div id="evaluation" style={{paddingBottom: '25px'}}>
	    <h3>Evaluation</h3>
	    <p>The evaluation of keyframe video summaries is a notoriously difficult problem, as there is rarely an objective “best” summary. A necessary element of evaluation is the comparison and matching of frames between summaries. We propose a <Link to='baseline'>method for matching the visual appearance of keyframes</Link>, and also review methods for matching frames between summaries in the formalism of <Link to='graph-matching'>graph theory.</Link></p>
	    <p>For evaluation of a summary itself, we propose a discrimination capacity measure as a <Link to='protocol'>formal way to quantify the improvement</Link> over a uniform baseline, assuming that one or more ground truth summaries are available. We also propose a <Link to='baseline'>new baseline model</Link> for creating a keyframe summary, called Closest-to-Centroid.</p>
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <hr/>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
  </Layout>
)

export default IndexPage
