
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
import store from 'store/index.js'
uni.$http = $http
$http.baseUrl = 'https://api.it120.cc/small4/'

$http.beforeRequest = function (options) {  
    uni.showLoading({
    	title: '数据加载中...',
	})
}
$http.afterRequest = function () {  
    uni.hideLoading()
}
uni.$http = $http
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif