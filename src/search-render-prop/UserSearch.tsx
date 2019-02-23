import React from 'react'
import { UserInfo } from '../users'
import { getUserInfoById } from '../user-service'

interface UserSearchProps {
	children: ({
		isLoading,
		errorMessage,
		searchResult,
		onSearch
	}: {
		isLoading: boolean
		errorMessage?: string
		searchResult?: UserInfo
		onSearch: (userId: string) => void
	}) => React.ReactElement<any, any>
}

interface UserSearchState {
	isLoading: boolean
	errorMessage?: string
	searchResult?: UserInfo
}

class UserSearch extends React.Component<UserSearchProps, UserSearchState> {
	state: UserSearchState = {
		isLoading: false
	}

	handleSubmit = (userId: string) => {
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
