import { useReducer } from 'react'
import { getUserInfoById } from '../user-service'

const useSearch = () => {
	const [searchState, dispatch] = useReducer(searchReducer, {})

	function resetErrorState() {
		dispatch({ type: 'Initial' })
	}

	async function search(userId) {
		dispatch({ type: 'Search' })

		try {
			const result = await getUserInfoById(userId)
			dispatch({ type: 'Success', result })
		} catch (e) {
			dispatch({ type: 'Error', error: e.message })
		}
	}

	const { isLoading, searchResult, error } = searchState

	return [isLoading, error, searchResult, search, resetErrorState]
}
const searchReducer = (initialState, action) => {
	switch (action.type) {
		case 'Initial':
			return {}
		case 'Search':
			return {
				isLoading: true
			}
		case 'Error':
			return {
				error: action.error
			}
		case 'Success':
			return {
				searchResult: action.result
			}
		default:
			return initialState
	}
}

export default useSearch
