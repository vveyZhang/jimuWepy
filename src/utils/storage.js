import wepy from 'wepy';
const clear = () => wepy.clearStorageSync();
const remove = (key) => wepy.removeStorageSync(key)
const set = (key, data) => wepy.setStorageSync(key, data)
const get = (key) => wepy.getStorageSync(key)

export default {
	clear,
	remove,
	get,
	set
}