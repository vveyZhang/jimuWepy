import request from '../utils/request'
export function fetchLogin(params) {
	return request(`/api/applet/login`,
		params
		, "POST")
}