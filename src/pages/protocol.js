import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const ProtocolPage = () => (
  <Layout>
    <SEO title="Evaluating summaries" keywords={['summarisation', 'evaluation', 'ground-truth']} />
    <h1>On the evaluation of video keyframe summaries using user ground truth</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Given the great interest in creating keyframe summaries from video, it is surprising how little has been done to formalise their evaluation and comparison. User studies are often carried out to demonstrate that a proposed method generates a more appealing summary than one or two rival methods. But larger comparison studies cannot feasibly use such user surveys. Here we propose a discrimination capacity measure as a formal way to quantify the improvement over the uniform baseline, assuming that one or more ground truth summaries are available. Using the VSUMM video collection, we examine 10 video feature types, including CNN and SURF, and 6 methods for matching frames from two summaries. Our results indicate that a simple frame representation through hue histograms suffices for the purposes of comparing keyframe summaries. We subsequently propose a formal protocol for comparing summaries when ground truth is available.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <Image name='protocolEvaluationApproaches' fluid/>
	    <p><b>Fig. 1</b>   Evaluation approaches for keyframe video summaries. The box indicates the approach giving rise to the proposed protocol.</p>
    </div>
    <hr />
    <h3>Evaluation protocol</h3>
    <div>
	    <p>The F-measure is used to calculate the similarity between keyframe summaries using the number of matches. The F-measure is used to define a discrimination capacity:</p>
	    <p style={{textAlign: 'center'}}><i>c<sub>U</sub></i>(<i>K</i>, <i>U</i>, <i>GT</i>) = <i>F</i>(<i>K</i>, <i>GT</i>) - <i>F</i>(<i>U</i>, <i>GT</i>)</p>
	    <p>where <i>K</i> is a keyframe summary, GT a ground-truth summary, and U the baseline uniform summary of the same cardinality as <i>K</i>. When a set of ground-truths, <i>G</i> = &#123;<i>K<sub>g1</sub></i>,...,<i>K<sub>gL</sub></i>&#125;, from <i>L</i> users is available, <i>C<sub>U</sub></i> is calculated as the average <i>c<sub>U</sub></i>:</p>
	    <p style={{textAlign: 'center'}}><em>C<sub>U</sub></em> = <div class="frac">
                            <span>1</span>
                            <span class="symbol">/</span>
                            <span class="bottom"><em>L</em></span>

	    </div> <span style={{fontSize: 26}}>&#931;</span>((<em>F</em>(<em>K</em>, <em>K<sub>gi</sub></em>) - <em>F</em>(<em>U</em><sub>|<em>K</em>|</sub>, <em>K<sub>gi</sub></em>))</p>
    </div>
    <hr/>
    <div>
	    <p><b>Table 1</b>  An example of the calculation of <i>C<sub>U</sub></i> for a keyframe summary of VSUMM video #22, generated by the VSUMM1 keyframe selection method, using an H-histogram with 16 bins as the feature space, the Hungarian Matching method, Manhattan distance, and matching threshold 0.5. The F-measure values are shown in the table , and their contribution to the average, <i>C<sub></sub></i>, in the bottom row. The values for user #2 are illustrated in <a href='#discrimination'>Figure 2</a>.</p>
	    <table>
		    <tr>
			    <td class='right-border'>User #</td><td>1</td><td>2</td><td>3</td><td>4</td><td class='right-border'>5</td><td><i>C<sub>U</sub></i></td>
		    </tr>
		    <tr>
			    <td class='right-border'><i>F</i>(VSUMM, user)</td><td>0.5000</td><td>0.7500</td><td>0.6667</td><td>0.2857</td><td class='right-border'>0.4444</td>
		    </tr>
		    <tr>
			    <td class='right-border'><i>F</i>(<i>U<sub>4</sub></i>, user)</td><td>0.5000</td><td>0.2500</td><td>0.2222</td><td>0.2857</td><td class='right-border'>0.4444</td><td></td>
		    </tr>
		    <tr>
			    <td class='right-border'>Term</td><td>0</td><td>0.5000</td><td>0.4444</td><td>0</td><td class='right-border'>0</td><td>0.1889</td>
		    </tr>
	    </table>
	    <Image name='protocolDiscriminationCapacity' fluid/>
	    <p><a name='discrimination'><b>Fig. 2</b>  An example of calculating <i>c<sub>U</sub></i> for a keyframe summary of VSUMM video #22, generated by the VSUMM1 method, using an H-histogram with 16 bins as the feature space, the Hungarian Matching method, Manhattan distance and matching threshold 0.5. <i>c<sub>U</sub></i> is the difference between the F-measure for matching the candidate summary to User #2 (ground-truth #2) and the F-measure matching a uniform summary of the same cardinality as VSUMM (4 in this case) and User #2.</a></p>
    </div>
    <hr/>
    <h3>Distance measure</h3>
    <div>
	    <div style={{display:'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuThreshEuclidean' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(a) Euclidean distance</p>
		    </div>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuThreshManhattan' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(b) Manhattan distance</p>
		    </div>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuThreshSURF' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(c) SURF feature distance</p>
		    </div>
	    </div>
	    <p><b>Fig. 3</b>  Discrimination capacity <i>C<sub>U</sub></i> as a function of the threshold for three types of distances used. Each of plots (a) and (b) contains 300 line graphs (10 feature spaces, 6 matching methods, 5 summarisation methods). Plot (c) contains 30 lines (SURF space, 6 matching methods, 5 summarisation methods. Each line is the average across 50 VSUMM videos and 5 users.</p>
    </div>
    <hr/>
    <h3>Feature space</h3>
    <div>
	    <Image name='protocolCuFeatures' fluid/>
	    <p><b>Fig. 4</b> Discrimination capacity <i>C<sub>U</sub></i> as a function of the threshold (Manhattan distance) with the 11 feature spaces. RGB_9blocks, HSV_9blocks and OHT_9blocks are the mean and standard deviation of each colour channel in the spaces RGB, HSV and Ohta, respectively, with the image divided into a 3-by-3 grid. CHR_9blocks is the moments of Chrominance components. H&lt;<i>x</i>&gt;_&lt;<i>y</i>&gt;blocks is the H-histogram with <i>x</i> bins, with the image split into <i>y</i> blocks. CNN is the last fully connected layer of a pre-trained CNN, and SURF is the SURF features extracted that could match relevant points between two images.</p>
    </div>
    <hr/>
    <h3>Matching methods</h3>
    <div>
	    <div style={{display:'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuMatchingEuclidean' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(a) Euclidean distance</p>
		    </div>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuMatchingManhattan' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(b) Manhattan distance</p>
		    </div>
		    <div style={{flexGrow: '1', flexBasis: '30%'}}>
			    <Image name='protocolCuMatchingSURF' fluid/>
			    <p style={{textAlign: 'center', paddingTop: 8}}>(c) SURF feature distance</p>
		    </div>
	    </div>
	    <p><b>Fig. 5</b>  Visualisation of <i>C<sub>U</sub></i> for the six matching methods.</p>
    </div>
    <hr/>
    <h3>Examples</h3>
    <div>
	    <div style={{paddingBottom: 50}}>
		    <Image name='protocolSummaryDT' fluid/>
		    <p style={{textAlign:'center'}}>(a) DT summary: 2 matches</p>
		    <Image name='protocolSummaryU4' fluid/>
		    <p style={{textAlign:'center'}}>(b) Uniform summary <i>U<sub>4</sub></i>: 1 match</p>
		    <p><b>Fig. 6</b>  Proposed protocol for VSUMM video #22, Delaunay Triangulation (DT) summarisation method, user #3 as a single ground truth.</p>
	    </div>
	    <div style={{paddingBottom: 50}}>
		    <Image name='protocolSummaryOV' fluid/>
		    <p style={{textAlign:'center'}}>(a) OV summary: 3 matches</p>
		    <Image name='protocolSummaryU5' fluid/>
		    <p style={{textAlign:'center'}}>(b) Uniform summary <i>U<sub>5</sub></i>: 1 match</p>
		    <p><b>Fig. 7</b>  Proposed protocol for VSUMM video #22, Open Video Project (OV) summarisation method, user #3 as a single ground truth.</p>
	    </div>
	    <div style={{paddingBottom: 50}}>
		    <Image name='protocolSummarySTIMO' fluid/>
		    <p style={{textAlign:'center'}}>(a) STIMO summary: 3 matches</p>
		    <Image name='protocolSummaryU7' fluid/>
		    <p style={{textAlign:'center'}}>(b) Uniform summary <i>U<sub>7</sub></i>: 1 match</p>
		    <p><b>Fig. 8</b>  Proposed protocol for VSUMM video #22, Still and Moving Video Storyboard (STIMO) summarisation method, user #3 as a single ground truth.</p>
	    </div>
	    <div style={{paddingBottom: 50}}>
		    <Image name='protocolSummaryVSUMM1' fluid/>
		    <p style={{textAlign:'center'}}>(a) VSUMM1 summary: 3 matches</p>
		    <Image name='protocolSummaryU4' fluid/>
		    <p style={{textAlign:'center'}}>(b) Uniform summary <i>U<sub>4</sub></i>: 1 match</p>
		    <p><b>Fig. 9</b>  Proposed protocol for VSUMM video #22, Video Summarization1 (VSUMM1) summarisation method, user #3 as a single ground truth.</p>
	    </div>
	    <div style={{paddingBottom: 50}}>
		    <Image name='protocolSummaryVSUMM2' fluid/>
		    <p style={{textAlign:'center'}}>(a) VSUMM2 summary: 3 matches</p>
		    <Image name='protocolSummaryU4' fluid/>
		    <p style={{textAlign:'center'}}>(b) Uniform summary <i>U<sub>4</sub></i>: 1 match</p>
		    <p><b>Fig. 10</b>  Proposed protocol for VSUMM video #22, Video Summarization2 (VSUMM2) summarisation method, user #3 as a single ground truth.</p>
	    </div>
    </div>
    <hr/>
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

export default ProtocolPage
