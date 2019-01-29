import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const BaselinePage = () => (
  <Layout>
    <SEO title="Comparing summaries" keywords={['summarisation', 'egocentric', 'comparison']} />
    <h1>Comparing keyframe summaries of egocentric videos: Closest-to-centroid baseline</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Evaluation of keyframe video summaries is a notoriously difficult problem. So far, there is no consensus on guidelines, protocols, benchmarks and baseline models. This study contributes in three ways: (1) We propose a new baseline model for creating a keyframe summary, called Closest-to-Centroid, and show that it is a better contestant compared to the two most popular baselines: uniform sampling and choosing the mid-event frame. (2) We also propose a method for matching the visual appearance of keyframes, suitable for comparing summaries of egocentric videos and lifelogging photostreams. (3) We examine 24 image feature spaces (different descriptors) including colour, texture, shape, motion and a feature space extracted by a pretrained convolutional neural network (CNN). Our results using the four egocentric videos in the UT Ego database favour low-level shape and colour feature spaces for use with CC.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <h3>Feature space</h3>
	    <div>
		    <p><b>Table 1</b>  The main characteristics of the evaluated feature representations.</p>
		    <table>
			    <tr>
				    <td>Feature type</td><td>Visual information</td><td>Acronym</td><td>Size</td>
			    </tr>
			    <tr>
				    <td rowSpan="21" style={{borderRight: '1px solid #000;'}}>Low-level</td><td rowSpan="13">Colour</td><td>ACC</td><td>1024</td>
			    </tr>
			    <tr>
				    <td>CEDD</td><td>144</td>
			    </tr>
			    <tr>
				    <td>CLD</td><td>118</td>
			    </tr>
			    <tr>
				    <td>FCTH</td><td>192</td>
			    </tr>
			    <tr>
				    <td>FOH</td><td>576</td>
			    </tr>
			    <tr>
				    <td>GIST</td><td>960</td>
			    </tr>
			    <tr>
				    <td>HSV<sup>ch</sup></td><td>32</td>
			    </tr>
			    <tr>
				    <td>JCD</td><td>168</td>
			    </tr>
			    <tr>
				    <td>JCH</td><td>192</td>
			    </tr>
			    <tr>
				    <td>JH</td><td>576</td>
			    </tr>
			    <tr>
				    <td>RGB<sup>ch</sup></td><td>512</td>
			    </tr>
			    <tr>
				    <td>RGB<sup>cm</sup></td><td>54</td>
			    </tr>
			    <tr>
				    <td>SCD</td><td>64</td>
			    </tr>
			    <tr>
				    <td rowSpan="7">Texture</td><td>BF</td><td>8</td>
			    </tr>
			    <tr>
				    <td>EHD</td><td>80</td>
			    </tr>
			    <tr>
				    <td>Gabor</td><td>60</td>
			    </tr>
			    <tr>
				    <td>LBP</td><td>256</td>
			    </tr>
			    <tr>
				    <td>LBP<sup>riu2</sup></td><td>36</td>
			    </tr>
			    <tr>
				    <td>LLD</td><td>64</td>
			    </tr>
			    <tr>
				    <td>Tamura</td><td>18</td>
			    </tr>
			    <tr>
				    <td>Shape</td><td>PHOG</td><td>630</td>
			    </tr>
			    <tr>
				    <td>Mid-Level</td><td>Corners and edges</td><td>FV</td><td>4096</td>
			    </tr>
			    <tr>
				    <td>High-Level</td><td>People and objects</td><td>CNN</td><td>4096</td>
			    </tr>
			    <tr>
				    <td>Low-Level</td><td>Motion</td><td>HMP</td><td>6075</td>
			    </tr>
		    </table>
	    </div>
	    <hr/>
	    <div>
		    <h3>Matching procedure</h3>
		    <p>Two frames, <i>f<sub>1</sub></i> and <i>f<sub>2</sub></i>, are considered a visual match if they match on their objects/shapes (SURF) as well as colour (HSV). Matching of shape and colour is assessed by the values of <i>S</i><sub>SURF</sub> and <i>D</i><sub>H</sub>, respectively:</p>
		    <p style={{textAlign: 'center'}}><i>S</i><sub>SURF = </sub><div class="frac">
				    <span><i>m</i><sub>1</sub> + <i>m</i><sub>2</sub></span>
				    <span class="symbol">/</span>
				    <span class="bottom"><i>p</i><sub>1</sub> + <i>p</i><sub>2</sub></span>

		    </div></p>
		    <p style={{textAlign: 'center'}}>
			    <i>D</i><sub>H</sub> = &Sigma;|<i>b</i><sub>1,i</sub> - <i>b</i><sub>2,i</sub>|
		    </p>
		    <p>where <i>p</i><sub>1</sub> and <i>p</i><sub>2</sub> are the number of SURF points of interest in <i>f<sub>1</sub></i> and <i>f<sub>2</sub></i>, <i>m</i><sub>1</sub> is the number of matches found from <i>f<sub>1</sub></i> to <i>f<sub>2</sub></i>, <i>m</i><sub>2</sub> the number of matches from <i>f<sub>2</sub></i> to <i>f<sub>1</sub></i>, and <span style={{whiteSpace: 'nowrap'}}><i>B<sub>j</sub> = &#123;b<sub>j,1</sub>,...,b<sub>j,32</sub>&#125;</i></span>is the normalised histogram for <i>f<sub>j</sub></i>, <i>j = 1, 2</i>.</p>
		    <Image name='baselineMatches' fluid/>
		    <p><b>Fig. 1</b>  Illustration of the results from the matching procedure on the 10 events for UT Ego video P03, for uniform, mid-event and closest-to-centroid (CC) summaries. The CC method uses PHOG features. The matching frames are highlighted in red. The F-values are 0.1 for the uniform and mid-event summaries, and 0.5 for the CC summary.</p>

	    </div>
    </div>
    <hr />
    <div>
	    <h3>Results</h3>
	    <Image name='baselineFMeasure' fluid/>
	    <p><b>Fig. 2</b>  Averaged F-value comparing the proposed baseline method and the ground truth for the 24 feature spaces. The F-values for the traditional baseline methods, uniform and mid-event are also shown for comparison.</p>
    </div>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
	    <h3>Reference</h3>
	    <p>Kuncheva L.I., Yousefi P. and Almeida J., Comparing Keyframe Summaries of Egocentric Videos: Closest-to-Centroid Baseline. Proceedings of The 7th International Conference on Image Processing Theory, Tools and Applications (IPTA 2017), 2017, Montreal, Canada.</p>
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/lkpyjaIPTA17.pdf">Paper</a>
    </p>
    <p>
            Data:
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

export default BaselinePage
