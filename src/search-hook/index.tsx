import React from 'react'
import UserSearchForm from './UserSearchForm'
import { users } from '../users'
import UserDisplay from './UserDisplay'

const FinalPage = () => {
	return (
		<div>
			<div>
				<h2>User Search</h2>
				<UserSearchForm />
			</div>
			<div>
				<h2>User Listing</h2>
				<div>
					{users.map(user => {
						return <UserDisplay key={user.userId} userId={user.userId} />
					})}
				</div>
			</div>
		</div>
	)
}

export default FinalPage
