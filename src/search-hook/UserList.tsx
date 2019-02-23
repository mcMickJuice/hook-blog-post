import React from 'react'
import { users } from '../users'
import UserDisplay from './UserDisplay'

const UserList = () => {
	return (
		<div>
			{users.map(user => {
				return <UserDisplay key={user.userId} userId={user.userId} />
			})}
		</div>
	)
}

export default UserList
