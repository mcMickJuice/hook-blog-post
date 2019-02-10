export interface UserInfo {
	email: string
	firstName: string
	lastName: string
	userId: string
}

export const users: UserInfo[] = [
	{
		userId: '1',
		email: 'mikejoyce@gmail.com',
		firstName: 'mike',
		lastName: 'joyce'
	},
	{
		userId: '2',
		email: 'larry@gmail.com',
		firstName: 'larry',
		lastName: 'dog'
	},
	{
		userId: '3',
		email: 'alex@gmail.com',
		firstName: 'alex',
		lastName: 'j'
	},
	{
		userId: '4',
		email: 'alphonse@gmail.com',
		firstName: 'alphonse',
		lastName: 'cat'
	}
]
