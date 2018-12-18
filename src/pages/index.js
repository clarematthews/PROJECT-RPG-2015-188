import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['summarisation', 'video', 'egocentric']} />
    <h1>Video summarisation</h1>
    <div style={{paddingBottom: '25px'}}>
	    Brief intro to video summarisation / project...
    </div>
    <div style={{paddingBottom: '25px'}}>

	    <a style={{paddingRight: '15px'}} href="#input">Input</a>
	    &#x27f6;
	    <a style={{paddingLeft: '15px', paddingRight: '15px'}} href="#data">Data</a>
	    &#x27f6;
	    <a style={{paddingLeft: '15px', paddingRight: '15px'}} href="#processing">Processing</a>
	    &#x27f6;
	    <a style={{paddingLeft: '15px'}} href="#evaluation">Evaluation</a>

    </div>
    <hr />
    <div id="input" style={{paddingBottom: '25px'}}>
	    <h3>Input</h3>
	    Egocentric videos - motivations, challenges, datasets
    </div>
    <hr/>
    <div id="data" style={{paddingBottom: '25px'}}>
	    <h3>Data</h3>
	    Feature space.  <br/>
	    <Link to='comparison'>Comparison paper</Link>
    </div>
    <hr/>
    <div id="processing" style={{paddingBottom: '25px'}}>
	    <h3>Processing</h3>
	    <div style={{paddingBottom: '15px'}}>
		    <h4>Offline summarisation</h4> <br/>
		    <Link to='nearest-neighbour'>Nearest-neighbour paper</Link> <br/>
		    <Link to='selective-summary'>Selective-summary paper</Link>
	    </div>
	    <div>
		    <h4>Online summarisation</h4> <br/>
		    <Link to='classification'>Classification paper</Link> <br/>
		    <Link to='budget'>Control-chart paper</Link>
	    </div>
    </div>
    <hr/>
    <div id="evaluation" style={{paddingBottom: '25px'}}>
	    <h3>Evaluation</h3>
	    Summary comparison.  <br/>
	    <Link to='baseline'>Closest-to-centroid baseline paper</Link> <br/>
	    <Link to='protocol'>Protocol paper</Link>
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <hr/>
    <a href="http://pages.bangor.ac.uk/~mas00a/activities/Leverhulme/project_RPG_2015_188.html">Project home</a>
  </Layout>
)

export default IndexPage
