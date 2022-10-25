function get(url) {
	wx.showLoading({
		title: '加载中',
	})
	return new Promise((resolove, reject) => {
		wx.request({
			url,
			success(res) {
				wx.hideLoading()
				resolove(res)
			}
		})
	})
}
function post(url) {
	wx.showLoading({
		title: '加载中',
	})
	return new Promise((resolove, reject) => {
		wx.request({
			url,
		  method:'post',
		    header: {
		      'content-type': 'application/json' // 默认值
		    },
			success(res) {
				wx.hideLoading()
				resolove(res)
			}
		})
	})
}
export default {get,post}
