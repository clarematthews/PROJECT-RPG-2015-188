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
	    <p><b>Table 1</b>  The main characteristics of the analysed feature spaces, and comparison of: 1- the average time of feature extraction for the sampled ADL video #8, and 2- the average Matthews correlation coefficient (MCC) for summaries of all 20 ADL videos. For the HSV histogram features, the number of bins used for each of the channels is H:32, S:4, V:2.</p>
	    <table class="centred separated">
		    <tr>
			    <td></td><td>RGB moments</td><td>CENTRIST</td><td>Color layout MPEG7</td><td>places205-AlexNet CNN</td><td>Gist</td><td>HSV histogram</td><td>VGG CNN</td>
		    </tr>
		    <tr>
			    <td><b>Frame size</b></td><td colSpan="7"></td>
		    </tr>
		    <tr>
			    <td>Resized</td><td></td><td></td><td></td><td></td><td>&#x2713;</td><td>&#x2713;</td><td></td>
		    </tr>
		    <tr>
			    <td>Original</td><td>&#x2713;</td><td>&#x2713;</td><td>&#x2713;</td><td>&#x2713;</td><td></td><td></td><td>&#x2713;</td>
		    </tr>
		    <tr>
			    <td><b>Type</b></td><td colSpan="7"></td>
		    </tr>
		    <tr>
			    <td>Colour</td><td>&#x2713;</td><td></td><td>&#x2713;</td><td></td><td></td><td>&#x2713;</td><td></td>
		    </tr>
		    <tr>
			    <td>Scene</td><td></td><td>&#x2713;</td><td></td><td></td><td>&#x2713;</td><td></td><td></td>
		    </tr>
		    <tr class="bordered">
			    <td>CNN</td><td></td><td></td><td></td><td>&#x2713;</td><td></td><td></td><td>&#x2713;</td>
		    </tr>
		    <tr>
			    <td>Time (sec)</td><td>50</td><td>160</td><td>519</td><td>494</td><td>233</td><td>30</td><td>2377</td>
		    </tr>
		    <tr>
			    <td>Dimensions</td><td>54</td><td>294</td><td>192</td><td>4096</td><td>512</td><td>256</td><td>4096</td>
		    </tr>
		    <tr>
			    <td>MCC value</td><td>0.68</td><td>0.63</td><td>0.52</td><td>0.46</td><td>0.45</td><td>0.44</td><td>0.43</td>
		    </tr>
	    </table>
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
    <p>
            Data:
            <a style={{paddingLeft: '5px'}} href="https://www.csee.umbc.edu/~hpirsiav/papers/ADLdataset/">Activities of Daily Living</a>
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
