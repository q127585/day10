<template>
	<view>
		<view class="ipt">
			<text>天天童装</text>
			<input type="text" placeholder="输入关键词搜索">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
</style>
