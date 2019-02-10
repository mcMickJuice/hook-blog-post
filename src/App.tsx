import React, { Component } from 'react'
import './App.css'
// import FinalPage from './final'
import BasicSearch from './basic-search'
class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <FinalPage /> */}
				<BasicSearch />
			</div>
		)
	}
}

export default App
