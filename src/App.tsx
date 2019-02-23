import React, { Component } from 'react'
import './App.css'
import BasicSearch from './basic-search/BasicSearch'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<h2>Search with Component</h2>
					<BasicSearch />
				</div>
				<div>
					<h2>Search Form with Hooks</h2>
				</div>
				<div>
					<h2>Search Form with HOC</h2>
				</div>

				<div>
					<h2>Search Form with Render Props</h2>
				</div>
				<div>
					<h2>User Info Render with Hook</h2>
				</div>
			</div>
		)
	}
}

export default App
