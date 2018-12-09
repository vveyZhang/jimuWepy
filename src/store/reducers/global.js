import { handleActions } from 'redux-actions'
import { SETUSERINFO, FETCHUSERINFO, SETAUTHSETTING } from '../types'
import Storage from '../../utils/storage'
export default handleActions({
	[SETUSERINFO](state, { payload }) {
		return {
			...state,
			...payload
		}
	},
	[FETCHUSERINFO](state, { payload }) {
		console.log('payload', payload)
		if (payload.msg !== 'OK') return state;
		console.log('set', payload.data.token)
		Storage.set('token', payload.data.token);
		return {
			token: payload.data.token,
			userInfo: payload.data.user
		}
	},
	[SETAUTHSETTING](state, { payload }) {
		console.log(payload)
		return {
			...state,
			authSetting: {
				...payload
			}
		}
	}
}, {
		token: null,
		userInfo: null,
		authSetting: null
	})