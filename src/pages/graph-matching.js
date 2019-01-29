import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const GraphMatchingPage = () => (
	<Layout>
		<SEO title="Bipartite graph matching" keywords={['summarisation', 'evaluation', 'bipartite graph']} />
		<h1>Bipartite graph matching for keyframe summary evaluation</h1>
		<div style={{paddingBottom: '25px', paddingTop: '25px'}}>
			A keyframe summary, or “static storyboard”, is a collection of frames from a video designed to summarise its semantic content. Many algorithms have been proposed to extract such summaries automatically. How best to evaluate these outputs is an important but little-discussed question. We review the current methods for matching frames between two summaries in the formalism of graph theory. Our analysis revealed different behaviours of these methods, which we illustrate with a number of case studies. Based on the results, we recommend a greedy matching algorithm due to Kannappan et al.
		</div>
		<hr />
		<div style={{paddingBottom: '25px'}}>
			<h3>Matching algorithms</h3>
			<div>
				<hr style={{width: '50%', marginBottom: 0}}/>
				<p style={{marginBottom: 0}}><b>Algorithm 1</b>: Greedy Matching</p>
				<hr style={{width: '50%'}}/>
				<table style={{marginBottom: 0}}>
					<tr class='unbordered'>
						<td></td><td><b>Input</b>:</td><td>The distance matrix <em>D</em> between keyframe summaries <em>K<sub>1</sub></em> and <em>K<sub>2</sub></em>, and threshold θ.</td>
					</tr>
					<tr class='unbordered'>
						<td></td><td><b>Output</b>:</td><td>Number of pairings <em>m</em>.</td>
					</tr>
				</table>
				<table style={{marginBottom: 40}}>
					<tr class='unbordered'>
						<td>1</td><td colSpan="2"><em>m</em> ←  0. Find the smallest distance <em>d</em><sub>min</sub> = min <em>D</em>.</td>
					</tr>
					<tr class='unbordered'>
						<td>2</td><td><b>while</b></td><td><em>d</em><sub>min</sub> &lt; θ <b>do</b></td>
					</tr>
					<tr class='unbordered'>
						<td>3</td><td></td><td>Increment the number of matches, <em>m</em> ←  <em>m</em> + 1.</td>
					</tr>
					<tr class='unbordered'>
						<td>4</td><td></td><td>Remove the row and the column of the matched elements from <em>D</em>.</td>
					</tr>
					<tr class='unbordered'>
						<td>5</td><td></td><td>Find the smallest distance from the remaining matrix <em>d</em><sub>min</sub> = min <em>D</em>.</td>
					</tr>
				</table>
			</div>
			<div>
				<hr style={{width: '50%', marginBottom: 0}}/>
				<p style={{marginBottom: 0}}><b>Algorithm 2</b>: Algorithm of Mahmoud [1]</p>
				<hr style={{width: '50%'}}/>
				<table style={{marginBottom: 0}}>
					<tr class='unbordered'>
						<td></td><td><b>Input</b>:</td><td>Keyframe summaries <em>K</em><sub>1</sub> and <em>K</em><sub>2</sub> arranged in temporal order, and threshold θ.</td>
					</tr>
					<tr class='unbordered'>
						<td></td><td><b>Output</b>:</td><td>Number of pairings <em>m</em>.</td>
					</tr>
				</table>
				<table style={{marginBottom: 40}}>
					<tr class='unbordered'>
						<td>1</td><td colSpan="4"><em>m</em> ←  0.</td>
					</tr>
					<tr class='unbordered'>
						<td>2</td><td><b>for</b></td><td colSpan="3">each frame <em>a</em> ∈ <em>K</em><sub>1</sub> <b>do</b></td>
					</tr>
					<tr class='unbordered'>
						<td>3</td><td></td><td><b>for</b></td><td colSpan="2">each frame <em>b</em> ∈ <em>K</em><sub>2</sub> <b>do</b></td>
					</tr>
					<tr class='unbordered'>
						<td>4</td><td></td><td></td><td><b>if</b></td><td>this pair of frames is close enough to be paired, <em>d</em>(<em>a</em>, <em>b</em>) &lt; θ, <b>then</b></td>
					</tr>
					<tr class='unbordered'>
						<td>5</td><td></td><td></td><td></td><td>Increment the number of pairings, <em>m</em> ← <em>m</em> + 1.</td>
					</tr>
					<tr class='unbordered'>
						<td>6</td><td></td><td></td><td></td><td>Remove <em>a</em> from <em>K</em><sub>1</sub> and <em>b</em> from <em>K</em><sub>2</sub>.</td>
					</tr>
					<tr class='unbordered'>
						<td>7</td><td></td><td></td><td></td><td>Break.</td>
					</tr>
				</table>
			</div>
			<div>
				<hr style={{width: '50%', marginBottom: 0}}/>
				<p style={{marginBottom: 0}}><b>Algorithm 3</b>: Algorithm of Kannappan et al. [2]</p>
				<hr style={{width: '50%'}}/>
				<table style={{marginBottom: 0}}>
					<tr class='unbordered'>
						<td></td><td><b>Input</b>:</td><td>The distance matrix <em>D</em> between keyframe summaries <em>K<sub>1</sub></em> and <em>K<sub>2</sub></em>, and threshold θ.</td>
					</tr>
					<tr class='unbordered'>
						<td></td><td><b>Output</b>:</td><td>Number of pairings <em>m</em>.</td>
					</tr>
				</table>
				<table>
					<tr class='unbordered'>
						<td>1</td><td colSpan="4">Initialise a set of pairings <em>M</em> ← ∅.</td>
					</tr>
					<tr class='unbordered'>
						<td>2</td><td><b>for</b></td><td colSpan="3">each frame <em>a</em> ∈ <em>K</em><sub>1</sub> <b>do</b></td>
					</tr>
					<tr class='unbordered'>
						<td>3</td><td></td><td><b>for</b></td><td colSpan="2">each frame <em>b</em> ∈ <em>K</em><sub>2</sub> <b>do</b></td>
					</tr>
					<tr class='unbordered'>
						<td>4</td><td></td><td></td><td><b>if</b></td><td><em>b</em> = arg min<sub>b' ∈ <em>K</em><sub>2</sub></sub> <em>d</em>(<em>a</em>, <em>b</em>') and <em>a</em> = arg min<sub><em>a</em>' ∈ <em>K</em><sub>1</sub></sub> <em>d</em>(<em>a</em>' , <em>b</em>) <b>then</b></td>
					</tr>
					<tr class='unbordered'>
						<td>5</td><td></td><td></td><td></td><td>Add the pair to the matching set <em>M</em> ← <em>M</em> ∪ {(<em>a</em>, <em>b</em>)}.</td>
					</tr>
					<tr class='unbordered'>
						<td>6</td><td colSpan="4">Remove from <em>M</em> all pairs for which <em>d</em>(<em>a</em>, <em>b</em>) ≥ θ.</td>
					</tr>
					<tr class='unbordered'>
						<td>7</td><td colSpan="4"><em>m</em> ← |<em>M</em>|.</td>
					</tr>
				</table>
			</div>
		</div>
		<hr />
		<div style={{paddingBottom: '25px'}}>
			<h3>Examples</h3>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV28Greedy5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(a) Greedy, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV28Kannappan5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(b) Kannappan, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV28Greedy3' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(c) Greedy, θ = 0.3.</p>
				</div>
			</div>
			<p><b>Fig. 1</b>  Matchings between the output of the Open Video (OV) project algorithm and the summary provided by user #2 for VSUMM video #28.</p>
		</div>
		<hr/>
		<div style={{paddingBottom: '25px'}}>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV39Greedy5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(a) Greedy, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV39Kannappan5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(b) Kannappan, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%'}}>
					<Image name='graphMatchingV39Maximal5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(c) Maximal, θ = 0.5.</p>
				</div>
			</div>
			<p><b>Fig. 2</b>  Matchings between the output of the Open Video (OV) project algorithm and the summary provided by user #4 for VSUMM video #39. Frame ordering is not used in the algorithms (other than Mahmoud’s). The greedy algorithm and the algorithm of Kannappan et al. both make a pairing between the final frame of the OV output and a much earlier frame in the selection of user #4. This pairing is vastly out of chronological order, but semantically correct.</p>
		</div>
		<hr/>
		<div style={{paddingBottom: '25px'}}>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<div style={{flexBasis: '30%', flex: '0.388'}}>
					<Image name='graphMatchingV34Greedy5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(a) Greedy, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%', flex: '0.386'}}>
					<Image name='graphMatchingV34Kannappan5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(b) Kannappan, θ = 0.5.</p>
				</div>
				<div style={{flexBasis: '30%', flex: '0.301'}}>
					<Image name='graphMatchingV34Mahmoud5' fluid/>
					<p style={{textAlign: 'center', paddingTop: 8}}>(c) Mahmoud, θ = 0.5.</p>
				</div>
			</div>
			<p><b>Fig. 3</b>  Matchings between the output of the Still and Moving Video Storyboard for the Web Scenario (STIMO) algorithm and the summary provided by user #2 for VSUMM video #34.</p>
		</div>
		<hr/>
		<div>
			<ol class="smallFont">
				<li>
					Mahmoud K.: An enhanced method for evaluating automatic video summaries. arXiv preprint arXiv:1401.3590 (2014)
				</li>
				<li>
					Kannappan S., Liu Y., Tiddeman B.: A pertinent evaluation of automatic video summary. In: Proceedings of the 23rd International Conference on Pattern Recognition (2016)
				</li>
			</ol>
		</div>
		<hr/>
		<div style={{paddingBottom: '25px'}}>
			<h3>Reference</h3>
			<p>Gunn I.A.D., Kuncheva L.I., and Yousefi P., Bipartite graph matching for keyframe summary evaluation. arXiv:1712.06914v1, 2017.</p>
		</div>
		<hr/>
		<div>
			<h3>Links</h3>
			<p>
				<a style={{paddingLeft: '5px'}} href="http://pages.bangor.ac.uk/~mas00a/papers/iglkpyArXiv17.pdf">Paper</a>
			</p>
			<p>Data:
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

export default GraphMatchingPage
