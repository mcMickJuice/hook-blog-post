import React, { Component } from 'react'
import './App.css'
import BasicSearch from './basic-search/BasicSearch'
import UserSearchForm from './search-hook/UserSearchForm'
import UserList from './search-hook/UserList'
import UserSearchWithHoc from './search-hoc/UserSearchWithHoc'
import UserSearchWithRenderProp from './search-render-prop/UserSearchWithRenderProp'

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
					<UserSearchForm />
				</div>
				<div>
					<h2>Search Form with HOC</h2>
					<UserSearchWithHoc />
				</div>
				<div>
					<h2>Search Form with Render Props</h2>
					<UserSearchWithRenderProp />
				</div>
				<div>
					<h2>User Info Render with Hook</h2>
					<UserList />
				</div>
			</div>
		)
	}
}

export default App
