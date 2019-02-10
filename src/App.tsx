import React, { Component } from 'react'
import './App.css'
// import FinalPage from './final'
// import BasicSearch from './basic-search'
import UserSearchHoc from './search-hoc'
class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <FinalPage /> */}
				{/* <BasicSearch /> */}
				<UserSearchHoc />
			</div>
		)
	}
}

export default App
