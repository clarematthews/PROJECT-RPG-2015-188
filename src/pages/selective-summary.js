import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const SelectiveSummaryPage = () => (
  <Layout>
    <SEO title="Selective summary" keywords={['selective', 'summarisation', 'egocentric', 'semantic']} />
    <h1>Selective keyframe summarisation for egocentric videos based on semantic concept search</h1>
    <div style={{paddingBottom: '25px', paddingTop: '25px'}}>
	    Large volumes of egocentric video data are being continually collected every day. While the standard video summarisation approach offers all-purpose summaries, here we propose a method for selective video summarisation. The user can query the video with an unlimited vocabulary of terms. The result is a time-tagged summary of keyframes related to the query concept. Our method uses a pre-trained Convolutional Neural Network (CNN) for the semantic search, and visualises the generated summary as a compass. Two commonly used datasets were chosen for the evaluation: UTEgo egocentric video and
EDUB lifelog.
    </div>
    <hr />
    <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: '25px', height: '0' }}>
	    Video
    </div>
    <hr />
    <div style={{paddingBottom: '25px'}}>
	    <div>
                    <Image name='selectiveMethod' fluid />
                    <p><b>Fig. 1</b>  Diagram of the proposed method for selective egocentric video summarisation.</p>
            </div>
            <hr/>
	    <div>
                    <Image name='selectiveSearch' fluid />
                    <p><b>Fig. 2</b>  Illustration of the semantic search process using a frame from UT Ego video P02 and query ‘automobile’.</p>
            </div>
            <hr/>
	    <div style={{display: 'flex', justifyContent: 'center'}}>
		    <div style={{marginRight: '16px'}}>
			    <Image name='selectiveFP' fixed />
			    <p>(a) False positive</p>
		    </div>
		    <div>
			    <Image name='selectiveFN' fixed />
			    <p>(b) False negative</p>
		    </div>
	    </div>
		    <p><b>Fig. 3</b>  Frames from egocentric videos UT Ego P02 and P01 mislabelled by the semantic labelling algorithm. (a): false positive for ‘television’, and (b): false negative for ‘food’.</p> 
            <hr/>
	    <div>
                    <Image name='selectivePhone' fluid />
                    <p><b>Fig. 4</b>  An example of a compass summary of the system’s output for video P01 from the UT Ego database for query ‘phone’. Black lines represent frames where the query concept is found. Shaded segments represent identified events. The outer images show the proposed summary.</p>
            </div>
            <hr/>
    </div>
    <hr />
    <div>
	    <p><b>Table 1</b>  Results of the concept search algorithm for different user queries per video (in %).</p>
	    <table>
		    <tr>
			    <td>Dataset</td><td>Name</td><td>Precision</td><td>Recall</td><td>F-measure</td><td>Concepts</td>
		    </tr>
		    <tr>
			    <td rowSpan="4">UT Ego</td><td>P01</td><td>92.2</td><td>49.2</td><td>60.4</td><td>food, car, phone, computer, shoe</td>
		    </tr>
		    <tr>
			    <td>P02</td><td>80.4</td><td>26.2</td><td>36.6</td><td>food, car, glass, book, television</td>
		    </tr>
		    <tr>
			    <td>P03</td><td>88.7</td><td>37.5</td><td>49.5</td><td>food, car, phone, grocery, refrigerator, washbasin</td>
		    </tr>
		    <tr>
			    <td>P04</td><td>100</td><td>20</td><td>31.7</td><td>food, laptop, book</td>
		    </tr>
		    <tr>
			    <td rowSpan="8">EDUB</td><td>Subject 1-1</td><td>88.5</td><td>34.5</td><td>39.5</td><td>food, car, phone, building</td>
		    </tr>
		    <tr>
			    <td>Subject 1-2</td><td>80.4</td><td>54.1</td><td>61.6</td><td>food, car, mobile, beer, coffee, glass, cup, sign</td>
		    </tr>
		    <tr>
			    <td>Subject 2-1</td><td>100</td><td>55.5</td><td>67.8</td><td>phone, computer, light, grocery</td>
		    </tr>
		    <tr>
			    <td>Subject 2-2</td><td>83.2</td><td>37</td><td>47.8</td><td>food, phone, glass, laptop, light</td>
		    </tr>
		    <tr>
			    <td>Subject 3-1</td><td>87.75</td><td>40.5</td><td>46.5</td><td>phone, laptop, book, train</td>
		    </tr>
		    <tr>
			    <td>Subject 3-2</td><td>99.5</td><td>46</td><td>58</td><td>food, phone, computer, desk</td>
		    </tr>
		    <tr>
			    <td>Subject 4-1</td><td>100</td><td>33.3</td><td>48.7</td><td>computer, desk, building</td>
		    </tr>
		    <tr>
			    <td>Subject 4-2</td><td>94.7</td><td>24.7</td><td>44</td><td>car, computer, train</td>
		    </tr>
	    </table>
    </div>
    <hr/>
    <div>
	    <p><b>Table 2</b>  Results of the Selective Summary process for different user queries per video (in %).</p>
	    <table>
		    <tr>
			    <td></td><td></td><td colSpan="3">Selective Summary without Concept Search algorithm</td><td colSpan="3">Selective Summary method</td>
		    </tr>
		    <tr>
			    <td>Dataset</td><td>Name</td><td>Precision</td><td>Recall</td><td>F-measure</td><td>Precision</td><td>Recall</td><td>F-measure</td>
		    </tr>
		    <tr>
			    <td rowSpan="4">UT Ego</td><td>P01</td><td>96.6</td><td>87.6</td><td>91.4</td><td>70</td><td>88.4</td><td>75.4</td>
		    </tr>
		    <tr>
			    <td>P02</td><td>78.2</td><td>100</td><td>87.4</td><td>72.6</td><td>78.4</td><td>70.8</td>
		    </tr>
		    <tr>
			    <td>P03</td><td>95.8</td><td>100</td><td>97.7</td><td>86.2</td><td>90.3</td><td>86.8</td>
		    </tr>
		    <tr>
			    <td>P04</td><td>83.3</td><td>100</td><td>89</td><td>85.7</td><td>100</td><td>91</td>
		    </tr>
		    <tr>
			    <td rowSpan="8">EDUB</td><td>Subject 1-1</td><td>85</td><td>91.75</td><td>87.5</td><td>80</td><td>79.25</td><td>70</td>
		    </tr>
		    <tr>
			    <td>Subject 1-2</td><td>81.8</td><td>93.8</td><td>84.63</td><td>54.5</td><td>72.9</td><td>58.4</td>
		    </tr>
		    <tr>
			    <td>Subject 2-1</td><td>75</td><td>100</td><td>83.5</td><td>68.3</td><td>81.3</td><td>61.8</td>
		    </tr>
		    <tr>
			    <td>Subject 2-2</td><td>93.4</td><td>100</td><td>96</td><td>70</td><td>90</td><td>72.8</td>
		    </tr>
		    <tr>
			    <td>Subject 3-1</td><td>92.5</td><td>93.8</td><td>92</td><td>80</td><td>80</td><td>70.8</td>
		    </tr>
		    <tr>
			    <td>Subject 3-2</td><td>74.3</td><td>100</td><td>82.5</td><td>71.8</td><td>87.5</td><td>71.8</td>
		    </tr>
		    <tr>
			    <td>Subject 4-1</td><td>100</td><td>90.3</td><td>94.3</td><td>100</td><td>73.7</td><td>83.3</td>
		    </tr>
		    <tr>
			    <td>Subject 4-2</td><td>75</td><td>100</td><td>80</td><td>48.7</td><td>100</td><td>57.7</td>
		    </tr>
	    </table>
    </div>
    <hr/>
    <div>
	    <Image name='selectiveGT' fluid />
	    <p style={{textAlign: 'center'}}>(a) Ground truth summary selected by user.</p>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', flexWrap: 'wrap'}}>
	    <div>
                    <Image name='selectiveFood' fixed />
		    <p style={{textAlign: 'center'}}>(b) Summary using semantic search.</p>
	    </div>
	    <div>
                    <Image name='selectiveFoodNoSemantic' fixed />
		    <p style={{textAlign: 'center'}}>(c) Summary without semantic search.</p>
	    </div>
    </div>
    <p><b>Fig. 5</b>  Keyframes of (a) the ground truth summary, and the proposed summaries for UT Ego video P03, with (b) and without (c) using semantic search. The query concept is ‘food’.</p>
    <hr/>
    <div style={{paddingBottom: '25px'}}>
    <h3>Reference</h3>
    Yousefi P. and Kuncheva L.I., Selective Keyframe Summarisation for Egocentric Videos Based on Semantic Concept Search. 3rd IEEE International Conference on Image Processing, Applications and Systems (IPAS 2018), 2018, Sophia Antipolis, France.
    </div>
    <hr />
    <div>
	    <h3>Links</h3>
	    <p>
	    <a style={{paddingLeft: '5px'}} href="https://research.bangor.ac.uk/portal/files/22033570/SelectiveVideoSummarisation.pdf">Paper</a>
    </p>
    <p>
	    Code:
	    <a style={{paddingLeft: '5px'}}>GitHub?</a>
    </p>
    <p>
            Data:
            <a style={{paddingLeft: '5px'}} href="http://vision.cs.utexas.edu/projects/egocentric_data/UT_Egocentric_Dataset.html">UT Ego</a>
            <a style={{paddingLeft: '5px'}} href="https://www.dropbox.com/s/py8xhalqxz15co3/EDUB%202015.zip?dl=0">EDUB</a>
    </p>
    </div>
    <hr />
    <div>
    <Link style={{paddingRight: '15px'}} to="/">Video summarisation</Link>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
    </div>
  </Layout>
)

export default SelectiveSummaryPage
