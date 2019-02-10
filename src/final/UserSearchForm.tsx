import React, { FormEvent } from 'react'
import useZidSearch from './useSearch'

// const styles = {
// 	root: {
// 		padding: '16px'
// 	},
// 	form: {
// 		display: 'flex',
// 		'&>*:first-child': {
// 			marginRight: '8px'
// 		},
// 		marginBottom: '16px'
// 	}
// }

const UserSearchForm = () => {
	const [zid, updateZid] = React.useState('')
	const [isLoading, error, searchResult, searchZid, reset] = useZidSearch()

	return (
		<div>
			<form
				onSubmit={(evt: FormEvent) => {
					evt.preventDefault()
					searchZid(zid)
				}}
			>
				<div>
					<label htmlFor="user-id">User ID</label>
					<input
						type="text"
						value={zid}
						onChange={evt => {
							updateZid(evt.currentTarget.value)
							reset()
						}}
					/>
					<button disabled={zid.length === 0} onClick={() => searchZid(zid)}>
						Search
					</button>
				</div>
			</form>
			<div>
				{isLoading ? <div>Loading...</div> : null}
				{error != null ? (
					<div>
						Error searching for {zid}: {error}
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
