import React from 'react'
import { getUserInfoById } from '../user-service'

class UserSearch extends React.Component {
	state = {
		isLoading: false
	}

	handleSubmit = userId => {
		this.setState({
			isLoading: true,
			searchResult: undefined
		})

		getUserInfoById(userId)
			.then(userInfo => {
				this.setState({
					searchResult: userInfo,
					isLoading: false
				})
			})
			.catch(err => {
				this.setState({
					errorMessage: err.message,
					isLoading: false
				})
			})
	}

	render() {
		const { isLoading, errorMessage, searchResult } = this.state

		return this.props.children({
			isLoading,
			errorMessage,
			searchResult,
			onSearch: this.handleSubmit
		})
	}
}

export default UserSearch
