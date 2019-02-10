import { users, UserInfo } from './users'

const maxWait = 3000
const minWait = 1000
const getWait = () => {
	const wait = Math.random() * maxWait

	return Math.max(minWait, wait)
}

export const getUserInfoById = async (userId: string): Promise<UserInfo> => {
	return new Promise((resolve, reject) => {
		const userInfo = users.find(u => u.userId === userId)
		const wait = getWait()
		setTimeout(() => {
			if (userInfo == null) {
				reject({ message: 'User not found' })
			}

			resolve(userInfo)
		}, wait)
	})
}
