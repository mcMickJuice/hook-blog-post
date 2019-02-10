import React, { Component } from 'react'
import './App.css'
// import FinalPage from './final'
// import BasicSearch from './basic-search'
// import UserSearchHoc from './search-hoc'
import UserSearchRenderProp from './search-render-prop'
class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <FinalPage /> */}
				{/* <BasicSearch /> */}
				{/* <UserSearchHoc /> */}
				<UserSearchRenderProp />
			</div>
		)
	}
}

export default App
