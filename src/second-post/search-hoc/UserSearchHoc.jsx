import React from 'react'
import { getUserInfoById } from '../../user-service'

const userSearchHoc = Component => {
	return class UserSearchHoc extends React.Component {
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

			return (
				<Component
					isLoading={isLoading}
					errorMessage={errorMessage}
					searchResult={searchResult}
					onSearch={this.handleSubmit}
					{...this.props}
				/>
			)
		}
	}
}

export default userSearchHoc
