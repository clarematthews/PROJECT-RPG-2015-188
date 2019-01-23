import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

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
	    <h3>Method</h3>
	    <div style={{display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
			    <Image name='nnCartoonEvents' fluid/>
			    <p style={{textAlign: 'center'}}>(a) A day with four events</p>
		    </div>
		    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
			    <div>
				    <Image name='nnCartoonSummaryCentroid' fluid/>
				    <p style={{textAlign: 'center'}}>(b) Closest to class centroid summary (traditional).</p>
			    </div>
			    <div>
				    <Image name='nnCartoonSummaryNN' fluid/>
				    <p style={{textAlign: 'center'}}>(c) Edited nearest neighbour summary (proposed).</p>
			    </div>
		    </div>
	    </div>
	    <p><b>Fig. 1</b>  Two keyframe summaries of a series of events</p>
	    <hr/>
	    <div>
		    <Image name='nnSyntheticEx' fluid/>
		    <p><b>Fig. 2</b>  An example of 2D data labelled in three classes, shown here with different markers and colours. The migration of the prototypes in the original set is marked by lines. The final set of prototypes selected through the Greedy Tabu Selector algorithm are circled. The 1-nn error rate is 22.28% at the start, with instances closest to the class centroid, and 17.89% at the end, with the selected set of prototypes.</p>
	    </div>
	    <hr/>
	    <div>
		    <h3>Parameter values and feature space</h3>
		    <p>The feature spaces examined are: HSV histograms (HSV), RGB moments (RGB), local binary patterns (LBP), histogram oriented gradients (HOG), convolutional neural networks (CNN), CNN components preserving at least 90% of the data variability, according to PCA (CNN PCA (90%)), and semantic labelling (SEM).</p>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <p style={{textAlign: 'center'}}><i><b>t = c - 1</b></i></p>
				    <hr/>
				    <Image name='nnRGB1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <p style={{textAlign: 'center'}}><i><b>t = c - 2</b></i></p>
				    <hr/>
				    <Image name='nnRGB2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <p style={{textAlign: 'center'}}><i><b>t = c - 3</b></i></p>
				    <hr/>
				    <Image name='nnRGB3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHSV1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHSV2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHSV3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnLBP1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnLBP2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnLBP3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHOG1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHOG2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnHOG3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnCNN1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnCNN2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnCNN3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnPCA1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnPCA2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnPCA3' fluid/>
			    </div>

		    </div>
		    <div style={{display: 'flex', justifyContent: 'space-around', paddingBottom: '15px'}}>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnSEM1' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnSEM2' fluid/>
			    </div>
			    <div style={{flexBasis: '30%'}}>
				    <Image name='nnSEM3' fluid/>
			    </div>

		    </div>
		    <p><b>Fig. 3</b>  Improvement in F-value from closest-to-centroid (CC) to GTS summaries (&#916;F = F<sub>GTS</sub> - F<sub>CC</sub>) as a function of matching parameter &#952;<sub>H</sub>, for summaries of the UT Ego videos. Larger values of &#952;<sub>H</sub> lead to declaring more matches for the summary, resulting in higher F-values. Each plot contains the curves for all seven feature spaces plotted in grey. The curve for the feature space in the title of the plot is shown in black. If the black curve runs above the red 0-line, &#916;F is positive, and GTS improves on CC for the respective feature space.</p>
	    </div>
    </div>
    <hr />
	    <div>
		    <h3>Summaries</h3>
		    <Image name='nnVSUMMEvents' fluid/>
		    <p style={{textAlign: 'center'}}>(a) Uniformly spaced frames from four events.</p>
		    <Image name='nnVSUMMSummary' fluid/>
		    <p style={{textAlign: 'center'}}>(b) Summaries of the four events. Top row: CC; bottom row: GTS summary.</p>
		    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnVSUMMClassCC' fluid/>
				    <p style={{textAlign: 'center'}}>(c) Classification regions for the CC method: 1-nn error-rate 7.4%</p>
			    </div>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnVSUMMClassGTS' fluid/>
				    <p style={{textAlign: 'center'}}>(d) Classification regions for the GTS method: 1-nn error-rate 4.1%</p>
			    </div>
		    </div>
		    <p><b>Fig. 4</b>  Keyframe selection through Closest-to-Centroid (CC) and Greedy Tabu Search (GTS) for a part of video #21 from the VSUMM collection, RGB space.</p>
	    </div>
	    <hr/>
	    <div>
		    <Image name='nnSUMMEEvents' fluid/>
		    <p style={{textAlign: 'center'}}>(a) Uniformly spaced frames from four events.</p>
		    <Image name='nnSUMMESummary' fluid/>
		    <p style={{textAlign: 'center'}}>(b) Summaries of the four events. Top row: CC; bottom row: GTS summary.</p>
		    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnSUMMEClassCC' fluid/>
				    <p style={{textAlign: 'center'}}>(c) Classification regions for the CC method: 1-nn error-rate 9.3%</p>
			    </div>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnSUMMEClassGTS' fluid/>
				    <p style={{textAlign: 'center'}}>(d) Classification regions for the GTS method: 1-nn error-rate 5.5%</p>
			    </div>
		    </div>
		    <p><b>Fig. 5</b>  Keyframe selection through Closest-to-Centroid (CC) and Greedy Tabu Search (GTS) for a part of video “Jumps” from the SUMME collection, RGB space.</p>
	    </div>
	    <hr/>
	    <div>
		    <Image name='nnUTEEvents' fluid/>
		    <p style={{textAlign: 'center'}}>(a) Uniformly spaced frames from four events.</p>
		    <Image name='nnUTESummary' fluid/>
		    <p style={{textAlign: 'center'}}>(b) Summaries of the four events. Top row: CC; bottom row: GTS summary.</p>
		    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnUTEClassCC' fluid/>
				    <p style={{textAlign: 'center'}}>(c) Classification regions for the CC method: 1-nn error-rate 55.2%</p>
			    </div>
			    <div style={{flexGrow: '1', flexShrink: '0', flexBasis: '50%'}}>
				    <Image name='nnUTEClassGTS' fluid/>
				    <p style={{textAlign: 'center'}}>(d) Classification regions for the GTS method: 1-nn error-rate 40.1%</p>
			    </div>
		    </div>
		    <p><b>Fig. 6</b>  Keyframe selection through Closest-to-Centroid (CC) and Greedy Tabu Search (GTS) for a part of video  P01 from the UTE collection, RGB space.</p>
	    </div>
	    <hr/>
	    <div>
		    <div>
			    <Image name='nnP01SummaryGT' fluid/>
			    <p style={{textAlign: 'center'}}>(a) Ground truth (GT)</p>
		    </div>
		    <div>
			    <Image name='nnP01SummaryCC' fluid/>
			    <p style={{textAlign: 'center'}}>(b) Closet-to-Centroid (CC) summary. Matches with GT are highlighted.</p>
		    </div>
		    <div>
			    <Image name='nnP01SummaryGTS' fluid/>
			    <p style={{textAlign: 'center'}}>(c) Greedy Tabu Search (GTS) summary. Matches with GT are highlighted.</p>
		    </div>
		    <p><b>Fig. 7</b>  UT Ego video P01. Summaries: GT, CC and GTS with highlighted matches. &#916;F = 0.40 for &#952;<sub>H</sub> = 0.6, <i>t = c - 1</i>, space HOG</p>
	    </div>
	    <hr/>
	    <div>
		    <div>
			    <Image name='nnP02SummaryGT' fluid/>
			    <p style={{textAlign: 'center'}}>(a) Ground truth (GT)</p>
		    </div>
		    <div>
			    <Image name='nnP02SummaryCC' fluid/>
			    <p style={{textAlign: 'center'}}>(b) Closet-to-Centroid (CC) summary. Matches with GT are highlighted.</p>
		    </div>
		    <div>
			    <Image name='nnP02SummaryGTS' fluid/>
			    <p style={{textAlign: 'center'}}>(c) Greedy Tabu Search (GTS) summary. Matches with GT are highlighted.</p>
		    </div>
		    <p><b>Fig. 8</b>  UT Ego video P02. Summaries: GT, CC and GTS with highlighted matches. &#916;F = 0.33 for &#952;<sub>H</sub> = 0.5, <i>t = c - 3</i>, space RGB</p>
	    </div>
	    <hr/>
	    <div>
		    <div>
			    <Image name='nnP03SummaryGT' fluid/>
			    <p style={{textAlign: 'center'}}>(a) Ground truth (GT)</p>
		    </div>
		    <div>
			    <Image name='nnP03SummaryCC' fluid/>
			    <p style={{textAlign: 'center'}}>(b) Closet-to-Centroid (CC) summary. Matches with GT are highlighted.</p>
		    </div>
		    <div>
			    <Image name='nnP03SummaryGTS' fluid/>
			    <p style={{textAlign: 'center'}}>(c) Greedy Tabu Search (GTS) summary. Matches with GT are highlighted.</p>
		    </div>
		    <p><b>Fig. 9</b>  UT Ego video P03. Summaries: GT, CC and GTS with highlighted matches. &#916;F = 0.33 for &#952;<sub>H</sub> = 0.6, <i>t = c - 1</i>, space RGB</p>
	    </div>
	    <hr/>
	    <div>
		    <div>
			    <Image name='nnP04SummaryGT' fluid/>
			    <p style={{textAlign: 'center'}}>(a) Ground truth (GT)</p>
		    </div>
		    <div>
			    <Image name='nnP04SummaryCC' fluid/>
			    <p style={{textAlign: 'center'}}>(b) Closet-to-Centroid (CC) summary. Matches with GT are highlighted.</p>
		    </div>
		    <div>
			    <Image name='nnP04SummaryGTS' fluid/>
			    <p style={{textAlign: 'center'}}>(c) Greedy Tabu Search (GTS) summary. Matches with GT are highlighted.</p>
		    </div>
		    <p><b>Fig. 10</b>  UT Ego video P04. Summaries: GT, CC and GTS with highlighted matches. &#916;F = 0.20 for &#952;<sub>H</sub> = 0.2, <i>t = c - 1</i>, space CNN</p>
	    </div>
	    <hr/>
	    <div>
		    <h3>Analysis</h3>
		    <p><b>Table 1</b>  Correlation coefficients between F-values and the error rate E for the CNN feature space for the four videos and the three tabu parameter values. For an egocentric video split into 9–12 events, <i>t = c - 1</i> is a good choice.</p>
		    <table>
			    <tr>
				    <td></td><td><i>t = c - 1</i></td><td><i>t = c - 2</i></td><td><i>t = c - 3</i></td>
			    </tr>
			    <tr>
				    <td>P01</td><td>−0.2040</td><td>−0.2040</td><td>−0.1601</td>
			    </tr>
			    <tr>
				    <td>P02</td><td>−0.2261</td><td>−0.2261</td><td>0.1048</td>
			    </tr>
			    <tr>
				    <td>P03</td><td>−0.3246</td><td>−0.2010</td><td>−0.1448</td>
			    </tr>
			    <tr>
				    <td>P04</td><td>−0.6509</td><td>−0.1843</td><td>−0.3592</td>
			    </tr>
		    </table>
	    </div>
	    <hr/>
    <div style={{paddingBottom:'25px'}}>
	    <h3>Reference</h3>
	    <p>Kuncheva L.I., Yousefi P. and Almeida J., Edited nearest neighbour for selecting keyframe summaries of egocentric videos. Journal of Visual Communication and Image Representation, 52, 2018, pp 118 - 130.</p>
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
