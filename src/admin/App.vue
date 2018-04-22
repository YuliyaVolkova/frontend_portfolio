<template lang="pug">
  .admin
  	appHeader
  	tabs
  	.content
  		router-view
</template>

<script>
	import header from './components/header.vue';
	import tabs from './components/tabs.vue';
	import about from './components/about.vue';
	export default {
  		components: {
   			appHeader: header,
   			tabs, about,
  		}
	}
</script>

<style lang="scss">
	.admin {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		@include custom_1800 {
			width: 1800px;
			margin: 0 auto;
		}
	}
	.content {
		flex: 1;
		position: relative;
		display: flex;
		padding-bottom: rem(100);
		&:before {
			content: "";
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			@include size(100%);
			background: url('~img/decor/bg/admin_bg.jpg') center center / cover no-repeat;;
			z-index: -1;
		}
		&:after {
			content: "";
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			@include size(100%);
			background: rgba($primaryColor, 0.85);
			z-index: -1;
		}
	}
</style>