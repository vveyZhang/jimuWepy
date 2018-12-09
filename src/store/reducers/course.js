import { handleActions } from 'redux-actions'
import { FETCHCOURSELIST } from '../types'

export default handleActions({
	[FETCHCOURSELIST](state, { payload }) {
		console.log('payload--->', payload)
		return {
			...state,
			list:payload
		}
	},
}, {
		list: []
})