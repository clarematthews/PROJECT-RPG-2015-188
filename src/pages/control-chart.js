import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const ControlChartPage = () => (
  <Layout>
    <SEO title="Online summarisation using control charts" keywords={['online', 'video', 'summarisation', 'control-chart']} />
    <h1>Using control charts for online video summarisation</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Many existing methods for video summarisation are not suitable for online applications, where computational and memory constraints mean that feature extraction and frame selection must be simple and efficient. Our proposed method uses RGB moments to represent frames, and a control-chart procedure to identify shots from which keyframes are then selected. The new method produces summaries ofhigher quality than two state-of-the-art online video summarisation methods identified as the best among nine such methods in our previous study. The summary quality is measured against an objective ideal for synthetic datasets, and compared to user-generated summaries of real videos.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <h3>Synthetic data</h3>
	    <div style={{display:'flex'}}>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '20%'}}>
			    <Image name="controlChartScatter1" fluid />
			    <p style={{textAlign: 'center'}}>#1</p>
		    </div>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '20%'}}>
			    <Image name="controlChartScatter2" fluid />
			    <p style={{textAlign: 'center'}}>#2</p>
		    </div>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '20%'}}>
			    <Image name="controlChartScatter3" fluid />
			    <p style={{textAlign: 'center'}}>#3</p>
		    </div>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '20%'}}>
			    <Image name="controlChartScatter4" fluid />
			    <p style={{textAlign: 'center'}}>#4</p>
		    </div>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '20%'}}>
			    <Image name="controlChartScatter5" fluid />
			    <p style={{textAlign: 'center'}}>#5</p>
		    </div>
	    </div>
	    <p>
		    <b>Fig. 1</b>  Synthetic data sets #1 - #5. The time tag is represented as the grey intensity. Earlier points are plotted with a lighter shade. The “ideal” selected sets are shown with red target markers.
	    </p>
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    <p>Matthews C.E., Yousefi P., and Kuncheva, L.I., Using Control Charts for Online Video Summarisation. Proceedings of The 1st International Joint Conference on Computer Vision and Pattern Recognition (CCVPR 2018), 2018, Wellington, New Zealand.</p>
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="https://research.bangor.ac.uk/portal/en/researchoutputs/using-control-charts-for-online-video-summarisation(3ac12245-73c9-47f5-b3d0-2ef59833ac82).html">Paper</a>
    </p>
    <p>
	    Code:
	    <a style={{paddingLeft: '5px'}}>GitHub?</a>
    </p>
    <p>
	    Data:
	    <a style={{paddingLeft: '5px'}} href="https://sites.google.com/site/vsummsite/download">VSUMM</a>
    </p>

    </div>
    <hr />
    <div>
    <Link style={{paddingRight: '15px'}} to="/">Video summarisation</Link>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
    </div>
  </Layout>
)

export default ControlChartPage
