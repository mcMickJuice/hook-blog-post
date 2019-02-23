import React from 'react'
import UserSearch from './UserSearch'

class UserSearchWithRenderProp extends React.Component {
	state = {
		searchTerm: ''
	}

	handleSearchChange = evt => {
		this.setState({
			searchTerm: evt.currentTarget.value
		})
	}

	render() {
		const { searchTerm } = this.state
		return (
			<UserSearch>
				{({ isLoading, errorMessage, searchResult, onSearch }) => {
					return (
						<div>
							<h2>User Search Form with Render Prop</h2>
							<div>
								<form
									onSubmit={evt => {
										const { searchTerm } = this.state
										evt.preventDefault()

										onSearch(searchTerm)
									}}
								>
									<div>
										<label htmlFor="user-id">User ID</label>
										<input
											type="text"
											value={searchTerm}
											onChange={this.handleSearchChange}
										/>
										<button
											disabled={searchTerm.length === 0}
											onClick={evt => {
												const { searchTerm } = this.state
												evt.preventDefault()

												onSearch(searchTerm)
											}}
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
				}}
			</UserSearch>
		)
	}
}

export default UserSearchWithRenderProp
