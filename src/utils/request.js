import wepy from 'wepy';
const prod = _NODE_
const domain = prod ? "https://www.jimubiancheng.com" : 'http://dev.jimubiancheng.com'
import 'wepy-async-function';
import Storage from './storage'
// import { errorToast, networkToast } from './toast';
const codeMessage = {
	401: '登陆过期',
	403: '权限错误',
	404: '请求错误',
	500: '服务器错误'
};
export default function request(url, params, method, option) {
	let data = params;
	return wepy.request({
		url: domain + url,
		data,
		method,
		header: {
			"content-type": "application/x-www-form-urlencoded",
			'token': Storage.get('token')
		},
		...option
	}).then(response => checkStatus(response))
		.then(data => judeResponse(data))
		.catch(error => {
			console.log(error)
			return error
		});
};
function judeResponse(data) {
	if (data.status !== 0) {
		console.log(data);
		wepy.showToast({
			title: `${data.msg}`,
			image: '../resource/tips/error.png'
		})
	}
	return data
}
function checkStatus(response) {
	if (response.statusCode >= 200 && response.statusCode < 300) {
		return response.data;
	}
	const error = new Error(response.statusCode);
	error.response = response;
	error.statusCode = response.statusCode;
	throw error;
}