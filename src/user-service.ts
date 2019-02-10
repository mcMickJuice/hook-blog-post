export interface UserInfo {
	email: string
	first_name: string
	last_name: string
}

const userInfo: UserInfo = {
	email: 'user@gmail.com',
	first_name: 'mike',
	last_name: 'joyce'
}

export const getUserInfoById = async (userId: string): Promise<UserInfo> => {
	return Promise.resolve(userInfo)
}
