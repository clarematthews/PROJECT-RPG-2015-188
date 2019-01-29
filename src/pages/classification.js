import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const ClassificationPage = () => (
  <Layout>
    <SEO title="Classification of online summarisation methods" keywords={['online', 'summarisation', 'classification']} />
    <h1>Classification and comparison of online video summarisation methods</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Many methods exist for generating keyframe summaries of videos. However, relatively few methods consider online summarisation, where memory constraints mean it is not practical to wait for the full video to be available for processing. We propose a classification (taxonomy) for online video summarisation methods based upon their descriptive and distinguishing properties such as feature space for frame representation, strategies for grouping time-contiguous frames,and techniques for selecting representative frames. Nine existing online methods are presented within the terms of ourtaxonomy,  and  subsequently  compared  by  testing  on  two synthetic data sets and a collection of short videos. We find that success of the methods is largely independent of techniques for grouping time-contiguous frames and for measuring similarity between frames. On the other hand, decisions about the number of keyframes and the selection mechanism may substantially affect the quality of the summary. Finally we remark on the difficulty in tuning the parameters of the methods “on-the-fly”, without knowledge of the video duration, dynamic or content.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <h3>Classification</h3>
	    <div>
		    <Image name='classification' fluid />
		    <p><a name="classification"><b>Fig. 1</b>  A classification of online video summarisation methods.</a></p>
	    </div>
	    <hr/>
	    <div>
		    <p><a name="methods"><b>Table 1</b>  Methods included in the comparisons in terms of our classification in <a href="#classification">Figure 1</a>.</a></p>
	    <div style={{display: 'flex'}}>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5, paddingTop: 34}}><b>Shot boundary detection (SBD)</b> [1]</td>
	</tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Colour histograms</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Linear independence</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Change-detection</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Start-shot</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Batch</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5}}><b>Zero-mean normalised cross-correlation (ZNCC)</b> [2]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Colour histograms</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Correlation</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Change-detection</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Mid-shot</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes or skim</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Shot</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 0}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5, paddingTop: 34}}><b>Diversity promotion (DIV)</b> [3]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>CNN</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Convex hull volume</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Clustering</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Mid-cluster</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Dynamic</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
		 <td>Number of frames</td><td><i>A priori</i> & <i>a posteriori</i></td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Keyframes</td>
         </tr>
 </table>
      </div>
	    <div style={{display: 'flex'}}>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5}}><b>Submodular convex optimisation (SCX)</b> [4]</td>
	</tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>CNN</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Euclidean distance</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Clustering</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Mid-cluster</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Batch</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5}}><b>Minimum sparse reconstruction (MSR)</b> [5]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Texture</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Orthogonal projection</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Clustering</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Conditional</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Keyframes</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 0}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5, paddingTop: 34}}><b>Gaussian mixture model (GMM)</b> [6]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Colour - MPEG-7</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Euclidean distance</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Gaussian mixture model</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Conditional</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Skim</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Keyframes</td>
         </tr>
 </table>
      </div>
	    <div style={{display: 'flex'}}>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5, paddingTop: 34}}><b>Histogram intersection</b> [7]</td>
	</tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Colour histograms</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Histogram intersection</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Change-detection</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Mid-shot & conditional</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Shot</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 10}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5}}><b>Merged Gaussian mmixture model (MGMM)</b> [8]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Any</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Statistical</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Gaussian mixture model</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Mid-cluster</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Dynamic</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Batch</td>
         </tr>
      </table>
	    <table border='0' style={{marginRight: 0}}>
		    <tr>
			    <td colSpan='2' style={{borderBottom: 0, paddingBottom: 5, paddingTop: 34}}><b>Sufficient content change</b> [9]</td> 
		    </tr>
         <tr style={{borderBottom: '3px solid black'}}>
		 <td>Property</td><td>Value</td>
	 </tr>
	 <tr>
	    <td>Feature representation</td><td>Any</td>
	 </tr>
	 <tr>
	    <td>Similarity</td><td>Any</td>
	 </tr>
	 <tr>
	    <td>Grouping strategy</td><td>Change-detection</td>
	 </tr>
	 <tr>
	    <td>Frame selection</td><td>Start-shot</td>
	 </tr>
	 <tr>
	    <td>Set management</td><td>Fixed</td>
	 </tr>
	 <tr>
	    <td>Summary form</td><td>Keyframes</td>
	 </tr>
	 <tr>
	    <td>Number of frames</td><td>As extracted</td>
	 </tr>
	 <tr>
	    <td>Running memory</td><td>Keyframes</td>
         </tr>
 </table>
      </div>
      </div>
      <hr/>
      <div>
	      <h3>Results</h3>
	      <Image name='spider' fluid />
	      <p><b>Fig. 2</b>  Average F-measure for each method in <a href="#methods">Table 1</a> compared to five user ground-truth summaries for  VSUMM video  #21. Method summaries are generated using HSV and RGB feature spaces. Summaries are matched using histograms of hue values for the selected frames.</p>
      </div>
      <hr/>
      <div>
	      <p><b>Table 2</b>  Average number of frames and F-measure for summaries generated by each method in <a href="#methods">Table 1</a> of the 50 VSUMM videos using RGB moments, and average F-measure with the features originally used with the method. The F-measures are also averaged across the five ground truth summaries for each video.</p>
	      <table>
		      <tr>
			      <td></td><td colSpan="2">RGB</td><td>Orig. features</td>
		      </tr>
		      <tr>
			      <td>Method</td><td>Median number of frames</td><td>Mean F-measure</td><td>Mean F-measure</td>
		      </tr>
		      <tr>
			      <td>SBD</td><td>10</td><td>0.52</td><td>0.40</td>
		      </tr>
		      <tr>
			      <td>ZNCC</td><td>1</td><td>0.18</td><td>0.17</td>
		      </tr>
		      <tr>
			      <td>DIV</td><td>15</td><td>0.39</td><td>0.20</td>
		      </tr>
		      <tr>
			      <td>SCX</td><td>13</td><td>0.54</td><td>0.54</td>
		      </tr>
		      <tr>
			      <td>MSR</td><td>2</td><td>0.23</td><td>0.35</td>
		      </tr>
		      <tr>
			      <td>GMM</td><td>0</td><td>0.03</td><td>0.12</td>
		      </tr>
		      <tr>
			      <td>HIST</td><td>4</td><td>0.38</td><td>0.39</td>
		      </tr>
		      <tr>
			      <td>MGMM</td><td>17</td><td>0.52</td><td>-</td>
		      </tr>
		      <tr>
			      <td>SCC</td><td>3</td><td>0.27</td><td>-</td>
		      </tr>
	      </table>
      </div>
      <hr/>
      <ol class="smallFont">
	      <li>
		      Abd-Almageed W.: Online, simultaneous shot boundary detection and key frame extraction for sports videos using rank tracing. In: IEEE 15th International Conference on Image Processing (ICIP 2008), 3200–3203 (2008)
	      </li>
	      <li>
		      Almeida J., Leite N.J., Torres R.d.S.: Online video  summarization on compressed domain. Journal of Visual Communication and Image Representation, vol. 24 (6), 729–738 (2013)
	      </li>
	      <li>
		      Anirudh R., Masroor A., Turaga P.: Diversity promoting onlinesampling for streaming video summarization. In: IEEE International Conference on Image Processing (ICIP 2016), 3329–3333 (2016)
	      </li>
	      <li>
		      Elhamifar E., Kaluza M.C.D.P.: Online summarization via submodular and convex optimization. In: IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2017), 1818–1826 (2017)
	      </li>
	      <li>
		      Mei S., Guan G., Wang Z., Wan S., He M., Feng D.D.:Video summarization via minimum sparse reconstruction. Pattern Recognition, vol. 48 (2), 522–533 (2015)
	      </li>
	      <li>
		      Ou S.H., Lee C.H., Somayazulu V.S., Chen Y.K., Chien S.Y.:On-line multi-view video summarization for wireless video sensor network. IEEE Journal of Selected Topics in Signal Processing, vol. 9 (1), 165–179 (2015)
	      </li>
	      <li>
		      Rasheed Z., Shah M.: Scene detection in hollywood movies and tv shows. In: Proceedings IEEE Computer Society Conference on Computer Vision and Pattern Recognition, vol. 2, 343–343 (2003)
	      </li>
	      <li>
		      Song M., Wang H.: Highly efficient incremental estimation of gaussian mixture models for online data stream clustering. In: SPIE 5803, Intelligent Computing: Theory and Applications III, vol. 5803, 174–184 (2005)
	      </li>
	      <li>
		      Truong B.T., Venkatesh S.: Video abstraction: A systematic review and classification. ACM Transactions on Multimedia Computing, Communications, and Applications, vol. 3(1), (2007)
	      </li>
      </ol>
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    <p>Matthews C.E., Kuncheva L.I. and Yousefi P., Classification and Comparison of On-Line Video Summarisation Methods. Accepted: Machine Vision and Applications.</p>
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="https://link.springer.com/article/10.1007/s00138-019-01007-x?wt_mc=Internal.Event.1.SEM.ArticleAuthorOnlineFirst&utm_source=ArticleAuthorOnlineFirst&utm_medium=email&utm_content=AA_en_06082018&ArticleAuthorOnlineFirst_20190121">Paper</a>
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

export default ClassificationPage
