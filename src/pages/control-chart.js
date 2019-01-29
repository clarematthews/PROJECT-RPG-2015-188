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
	    Many existing methods for video summarisation are not suitable for online applications, where computational and memory constraints mean that feature extraction and frame selection must be simple and efficient. Our proposed method uses RGB moments to represent frames, and a control chart procedure to identify shots from which keyframes are then selected. The new method produces summaries of higher quality than two state-of-the-art online video summarisation methods identified as the best among nine such methods in our previous study. The summary quality is measured against an objective ideal for synthetic datasets, and compared to user-generated summaries of real videos.
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <div>
		    <hr style={{width: '50%', marginBottom: 0}}/>
		    <p style={{marginBottom: 0}}><b>Algorithm</b>: Online control chart method</p>
		    <hr style={{width: '50%'}}/>
		    <table style={{marginBottom: 0}}>
			    <tr class='unbordered'>
				    <td></td><td><b>Input</b>:</td><td>Data stream <em>X</em> = &#123;<em>x<sub>1</sub></em>,...,<em>x<sub>N</sub></em>&#125;, <em>x<sub>i</sub></em> &#8712; &#8477;<sup>L</sup>, minimum shot length <em>m</em>, initial buffer size <em>B</em>,threshold for keyframe similarity <em>θ</em>.</td>
			    </tr>
			    <tr class='unbordered'>
				    <td></td><td><b>Output</b>:</td><td>Selected set of keyframes <em>P</em> &#8834; <em>X</em>.</td>
			    </tr>
		    </table>
		    <table style={{marginBottom: 40}}>
			    <tr class='unbordered'>
				    <td>1</td><td colSpan="5">// Initialisation</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>2</td><td colSpan="5"><em>P</em> &#8592; &empty;</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>3</td><td colSpan="5"><em>J</em> &#8592; 1 // Shot number</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>4</td><td colSpan="5"><em>S<sub>j</sub></em> &#8592; &#123;<em>x<sub>1</sub></em>,...,<em>x<sub>B</sub></em>&#125; // First shot</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>5</td><td><b>for</b></td><td colSpan="4"><em>i</em> &larr; &#123;2,...,<em>B</em>&#125; <b>do</b></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>6</td><td></td><td colSpan="4"><em>d<sub>i</sub></em> &larr; <em>d</em>(<em>x<sub>i</sub></em>, <em>x<sub>i−1</sub></em>) // Euclidean distance</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>7</td><td colSpan="5">μ &larr; mean(<em>d<sub>2</sub></em>,...,<em>d<sub>B</sub></em>)</td> 
			    </tr> 
			    <tr class='unbordered'>
				    <td>8</td><td colSpan="5">σ &larr; std(<em>d<sub>2</sub></em>,...,<em>d<sub>B</sub></em>)</td> 
			    </tr> 
			    <tr class='unbordered'>
				    <td>9</td><td colSpan="5">// Process video frame-by-frame</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>10</td><td><b>for</b></td><td colSpan="4"><em>i</em> &larr; &#123;<em>B</em> + 1,...,<em>N</em>&#125; <b>do</b></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>11</td><td></td><td colSpan="4"><em>d<sub>i</sub></em> &larr; <em>d</em>(<em>x<sub>i</sub></em>, <em>x<sub>i−1</sub></em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>12</td><td></td><td><b>if</b></td><td colSpan="3"><em>d<sub>i</sub></em> &lt; μ + 3σ <b>then</b></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>13</td><td></td><td></td><td colSpan="3">// No new shot detected</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>14</td><td></td><td></td><td colSpan="3">[μ, σ] &larr; update μ & σ with <em>d<sub>i</sub></em></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>15</td><td></td><td></td><td colSpan="3"><em>S<sub>j</sub></em> &larr; <em>S<sub>j</sub></em> &cup; <em>X</em>(<em>i</em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>16</td><td></td><td><b>else</b></td><td colSpan="3"></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>17</td><td></td><td></td><td colSpan="3">// New shot detected</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>18</td><td></td><td></td><td><b>if</b></td><td colSpan="2">|<em>S<sub>j</sub></em> &gt; <em>m</em> <b>then</b></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>19</td><td></td><td></td><td></td><td colSpan="2">// Shot is sufficiently long</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>20</td><td></td><td></td><td></td><td colSpan="2"><em>p<sub>j</sub></em> &larr; selectkeyframe(<em>S<sub>j</sub></em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>21</td><td></td><td></td><td></td><td colSpan="2">δ &larr; keyframediff(<em>p<sub>j</sub></em>, <em>p<sub>j−1</sub></em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>22</td><td></td><td></td><td></td><td><b>if</b></td><td>δ &lt; θ <b>then</b></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>23</td><td></td><td></td><td></td><td></td><td>// Shots are too similar: merge</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>24</td><td></td><td></td><td></td><td></td><td><em>S<sub>j</sub></em> &larr; <em>S<sub>j−1</sub></em> &cup; <em>S<sub>j</sub></em></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>25</td><td></td><td></td><td></td><td></td><td>// Remove last keyframe from set</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>26</td><td></td><td></td><td></td><td></td><td><em>P</em> &larr; <em>P</em>(1: end - 1)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>27</td><td></td><td></td><td></td><td></td><td><em>p<sub>j</sub></em> &larr; selectkeyframe(<em>S<sub>j</sub></em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>28</td><td></td><td></td><td></td><td colSpan="2"><em>P</em> &larr; <em>P</em> &cup; <em>p<sub>j</sub></em></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>29</td><td></td><td></td><td></td><td colSpan="2"><em>j</em> &larr; <em>j</em> - 1</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>30</td><td></td><td></td><td><b>else</b></td><td colSpan="2"></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>31</td><td></td><td></td><td></td><td colSpan="2">// Shot too short: ignore</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>32</td><td></td><td></td><td></td><td colSpan="2"><em>S<sub>j</sub></em> &larr; &empty;</td>
			    </tr>
		    </table>
		    <hr style={{width: '70%', marginBottom: 0}}/>
		    <table>
			    <tr class='unbordered'>
				    <td>33</td><td><b>Function</b> <em>f</em> = selectkeyframe(<em>Y</em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>34</td><td>// Select the keyframe closest to the mean</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>35</td><td><em>f</em> &larr; argmin<sub><em>x</em> &isin; <em>Y</em></sub> <em>d</em>(<em>x</em>, <span style={{textDecoration: 'overline'}}>Y</span>)</td>
			    </tr>
		    </table>
		    <hr style={{width: '70%', marginBottom: 0}}/>
		    <table>
			    <tr class='unbordered'>
				    <td>36</td><td><b>Function</b> δ = keyframediff(<em>f<sub>1</sub></em>, <em>f<sub>2</sub></em>)</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>37</td><td>// Compare 16-bin Hue histograms of frames <em>f<sub>1</sub></em> and <em>f<sub>2</sub></em></td>
			    </tr>
			    <tr class='unbordered'>
				    <td>38</td><td><em>h<sub>i</sub></em> = hist16(hue(<em>f<sub>i</sub></em>)) // Normalised 16-bin Hue histogram</td>
			    </tr>
			    <tr class='unbordered'>
				    <td>39</td><td>δ = ∑ |<em>h<sub>1</sub></em>(<em>j</em>) − <em>h<sub>2</sub></em>(<em>j</em>)|</td>
			    </tr>
		    </table>
	    </div>
    </div>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
	    <h3>Experiments</h3>
	    <p>We compare the performance of the control chart algorithm and two existing online summarisation methods, submodular convex optimistaion (SCX) [1] and merged Gaussian mixture models (MGMM) [2], on seven synthetic data sets.</p>
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
		    <b>Fig. 1</b>  Synthetic data sets #1 - #5. Each point represents a frame in the video. The three clusters come in succession but the points within each cluster are generated independently from a standard normal distribution. The time tag is represented as the grey intensity. Earlier points are plotted with a lighter shade. The “ideal” selected sets are shown with red target markers. In addition to the two dimensions plotted, two noise dimensions are added (from the distribution <em>N</em>(0,0.5)). Data sets #6 and  #7 follow a similar structure but with more dimensions, six and eight, respectively.
	    </p>
    </div>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
	    <p>Using synthetic data allows an objective assessment of the summaries produced. We use three complementary measures of the quality of the summary of the synthetic data sets:</p>
	    <table>
		    <tr class='unbordered'>
			    <td style={{textAlign: 'right'}}>Cardinality :</td>
			    <td><em>K</em> = |<em>P</em>|</td>
		    </tr>
		    <tr class='unbordered'>
			    <td style={{textAlign: 'right'}}>Approximation error :</td>
			    <td><em>J</em> = &sum; <em>d</em>(<em>x<sub>i</sub></em>, <em><b>p</b><sub>i</sub></em><sup>*</sup>)</td>
		    </tr>
		    <tr class='unbordered'>
			    <td style={{textAlign: 'right'}}>Accuracy :</td>
			    <td><em>A</em> = 1-nn(<em>P</em>)</td>
		    </tr>
	    </table>
	    <p>where <em>X</em>=〈<em>x<sub>1</sub></em>,...,<em>x<sub>N</sub></em>〉is the sequence of video frames, <em>P</em> = &#123;<em>p<sub>1</sub>,</em>...,<em>p<sub>K</sub></em>&#125; is the selected set of keyframes, <em><b>p</b><sub>i</sub></em><sup>∗</sup> is the keyframe closest to frame <em>x<sub>i</sub></em>, <em>d</em> is the Euclidean distance, and 1-nn(<em>P</em>) is the resubstitution classification accuracy in classifying <em>X</em> using <em>P</em> as the reference set. A good summary, maximises <em>A</em> while minimising <em>J</em> and <em>K</em>.</p>
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <h3>Results</h3>
	    <p><b>Table 1</b>  Results of paired-sample t-tests comparing the accuracy (A) and approximation error (J) for the control chart (CC) method summaries and the summaries generated by the MGMM and SCX methods. The confidence interval for the difference is shown for significant results (at the 0.05 significance level). There is no significant difference between the accuracy values for the CC and SCX methods (i.e. the difference has a zero mean). All other tests find a significant difference. The confidence intervals for the mean differences are less than zero for <em>J</em>, implying that the error tends to be less for the CC method, and greater than zero for <em>A</em>, implying that the accuracy tends to be greater for the CC method.</p>
	    <table>
		    <tr>
			    <td>Method</td><td>Test</td><td>P-value</td><td>Confidence interval</td>
		    </tr>
		    <tr>
			    <td rowSpan="2">MGMM</td><td><em>A</em><sub>CC</sub> − <em>A</em><sub>MGMM</sub></td><td>1e-5</td><td>[0.02, 0.04]</td>
		    </tr>
		    <tr>
			    <td><em>J</em><sub>CC</sub> − <em>J</em><sub>MGMM</sub></td><td>6e-4</td><td>[-1.7, -0.4]</td>
		    </tr>
		    <tr>
			    <td rowSpan="2">SCX</td><td><em>A</em><sub>CC</sub> − <em>A</em><sub>SCX</sub></td><td>0.7</td><td>-</td>
		    </tr>
		    <tr>
			    <td><em>J</em><sub>CC</sub> − <em>J</em><sub>SCX</sub></td><td>3e-23</td><td>[-4.0, -2.7]</td>
		    </tr>
	    </table>
    </div>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
	    <p>The methods are tested on 50 real videos from the VSUMM collection. The VSUMM collection includes a database of five user-selected summaries for each video. These summaries are used as a ground-truth, to compare method-generated summaries against.</p>
	    <Image name="controlChartScatterVSUMM" fluid/>
	    <p><b>Fig. 2</b>  Number of keyframes (K) and F-measure averaged over five user ground-truths, for summaries of the 50 VSUMM videos. Filled, grey circles show the results for all three methods, with the points for the named method highlighted in black.</p>
    </div>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
	    <Image name="controlChartVSUMM47CC" fluid/>
	    <p><b>Fig. 3</b>  Comparison of VSUMM video #47 summaries from user #1 and the CC method. The matches have been calculated using the 16-bin histogram method with threshold 0.5.</p>
    </div>
    <hr/>
    <div>
	    <ol class="smallFont">
		    <li>
			    Elhamifar E., Kaluza M.C.D.P.: Online summarization via submodular and convex optimization. In: IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2017), 1818–1826 (2017)
		    </li>
		    <li>
			    Ou S.H., Lee C.H., Somayazulu V.S., Chen Y.K., Chien S.Y.:On-line multi-view video summarization for wireless video sensor network. IEEE Journal of Selected Topics in Signal Processing, vol. 9 (1), 165–179 (2015)
		    </li>
	    </ol>
    </div>
      <hr/>
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
