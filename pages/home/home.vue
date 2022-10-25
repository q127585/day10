<template>
	<view class="cc">
		<view class="ipt">
			<text>天天童装</text>
			<input type="text" placeholder="输入关键词搜索">
		</view>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in banner" :key="index">
					<view class="swiper-item">
						<image :src="item.image_src" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="ul">
			<view class="li">
				<text>上装</text>
			</view>
			<view class="li">
				<text>裤装</text>
			</view>
			<view class="li">
				<text>特价区</text>
			</view>
			<view class="li">
				<text>裙装</text>
			</view>
			<view class="li">
				<text>套装</text>
			</view>
			<view class="li">
				<text>外套</text>
			</view>
			<view class="li">
				<text>秒杀</text>
			</view>
			<view class="li">
				<text>内裤</text>
			</view>
			<view class="li">
				<text>袜子</text>
			</view>
			<view class="li">
				<text>鞋</text>
			</view>
		</view>
		<view class="h2">
			<span class="left">优惠咨询</span>
			<span class="right">店铺新开张，优惠多多，戳戳></span>
		</view>
		<view class="ull">
			<view class="lii" v-for="(item,index) in lb" :key="index">
				<image :src="item.cat_icon" mode=""></image>
				<p>名牌潮牌</p>
				<p class="span">￥4999</p>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../http/http/http.js'
	export default {
		data() {
			return {
				banner:[],
				lb:[]
			};
		},
		methods:{
			async bannerlist(){
				let {data:res} = await http.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
				console.log(res);
				this.banner = res.message
			},
			async lblist(){
				let {data:res} = await http.get('https://api-hmugo-web.itheima.net/api/public/v1/categories')
				console.log(res);
				// cat_icon
				this.lb = res.message[0].children[0].children
				console.log(res.message[0].children[0].children);
			}
		},
		mounted() {
			this.bannerlist()
			this.lblist()
		}
	}
</script>

<style lang="scss">
	.ipt {
		width: 100%;
		position: fixed;
		top: 0;
		padding-bottom: 10px;
		display: flex;
		border-bottom: 1px solid #aaa;
		text{
			font-weight: bold;
		}
		input{
			border: 1px solid #aaa;
			border-radius: 10px;
			margin-left: 30px;
			padding-left: 50px;
		}
	}
	.banner{
		margin-top: 35px;
		image{
			width: 100%;
		}
	}
	.ul{
		width: 95%;
		margin: 0 auto;
		// background-color: aqua;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: center;
		border-radius: 10px;
		box-shadow: 2px 2px 5px #000;
		margin-top: 10px;
		margin-bottom: 10px;
		.li{
			width: 20%;
			padding: 30px 0 20px 0;
		}
	}
	.h2{
		width: 100%;
		// background-color: #fff;
		line-height: 40px;
		padding: 10px 0;
		.left{
			float: left;
		}
		.right{
			float: right;
		}
	}
	.ull{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.lii{
			width: 48%;
			image{
				width: 100%;
				border-radius: 5px;
			}
		}
	}
	
</style>
