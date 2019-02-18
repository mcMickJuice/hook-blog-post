import React from 'react'
import { UserInfo } from '../../users'
import { getUserInfoById } from '../../user-service'

interface UserSearchState {
	isLoading: boolean
	errorMessage?: string
	searchResult?: UserInfo
	searchTerm: string
}

class UserSearch extends React.Component<{}, UserSearchState> {
	state: UserSearchState = {
		isLoading: false,
		searchTerm: ''
	}
	handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			searchTerm: evt.currentTarget.value,
			errorMessage: undefined
		})
	}

	handleSearchSubmit = (evt: React.FormEvent) => {
		const { searchTerm } = this.state
		evt.preventDefault()

		this.setState({
			isLoading: true,
			searchResult: undefined
		})

		getUserInfoById(searchTerm)
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
		const { searchTerm, isLoading, errorMessage, searchResult } = this.state
		return (
			<div>
				<h2>Basic Search State</h2>
				<div>
					<form onSubmit={this.handleSearchSubmit}>
						<div>
							<label htmlFor="user-id">User ID</label>
							<input
								type="text"
								value={searchTerm}
								onChange={this.handleSearchChange}
							/>
							<button
								disabled={searchTerm.length === 0}
								onClick={this.handleSearchSubmit}
							>
								Search
							</button>
						</div>
					</form>
					<div>
						{isLoading ? <div>Loading...</div> : null}
						{errorMessage != null ? (
							<div>
								Error searching for {searchTerm}: {errorMessage}
							</div>
						) : null}
						{searchResult != null ? (
							<div>
								<h2>User Info</h2>
								<div>
									{searchResult.firstName} {searchResult.lastName}
								</div>
								<div>{searchResult.email}</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

export default UserSearch
