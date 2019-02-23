import React from 'react'
import { UserInfo } from '../users'
import userSearchHoc from './UserSearchHoc'

interface UserSearchWithHocProps {
	isLoading: boolean
	errorMessage?: string
	searchResult?: UserInfo
	onSearch: (userId: string) => void
}

interface UserSearchWithHocState {
	searchTerm: string
}

class UserSearchWithHoc extends React.Component<
	UserSearchWithHocProps,
	UserSearchWithHocState
> {
	state: UserSearchWithHocState = {
		searchTerm: ''
	}

	handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			searchTerm: evt.currentTarget.value
		})
	}

	handleSearchSubmit = (evt: React.FormEvent) => {
		const { searchTerm } = this.state
		evt.preventDefault()

		this.props.onSearch(searchTerm)
	}

	render() {
		const { isLoading, errorMessage, searchResult } = this.props
		const { searchTerm } = this.state
		return (
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
		)
	}
}

export default userSearchHoc(UserSearchWithHoc)
