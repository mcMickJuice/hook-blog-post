import React from 'react'
import { UserInfo } from '../users'
import { getUserInfoById } from '../user-service'

interface UserSearchHocState {
	isLoading: boolean
	errorMessage?: string
	searchResult?: UserInfo
}

const userSearchHoc = (
	Component: React.ComponentType<{
		isLoading: boolean
		errorMessage?: string
		searchResult?: UserInfo
		onSearch: (userId: string) => void
	}>
) => {
	return class UserSearchHoc extends React.Component<{}, UserSearchHocState> {
		state: UserSearchHocState = {
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
