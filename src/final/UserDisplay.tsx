import React from 'react'
import useSearch from './useSearch'

const UserDisplay = ({ userId }: { userId: string }) => {
	const [isLoading, errorMessage, userResult, search] = useSearch()

	React.useEffect(() => {
		search(userId)
	}, [userId]) // this is very important. without it, you'll go into an infinite loop!

	if (errorMessage) {
		return <div>Error Showing User Data: {errorMessage}</div>
	} else if (isLoading) {
		return <div>Loading...</div>
	} else if (userResult != null) {
		return (
			<div>
				User: {userResult.firstName} {userResult.lastName} ({userResult.email})
			</div>
		)
	}

	return null
}

export default UserDisplay
