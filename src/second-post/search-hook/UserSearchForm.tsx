import React, { FormEvent } from 'react'
import useSearch from './useSearch'

const UserSearchForm = () => {
	const [userId, updateUserId] = React.useState('')
	const [isLoading, error, searchResult, searchUserId, reset] = useSearch()

	return (
		<div>
			<form
				onSubmit={(evt: FormEvent) => {
					evt.preventDefault()
					searchUserId(userId)
				}}
			>
				<div>
					<label htmlFor="user-id">User ID</label>
					<input
						type="text"
						value={userId}
						onChange={evt => {
							updateUserId(evt.currentTarget.value)
							reset()
						}}
					/>
					<button
						disabled={userId.length === 0}
						onClick={() => searchUserId(userId)}
					>
						Search
					</button>
				</div>
			</form>
			<div>
				{isLoading ? <div>Loading...</div> : null}
				{error != null ? (
					<div>
						Error searching for {userId}: {error}
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

export default UserSearchForm
