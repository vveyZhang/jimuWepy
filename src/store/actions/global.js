import { FETCHUSERINFO } from '../types/global';
import { createAction } from 'redux-actions'
import { fetchLogin } from '../../servers/global'
export const getUserInfo = createAction(FETCHUSERINFO, (params) => {
	return fetchLogin(params).then(data => data)
})