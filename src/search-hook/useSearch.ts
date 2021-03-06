import { useReducer } from 'react'
import { getUserInfoById } from '../user-service'
import { UserInfo } from '../users'

const useSearch = (): [
	boolean | undefined,
	string | undefined,
	(UserInfo | undefined),
	(userId: string) => Promise<void>,
	() => void
] => {
	const [searchState, dispatch] = useReducer(searchReducer, {})

	function resetErrorState() {
		dispatch({ type: SearchActionType.Initial })
	}

	async function search(userId: string) {
		dispatch({ type: SearchActionType.Search })

		try {
			const result = await getUserInfoById(userId)
			dispatch({ type: SearchActionType.Success, result })
		} catch (e) {
			dispatch({ type: SearchActionType.Error, error: e.message })
		}
	}

	const { isLoading, searchResult, error } = searchState

	return [isLoading, error, searchResult, search, resetErrorState]
}

enum SearchActionType {
	Initial = 'Initial',
	Search = 'Search',
	Error = 'Error',
	Success = 'Success'
}

interface InitialAction {
	type: SearchActionType.Initial
}

interface SearchAction {
	type: SearchActionType.Search
}

interface ErrorAction {
	type: SearchActionType.Error
	error: string
}

interface SuccessAction {
	type: SearchActionType.Success
	result: UserInfo
}

type Action = InitialAction | SearchAction | ErrorAction | SuccessAction

interface SearchActionState {
	isLoading?: boolean
	error?: string
	searchResult?: UserInfo
}

const searchReducer = (
	initialState: SearchActionState,
	action: Action
): SearchActionState => {
	switch (action.type) {
		case SearchActionType.Initial:
			return {}
		case SearchActionType.Search:
			return {
				isLoading: true
			}
		case SearchActionType.Error:
			return {
				error: action.error
			}
		case SearchActionType.Success:
			return {
				searchResult: action.result
			}
		default:
			return initialState
	}
}

export default useSearch
